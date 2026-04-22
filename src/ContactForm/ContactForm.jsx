import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactform.css";

const SERVICE_ID = "service_9mjtll1";
const TEMPLATE_ID = "template_qs0s0qs";
const PUBLIC_KEY = "wsfG1Gq7aNT0NIWDt";

function ContactForm({ className }) {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target);
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  }

  return (
    <>
      <form
        ref={formRef}
        className={`contact-form ${className}`}
        onSubmit={handleSubmit}
      >
        <div className="sbs-input">
          <div className="form-group reveal">
            <input
              type="text"
              name="first_Name"
              id="firstName"
              required
              placeholder=" "
            />
            <label htmlFor="firstName">First Name *</label>
          </div>

          <div className="form-group reveal">
            <input
              type="text"
              name="last_Name"
              id="lastName"
              required
              placeholder=" "
            />
            <label htmlFor="lastName">Last Name *</label>
          </div>
        </div>

        <div className="sbs-input">
          <div className="form-group reveal">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder=" "
            />
            <label htmlFor="email">email *</label>
          </div>

          <div className="form-group reveal">
            <input type="tel" name="phone" id="phone" placeholder=" " />
            <label className="pn-opt" htmlFor="phone">
              Phone Number (Optional)
            </label>
          </div>
        </div>

        <div className="form-group reveal">
          <input type="text" name="company" id="company" placeholder=" " />
          <label htmlFor="company">Company (Optional)</label>
        </div>

        <div className="form-group reveal">
          <textarea
            name="message"
            id="message"
            required
            placeholder=" "
          ></textarea>
          <label htmlFor="message">Message *</label>
        </div>

        <button
          type="submit"
          className="reveal"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="form-success">Message sent successfully</p>
        )}

        {status === "error" && (
          <p className="form-error">Something went wrong. Please try again</p>
        )}
      </form>
    </>
  );
}

export default ContactForm;
