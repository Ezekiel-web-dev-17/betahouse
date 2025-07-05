import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

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

const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="mb-3 border-bottom pb-3"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <div
        className="d-flex justify-content-between align-items-center"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        <h5 className="mb-0 fw-bold text-dark">{q}</h5>
        <span className="text-primary">{open ? "−" : "+"}</span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.p
            className="mt-2 text-muted"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="fw-bold text-dark">Frequently Asked Questions</h1>
          <p className="text-secondary">
            Get answers to the most common questions about using Beta House.
          </p>
        </motion.div>

        <div className="col-lg-10 mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.question} a={faq.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
