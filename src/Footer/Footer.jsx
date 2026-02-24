import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="fc-wrapper">
          <div className="ff-child">
            <div className="sup-ymte">
              <h2 className="reveal">Driving Growth Through Expertise</h2>
              <p className="reveal">
                Jife Consulting delivers practical, results-oriented solutions
                that transform businesses. With a focus on operational
                efficiency and strategic development, we partner with
                organizations to build capacity, enhance performance, and create
                sustainable success empowering industries to thrive.
              </p>
            </div>

            <div className="q-links">
              <h2 className="reveal">Quick Links</h2>

              <ul>
                <li className="reveal">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="reveal">
                  <Link to={"/About"}>About</Link>
                </li>
                <li className="reveal">
                  <Link to={"/Service"}>Services</Link>
                </li>
                <li className="reveal">
                  <Link to={"/Contact"}>Contact</Link>
                </li>
                <li className="reveal">
                  <Link to={"/Team"}>Our Team</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="fs-child">
            <div className="address">
              <h2 className="reveal">Address:</h2>
              <p className="reveal">
                17/19, Boyle Street, Onikan, Lagos Island, Lagos, Nigeria.
              </p>
              <br />

              <p className="reveal">+234 80 3300 4753</p>
              <br />
              <p className="reveal">jifeconsult@gmail.com</p>
              <p className="reveal">francesoghene@yahoo.com</p>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div>
            <p className="c-right">
              Copyright &copy; 2026 Jife Consulting Limited
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
