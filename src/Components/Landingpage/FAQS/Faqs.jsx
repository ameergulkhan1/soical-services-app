import React, { useState } from "react";
import "./Faqs.css";

function FAQS() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any unused item within 30 days for a full refund."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. Shipping costs vary by destination."
    },
    {
      question: "How can I track my order?",
      answer: "Once shipped, you'll receive a tracking number via email."
    },
    {
      question: "Can I change or cancel my order?",
      answer: "Orders can be changed or canceled within 12 hours of purchase."
    },
    {
      question: "How can I contact support?",
      answer: "You can reach our 24/7 support team through chat or email."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="main-FAQS-container">
      <div className="headings">
        <h1>Frequently Asked Questions</h1>
        <p>
          Have a question? We've got you covered. We've put together a selection
          of our most commonly asked questions to help you get answers fast.
          Have a question that you don't see answered here? Reach out to us and
          our 24/7 customer support team will help!
        </p>
      </div>

      <div className="questionbox">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
      <div className="button-faqs">
        <button>VIEW ALL FAQs</button>
      </div>
    </div>
  );
}

export default FAQS;
