import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />

            <label htmlFor="message">How can we help you?</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
            ></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-right">
          <h3>We’d love to hear from you!</h3>
          <p>
            Whether you have a question about our services, pricing, or anything
            else, our team is ready to answer all your questions.
          </p>

          <div className="faq-section">
            <p>
              Need quick answers? Visit our{" "}
              <Link to="/faqs" className="faq-link">
                Frequently Asked Questions
              </Link>{" "}
              page.
            </p>
          </div>

          <div className="contact-info">
            <p className="email-info">
              <strong>Email:</strong> support@mysite.com
            </p>
            <p>
              <strong>Location:</strong> 123 Main Street, New York, USA
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
