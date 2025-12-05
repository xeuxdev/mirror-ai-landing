import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is DSync and how does it contribute to decentralization?",
    answer:
      "DSync is a decentralized synchronization protocol that ensures data consistency across distributed nodes without relying on a central authority. It contributes to decentralization by enabling peer-to-peer data replication and verification.",
  },
  {
    question: "How can users access websites hosted on Destra Network?",
    answer:
      "Users can access websites hosted on Destra Network through standard web browsers using Destra's decentralized DNS resolvers or via specific gateways that bridge the decentralized network with the traditional web.",
  },
  {
    question:
      "What is Destra's Decentralized DNS and how does it enhance privacy?",
    answer:
      "Destra's Decentralized DNS is a domain name system that operates on a blockchain, removing the need for central registrars. It enhances privacy by preventing censorship, domain seizures, and tracking of user queries by centralized entities.",
  },
  {
    question: "What is Proof of Sync consensus and how does it work?",
    answer:
      "Proof of Sync is a consensus mechanism used by Destra Network to validate data synchronization between nodes. It rewards nodes for accurately and timely syncing data, ensuring the network remains consistent and reliable.",
  },
  {
    question: "How does Destra Network prioritize user privacy?",
    answer:
      "Destra Network prioritizes user privacy by encrypting data in transit and at rest, using decentralized identifiers, and minimizing data collection. The architecture ensures that users retain control over their personal information.",
  },
];

export function FAQSection() {
  return (
    <div className="">
      <div className="flex max-w-[340px] md:max-w-screen-sm w-full flex-col items-center mx-auto py-10">
        <div
          className="hero-text2 font-semibold md:text-5xl text-4xl text-center"
          style={{ opacity: 1, transform: "none", willChange: "auto" }}
        >
          FAQ
        </div>
        <p
          className="self-stretch text-center text-white md:text-base text-sm font-normal mt-4"
          style={{ opacity: 1, transform: "none", willChange: "auto" }}
        >
          For any other questions, feel welcome to reach out to the community
        </p>
      </div>
      <div
        className="w-full max-w-[370px] p-2.5 md:p-5 md:max-w-5xl mx-auto justify-start md:justify-center items-start text-white transition-all delay-500"
        data-orientation="vertical"
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
      </div>
    </div>
  );
}
