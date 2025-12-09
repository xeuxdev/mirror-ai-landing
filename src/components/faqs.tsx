"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What makes Echo AI different from other AI trading tools?",
    answer:
      "Echo AI combines real-time market intelligence, adaptive strategy automation, and on-chain execution—meaning trades aren’t just predicted, they’re executed autonomously, transparently, and without relying on centralized systems.",
  },
  {
    question: "Do I need trading experience to use Echo AI?",
    answer:
      "Not at all. Echo AI is designed for both beginners and experienced traders. Users can deploy pre-built strategies, mirror high-performance wallets, or enable AI-managed vaults—no manual configuration required.",
  },
  {
    question: "How does on-chain execution work?",
    answer:
      "Once activated, the AI monitors markets, identifies opportunities, and executes trades directly on supported decentralized exchanges. All actions remain transparent, verifiable, and under the user’s wallet custody.",
  },
  {
    question: "Are my funds safe? Who controls custody?",
    answer:
      "Users retain 100% self-custody. Echo AI doesn’t hold funds, seed phrases, or private keys. The AI interacts only through permissioned smart contracts that users approve and can revoke at any time.",
  },
  {
    question: "Can I customize or build my own strategy?",
    answer:
      "Yes. Advanced users can modify parameters, integrate external data sources, or build custom strategies through the strategy builder and automation engine—without writing code.",
  },
];

export function FAQSection() {
  return (
    <section id="faqs">
      <div className="flex max-w-[340px] md:max-w-screen-sm w-full flex-col items-center mx-auto py-10">
        <motion.div
          className="hero-text2 font-semibold md:text-5xl text-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          FAQ
        </motion.div>
        <motion.p
          className="self-stretch text-center text-white md:text-base text-sm font-normal mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          For any other questions, feel welcome to reach out to the community
        </motion.p>
      </div>
      <motion.div
        className="w-full max-w-[370px] p-2.5 md:p-5 md:max-w-5xl mx-auto justify-start md:justify-center items-start text-white transition-all"
        data-orientation="vertical"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-white/20! last:border-b"
            >
              <AccordionTrigger className="py-6 md:items-center items-start text-left font-medium [&[data-state=open]>svg]:rotate-180 cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-normal items-start md:items-center transition-all">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
