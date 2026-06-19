#!/usr/bin/env bash
set -euo pipefail

# Usage: deploy-container.sh <image> <container_name> <port>
IMAGE="${1:?image required}"
CONTAINER="${2:?container name required}"
PORT="${3:?port required}"

echo "==> Pulling ${IMAGE}"
docker pull "${IMAGE}"

echo "==> Stopping old container ${CONTAINER}"
docker stop "${CONTAINER}" 2>/dev/null || true
docker rm "${CONTAINER}" 2>/dev/null || true

echo "==> Starting ${CONTAINER} on 127.0.0.1:${PORT}"
docker run -d \
  --name "${CONTAINER}" \
  --restart unless-stopped \
  -p "127.0.0.1:${PORT}:${PORT}" \
  -e "PORT=${PORT}" \
  -e "HOSTNAME=0.0.0.0" \
  "${IMAGE}"

echo "==> Pruning unused images to save disk space"
docker image prune -af --filter "until=24h" || true

echo "==> Deploy complete: ${CONTAINER} -> 127.0.0.1:${PORT}"
