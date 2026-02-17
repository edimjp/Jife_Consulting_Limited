import "./contactform.css";

function ContactForm({ className }) {
  return (
    <>
      <form className={`contact-form ${className}`}>
        <div className="sbs-input">
          <div className="form-group">
            <input type="text" name="first_Name" id="firstName" required />
            <label htmlFor="firstName">First Name</label>
          </div>

          <div className="form-group">
            <input type="text" name="last_Name" id="lastName" required />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>

        <div className="sbs-input">
          <div className="form-group">
            <input type="email" name="email" id="e-mail" required />
            <label htmlFor="email">email</label>
          </div>

          <div className="form-group">
            <input type="tel" name="phone" id="phone" />
            <label htmlFor="phoneNumber">Phone Number (Optional)</label>
          </div>
        </div>

        <div className="form-group">
          <input type="text" name="company" id="company" />
          <label htmlFor="company">Company (Optional)</label>
        </div>

        <div className="form-group">
          <textarea name="message" id="message" required></textarea>
          <label htmlFor="message">Message</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ContactForm;
