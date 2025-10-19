import React from "react";
import "./TermConditions.css";
import Footer from "../../Components/Footer/Footer";

function Terms() {
  const termsSections = [
    {
      title: "Introduction",
      text: "Welcome to our website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services."
    },
    {
      title: "Use of Our Website",
      text: "You agree to use our website for lawful purposes only. You must not use it in a way that violates any applicable local, national, or international law or regulation."
    },
    {
      title: "Intellectual Property Rights",
      text: "All content, trademarks, and other intellectual property displayed on this website are owned by or licensed to us. Unauthorized use of this material is strictly prohibited."
    },
    {
      title: "Limitation of Liability",
      text: "We are not liable for any loss or damage that may occur from the use or inability to use our website or services, except as required by law."
    },
    {
      title: "Changes to Terms",
      text: "We reserve the right to update or modify these terms at any time without prior notice. Continued use of the website after changes constitutes acceptance of the new terms."
    },
    {
      title: "Contact Information",
      text: "If you have any questions about these terms and conditions, please contact our support team through our contact page."
    }
  ];

  return (
    <div className="terms-page-wrapper">
      <div className="terms-main-container">
        <h1>Terms and Conditions</h1>
        {termsSections.map((section, index) => (
          <div className="descriptions" key={index}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Terms;
