// import NavBar from "../Header/NavBar.jsx";
import image1 from "../assets/JCL_Image1.jpg";
import "./about.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <main>
        <section className="about_hero">
          <div>
            <h1>Driving Growth Through Expertise</h1>
            <p>
              Strong organizations are built on knowledge, strategy, and the
              right expertise. Businesses thrive when their people are equipped
              with practical skills, innovative thinking, and tailored solutions
              that drive measurable results. At Jife Consulting Limited, we
              partner with organizations to strengthen capacity, improve
              performance, and unlock sustainable growth through world-class
              training and professional consultancy services.
            </p>
          </div>
        </section>

        <section className="C_Overview">
          <div>
            <img src={image1} alt="Jife Consulting Limited Overview" />
            <div className="CO_Text">
              <div>
                <h2>Company Overview</h2>
                <p className="CO_p1">
                  Jife Consulting Limited is a dynamic and innovative training
                  and consultancy firm specializing in delivering high-quality
                  solutions to businesses and organizations. With a team of
                  highly skilled professionals, we provide customized services
                  that aim to enhance operational efficiency, drive growth, and
                  empower individuals and organizations to thrive in their
                  industries. We are committed to delivering practical,
                  results-oriented training programs and consultancy services
                  tailored to the unique needs of our clients. Our offerings
                  span a wide range of sectors, with a special focus on
                  financial institutions, energy, infrastructure, government
                  agencies, maritime and economic empowerment.
                </p>
                <h3>Company Registration</h3>
                <p>
                  Jife Consulting was incorporated on 19 October 2010.
                  Registration no: RC917133.
                </p>
              </div>

              <Link to="/services">
                <button>View Services</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
