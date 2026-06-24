import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "./Container";

const faqs = [
    {
        question: "What is Sagyboar?",
        answer:
            "SAGYBOAR is an AI-native DevOps platform that transforms how engineering teams deploy, monitor, and manage applications. It provides a unified control plane to orchestrate multi-service workloads with zero cloud dependency.",
    },
    {
        question: "Do I need to provide my own server to deploy applications?",
        answer:
            "No, Sagyboar offers one-click deployments directly to our fully managed servers, so you're up and running in minutes with zero infrastructure hassle. However, because our platform is designed without vendor lock-in, you also have the flexibility to self-host on your own infrastructure if you prefer.",
    },
    {
        question: "How does the embedded AI deployment assistant work?",
        answer:
            "When you connect your repository, our intelligent assistant auto-detects your tech stack, generates production-ready Dockerfiles and Compose configurations, and recommends the exact infrastructure sizing you need—eliminating hours of manual setup.",
    },
    {
        question: "What happens when an error or anomaly occurs in my application?",
        answer:
            "Our AI monitoring engine continuously analyzes your logs and metrics. When an issue is detected, it surfaces plain-language incident explanations and automatically generates a ticket in your connected repository with a detailed problem description, estimated resolution time, and priority level.",
    },
    {
        question: "What is included in the Fully Managed Maintenance service?",
        answer:
            "Beyond standard hosting, we maintain your project by acting as an extension of your team. We assign you a dedicated developer powered by an AI assistant, a DevOps engineer to manage deployments and health, and a QA tester—all to ensure your team can focus purely on building.",
    },
    {
        question: "Is there a limit on the number of deployments or databases?",
        answer:
            "No. You can use your unified dashboard to deploy unlimited containerized applications, manage complex databases, and orchestrate multi-service workloads seamlessly.",
    },
    {
        question: "Can I use Sagyboar to deploy AI-built apps?",
        answer:
            "Absolutely. Sagyboar works with code from any source, including apps built with AI coding tools. Our AI assistant will auto-generate the necessary configurations, giving your team a secure, governed space to ship AI-built applications quickly.",
    },
    {
        question: "What types of languages and frameworks are supported?",
        answer:
            "Sagyboar does not restrict programming languages. If your application can be containerized, Sagyboar can deploy it. Our AI automatically detects and writes configurations for most modern frameworks natively.",
    },
    {
        question: "How does Sagyboar handle database management?",
        answer:
            "Our platform provides a unified control plane to provision, scale, and manage complex databases—including automatic backups and performance monitoring—directly from a single dashboard.",
    },
    {
        question: "What kind of support do you offer?",
        answer:
            "Clients on our Fully Managed Maintenance tier receive direct support from their assigned DevOps engineer and dedicated developer. We also offer community support via our GitHub discussions and Discord channel.",
    },
    {
        question: "Does the AI monitoring engine compromise my privacy?",
        answer:
            "No. The AI engine analyzes your system metrics and logs strictly for anomaly detection, automated ticketing, and ensuring platform stability. We do not track, sell, or share your proprietary codebase or usage data.",
    },
    {
        question: "Do you offer refunds?",
        answer:
            "We do not offer refunds, but you can cancel your managed services at any time. Because Sagyboar prevents vendor lock-in, you will always retain control of your codebase and configurations if you choose to migrate.",
    },
];

export function Faqs() {
    return (
        <section
            id="faqs"
            aria-labelledby="faq-title"
            className="bg-background py-16 sm:py-20"
        >
            <Container className="flex flex-col gap-10">
                <div className="mx-auto w-full justify-center lg:mx-0">
                    <h2
                        id="faq-title"
                        className="text-center font-display text-3xl tracking-tight text-foreground sm:text-4xl"
                    >
                        Frequently asked <span className="text-blue-400 border-b-2 border-blue-400">questions</span>
                    </h2>
                    <p className="mt-4 text-center text-lg tracking-tight text-muted-foreground">
                        If you can't find what you're looking for, please submit an issue
                        through our GitHub repository or ask questions on our Discord.
                    </p>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="mx-auto w-full max-w-3xl rounded-2xl border border-border bg-card/50 px-6 shadow-sm backdrop-blur-sm dark:bg-card/30"
                >
                    {faqs.map((faq, columnIndex) => (
                        <AccordionItem
                            value={`${columnIndex}`}
                            key={columnIndex}
                            className="border-border"
                        >
                            <AccordionTrigger className="text-left text-foreground hover:text-foreground">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>
        </section>
    );
}