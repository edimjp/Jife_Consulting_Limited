import NavBar from "./Header/NavBar.jsx";
import indexFimage from "./assets/JCL_Image3.jpg";
import indexFimage2 from "./assets/JCL_Image2.jpg";
import indexFimage3 from "./assets/JCL_Image1.jpg";
import whyJifeImage from "./assets/WJCL_Image2.jpg";
import Footer from "./Footer/Footer.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";

function Index() {
  return (
    <>
      <NavBar />
      <main>
        <div className="ImageFI">
          <img src={indexFimage} alt="IndexFImage1" className="indexFI one" />
          <img src={indexFimage2} alt="IndexFImage2" className="indexFI two" />
          <img
            src={indexFimage3}
            alt="IndexFImage3"
            className="indexFI three"
          />

          <div className="hero_Text">
            <h1>Smarter Consulting for a Changing World</h1>
            <p>
              Whether you're a large organization or a growing venture, we
              combine sharp thinking and practical solutions to help you unlock
              opportunities and move forward with confidence.
            </p>
          </div>
        </div>

        <section className="who_we_are">
          <div>
            <h2>Who we are</h2>
            <p>
              Jife Consulting Limited is a dynamic and innovative training and
              consultancy firm specializing in delivering high-quality solutions
              to businesses and organizations. With a team of highly skilled
              professionals, we provide customized services that aim to enhance
              operational efficiency, drive growth, and empower individuals and
              organizations to thrive in their industries.
            </p>

            <a href="">
              <button>View More</button>
            </a>
          </div>
        </section>

        <section className="core_service">
          <div>
            <h2>Core Services:</h2>

            <div className="cs_card">
              <div>
                <h3>Training & Development</h3>
                <p>
                  We offer a broad spectrum of specialized training programs in
                  areas such as project management, leadership development,
                  strategic planning, business managemnet, youth empowerment,
                  safety protocols and technical skill across sectors.{" "}
                  {/* Our
                training methodologies combine classroom learning, practical
                applications, and simulations to ensure effective knowledge
                transfer and retention. */}
                </p>

                <button>Learn More!</button>
              </div>

              <div>
                <h3>Consultancy Services</h3>
                <p>
                  Jife Consulting delivers organizational development,
                  operational improvement, process optimization, and change
                  management services. We partner with clients to assess current
                  systems and provide actionable, tailored recommendations that
                  improve efficiency, compliance, and productivity.
                  {/*Our consultancy services also extend to
                regulatory compliance, environmental sustainability, and risk
                management, all of which are critical for growth. */}
                </p>

                <button>Learn More!</button>
              </div>

              <div>
                <h3>Capacity Building</h3>
                <p>
                  We support organizations in building the skills and
                  competencies necessary for sustainable growth and operational
                  excellence. Through structured learning and development
                  programs, we prepare organizations to tackle both present and
                  future challenges
                  {/* effectively. Our focus is on empowering teams to innovate and
                adopt best practices in the ever-evolving business environment. */}
                </p>

                <button>Learn More!</button>
              </div>

              <div>
                <h3>Project Management</h3>
                <p>
                  Our project management services ensure that your projects are
                  executed successfully, on time, and within budget. Our
                  experienced project managers provide comprehensive support
                  {/* through all stages, from initiation to completion. We utilize
                modern project management tools and techniques to guarantee
                optimal resource allocation and project delivery. */}
                </p>

                <button>Learn More!</button>
              </div>
            </div>
          </div>
        </section>

        <section className="why_jife">
          <div>
            <img src={whyJifeImage} alt="Why Jife Consulting Limited" />
            <div>
              <h2>Why Jife Consulting Limited</h2>
              <p>
                <strong>Expertise and Experience:</strong> Our team comprises
                industry experts with years of experience in consulting and
                training across sectors.
                <br />
                <strong>Tailored Solutions:</strong> We understand that each
                organization has unique challenges. Therefore, we customize our
                services to meet specific organizational needs and goals. <br />
                <br />
                <strong>Commitment to Excellence:</strong> We are dedicated to
                providing the highest quality services, ensuring measurable
                outcomes that add value to our clients' operations.
                <br />
                <strong>Impactful Results:</strong> Our methodologies are
                designed to produce real, tangible results. We work with
                organizations to develop solutions that improve performance,
                streamline operations, and create a more competent workforce.
              </p>

              <a href="">
                <button>View Services</button>
              </a>
            </div>
          </div>
        </section>

        <section className="who_we_are">
          <div>
            <h2>Diverse Experience</h2>
            <p>
              Jife Consulting has a proven track record of working with various
              companies in different sectors, providing them with bespoke
              training programs and consultancy services to enhance their
              operations. We are familiar with the unique challenges faced by
              organizations and are committed to helping our clients achieve
              their vision of becoming world-class corporations.
            </p>
          </div>
        </section>

        <ContactUs className="CU_Section" />
      </main>
      <Footer />
    </>
  );
}

export default Index;
