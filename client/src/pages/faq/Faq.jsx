import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFileMinus, BsPlus } from "react-icons/bs";

const faqs = [
  {
    question: "Is Beta House free to use?",
    answer:
      "Yes! Browsing listings is 100% free. Agents may charge commission after a successful deal.",
  },
  {
    question: "How do I know the agent is real?",
    answer:
      "We verify all agents before they can list on Beta House. You can also view their rating and reviews.",
  },
  {
    question: "Can I post my house without an agent?",
    answer:
      "Absolutely. Homeowners can list their properties directly, and buyers can reach out via secure messaging.",
  },
];

const AccordionItem = ({ faq, index, isOpen, toggle }) => (
  <div className="mb-3 border rounded overflow-hidden shadow-sm">
    <button
      className="w-100 text-start bg-white border-0 py-3 px-4 d-flex justify-content-between align-items-center"
      onClick={() => toggle(index)}
      style={{ cursor: "pointer" }}
    >
      <span className="fw-semibold" style={{ color: "#0f462dd3" }}>
        {faq.question}
      </span>
      <span className="text-primary">
        {isOpen ? (
          <BsFileMinus className="fs-3" />
        ) : (
          <BsPlus className="fs-3" />
        )}
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="px-4 pb-3 text-muted"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-0" style={{ fontSize: "0.85em" }}>
            {faq.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-5 bg-white">
      <div className="container pt-5 mt-sm-5">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="fw-bold" style={{ color: "#3d9970" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-secondary">
            Get answers to the most common questions about using Beta House.
          </p>
        </motion.div>

        <div className="col-lg-10 mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              index={i}
              isOpen={activeIndex === i}
              toggle={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
