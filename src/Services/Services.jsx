import image3 from "../assets/JCL_Image3.jpg";
import jambLogo from "../assets/Official_JAMB_logo.png";
import nimasaLogo from "../assets/NIMASA-LOGO.png";
import nmuLogo from "../assets/NMU-Logo.png";
import papLogo from "../assets/PAP-Logo.png";
import sfaLogo from "../assets/SFA-Logo.png";
import "./services.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <main>
        <section className="our_services">
          <div className="osp_div">
            <div>
              <h2>Our Services</h2>
              <p>
                Jife Consulting Limited provides tailored training, consultancy,
                and capacity-building solutions designed to help organizations
                thrive. By combining practical strategies, industry best
                practices, and hands-on tools, we empower businesses and teams
                to achieve measurable results and sustainable growth.
              </p>
              <Link to="/contact">
                <button>Click here for enquiries</button>
              </Link>
            </div>
            <img src={image3} alt="service_image" />
          </div>

          <div className="core_services">
            <div>
              <div id="training-development">
                <h3>Training and Development</h3>
                <h4>Transforming Knowledge Into Performance</h4>
              </div>
              <p>
                We offer a broad spectrum of specialized training programs in
                areas such as project management, leadership development,
                strategic planning, business managemnet, youth empowerment,
                safety protocols and technical skill across sectors. Our
                training methodologies combine classroom learning, practical
                applications, and simulations to ensure effective knowledge
                transfer and retention.
              </p>
            </div>

            <div>
              <div>
                <h3>Consultancy Services</h3>
                <h4>Turning Challenges Into Opportunities</h4>
              </div>
              <p>
                Jife Consulting delivers organizational development, operational
                improvement, process optimization, and change management
                services. We partner with clients to assess current systems and
                provide actionable, tailored recommendations that improve
                efficiency, compliance, and productivity. Our consultancy
                services also extend to regulatory compliance, environmental
                sustainability, and risk management, all of which are critical
                for growth.
              </p>
            </div>

            <div>
              <div>
                <h3>Capacity Building</h3>
                <h4>Unlocking Potential Across Your Organization</h4>
              </div>
              <p>
                We support organizations in building the skills and competencies
                necessary for sustainable growth and operational excellence.
                Through structured learning and development programs, we prepare
                organizations to tackle both present and future challenges
                effectively. Our focus is on empowering teams to innovate and
                adopt best practices in the ever-evolving business environment.
              </p>
            </div>

            <div>
              <div>
                <h3>Project Management</h3>
                <h4>From Planning to Delivery, We Deliver Excellence</h4>
              </div>
              <p>
                Our project management services ensure that your projects are
                executed successfully, on time, and within budget. Our
                experienced project managers provide comprehensive support
                through all stages, from initiation to completion. We utilize
                modern project management tools and techniques to guarantee
                optimal resource allocation and project delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="our_client">
          <div>
            <h2>Our Clients</h2>

            <div className="client_logos">
              <div>
                <img src={nimasaLogo} alt="NIMASA Logo" />
                <p>Nigerian Maritime Administration & Safety Agency</p>
              </div>

              <div>
                <img src={papLogo} alt="PAP Logo" />
                <p>Presidential Amnesty Programme</p>
              </div>

              <div>
                <img src={nmuLogo} alt="NMU Logo" />
                <p>
                  Nelson Metropolitan University, Port Elizabeth, South Africa
                </p>
              </div>

              <div>
                <img src={jambLogo} alt="JAMB Logo" />
                <p>Joint Admissions and Matriculation Board</p>
              </div>

              <div>
                <img src={sfaLogo} alt="SFA Logo" cd j />
                <p>Songhai Farms, Amukpe, Sapele </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Services;
