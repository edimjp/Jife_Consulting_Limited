import "./contactus.css";
import emailSVG from "../assets/icon-mail.svg";
import locationSVG from "../assets/icon-marker.svg";
import phoneSVG from "../assets/icon-phone.svg";
import ContactForm from "../ContactForm/ContactForm.jsx";
function ContactUs({ className }) {
  return (
    <>
      <section className={"contact_us"}>
        <div>
          <div className="cu_header">
            <h2 className="reveal">
              Get the guidance you need, talk to an advisor
            </h2>
            <p className="reveal">
              Schedule your FREE consultation or ask us anything
            </p>
          </div>

          <div className="emailLogo divText">
            <img src={emailSVG} alt="emailSVG" className="svg reveal" />
            <div>
              <p className="reveal">jifeconsult@gmail.com</p>
              <p className="reveal">francesoghene@yahoo.com</p>
            </div>
          </div>

          <div className="divText location">
            <img src={locationSVG} alt="locationSVG" className="svg reveal" />
            <span className="reveal">
              17/19, Boyle Street, Onikan, Lagos Island, Lagos, Nigeria.
            </span>
          </div>

          <div className="divText phone">
            <img src={phoneSVG} alt="phoneSVG" className="svg reveal" />
            <span className="reveal">+234 80 3300 4753</span>
          </div>
        </div>

        <ContactForm className={"CForm"} />
      </section>
    </>
  );
}

export default ContactUs;
