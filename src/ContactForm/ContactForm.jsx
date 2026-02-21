import "./contactform.css";

function ContactForm({ className }) {
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target);
    e.target.reset();
  }

  return (
    <>
      <form className={`contact-form ${className}`} onSubmit={handleSubmit}>
        <div className="sbs-input">
          <div className="form-group">
            <input
              type="text"
              name="first_Name"
              id="firstName"
              required
              placeholder=" "
            />
            <label htmlFor="firstName">First Name *</label>
          </div>

          <div className="form-group">
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
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder=" "
            />
            <label htmlFor="email">email *</label>
          </div>

          <div className="form-group">
            <input type="tel" name="phone" id="phone" placeholder=" " />
            <label htmlFor="phone">Phone Number (Optional)</label>
          </div>
        </div>

        <div className="form-group">
          <input type="text" name="company" id="company" placeholder=" " />
          <label htmlFor="company">Company (Optional)</label>
        </div>

        <div className="form-group">
          <textarea
            name="message"
            id="message"
            required
            placeholder=" "
          ></textarea>
          <label htmlFor="message">Message *</label>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </>
  );
}

export default ContactForm;
