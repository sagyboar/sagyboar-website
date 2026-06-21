#!/bin/bash

# Sagyboar Security Migration Script
# Configures a unique BETTER_AUTH_SECRET for Sagyboar installations

set -e

# Check if running as root
if [ "$(id -u)" != "0" ]; then
    echo "Error: This script must be run as root" >&2
    exit 1
fi

# Check if Sagyboar is installed
if ! docker service ls 2>/dev/null | grep -q Sagyboar; then
    echo "Error: Sagyboar service not found. Is Sagyboar installed?" >&2
    exit 1
fi

# Check if already configured
if docker secret ls 2>/dev/null | grep -q "Sagyboar-auth-secret"; then
    echo "✅ Auth secret is already configured!"
    echo "   (Stored securely in Docker Secrets)"
    echo ""
    exit 0
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Sagyboar Auth Secret Migration"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "👋 This script will generate a unique auth secret for your"
echo "   Sagyboar installation and migrate any existing 2FA data."
echo ""

# Generate new secret
echo "🔐 Generating secure auth secret..."
NEW_SECRET=$(openssl rand -hex 32)

# Store in Docker Secret
echo "$NEW_SECRET" | docker secret create Sagyboar-auth-secret -
echo "✅ Auth secret saved in Docker Secrets"

# Run 2FA migration inside the Sagyboar container
echo "🔄 Migrating existing 2FA records..."
Sagyboar_CONTAINER=$(docker ps --filter "name=Sagyboar" --format "{{.ID}}" | head -n1)

if [ -n "$Sagyboar_CONTAINER" ]; then
    docker exec \
        -e OLD_SECRET=better-auth-secret-123456789 \
        -e NEW_SECRET="$NEW_SECRET" \
        "$Sagyboar_CONTAINER" \
        sh -c "cd /app && pnpm run migrate-auth-secret"
    echo "✅ 2FA records migrated"
else
    echo "⚠️  Sagyboar container not found, skipping 2FA migration"
fi

# Update Sagyboar service to use the Docker Secret
echo "🔄 Updating Sagyboar service..."
docker service update \
    --secret-add source=Sagyboar-auth-secret,target=/run/secrets/Sagyboar-auth-secret \
    --env-add BETTER_AUTH_SECRET_FILE=/run/secrets/Sagyboar-auth-secret \
    --env-rm BETTER_AUTH_SECRET \
    Sagyboar

echo "⏳ Waiting for service to restart..."
sleep 5

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ All done! Your auth secret is now secured."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 What was configured:"
echo "   • Unique auth secret generated with openssl rand -hex 32"
echo "   • Secret stored in Docker Secrets (encrypted, in-memory only)"
echo "   • Existing 2FA records re-encrypted with the new secret"
echo "   • Sagyboar service updated to use the new secret"
echo ""
echo "💡 Next steps:"
echo "   • All active sessions have been invalidated — users will need to log in again"
echo "   • 2FA remains fully functional"
echo ""
