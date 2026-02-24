import Jife from "../assets/Jife_Williams_Image.jpeg";
import "./Team.css";

import TeamCard from "./TeamCard.jsx";

function Team() {
  const teamMembers = [
    {
      image: Jife,
      name: "Jife Williams",
      title: "Director & Head of Finance",
      bio: `Jife Williams is a co-owner of Jife Consulting Ltd and head of finance of the company with over 25 years of diverse experience in banking, business startups, social marketing and management.
      
      She began her working career in 1989 as a banker in one of Nigeria's premier indigenous banks - Allstates Trust Bank Ltd now Ecobank. 
      
      She holds a Bachelor of Arts (BA) degree in Political Science and government from the University of Essex, Colchester, United Kingdom and a Masters of Arts (MA) degree in International relations from the University of Sussex in the United Kingdom. 
      
      Jife served as a member of the 2008 Vision 2020 committee on Environmental preservation in the Niger Delta. `,
    },

    {
      image: Jife,
      name: "Frances Oghene (MS)",
      title: "Managing Director & Business Development",
      bio: `Frances Oghene has over 25 years of diverse experience in entrepreneurship, management, real estate and banking.
      
      Frances began her working career in 1990 as a banker in one of Nigeria's premier indigenous banks - Devcom Merchant Bank. Frances Oghene holds a Bachelor of Arts (BA) degree in Education from the Obafemi Awolowo University, Adeyemi College of Education Campus, Ondo and Masters in Public Admin, Delta State University, Abraka. `,
    },

    {
      image: Jife,
      name: "Rasheed Rahman",
      title: "Management Consultant",
      bio: `Seasoned and results-driven Management Consultant with over 25 years of experience in providing strategic guidance, operational improvement and organizational transformation to diverse clients across several fields such as academics, Information Technology, Financial Services, Maritime and Consulting. 
      
      With proven track record of delivering innovative solutions, optimizing processes and driving business growth, Rasheed is an expert trainer and Management Systems Implementer with extensive expertise in management consulting and training to contribute to the success of forward-thinking organizations. 
      
      He holds B.Sc. and M.Sc., an ISO Lead Auditor as well as a Fellow of the Nigerian Institute of Management Consultants. A consummate researcher and trainer, Rasheed has trained management grade staff of several organizations.`,
    },

    {
      image: Jife,
      name: "Runnyi Ekponta",
      title: "Head of Admin",
      bio: `Runnyi Ekponta holds a Bachelor of Arts degree from the University of Calabar. She brings over six years of experience in educational administration, specializing in office management, policy implementation, and team coordination. Runnyi has a proven track record of streamlining administrative processes, improving operational efficiency, and fostering a collaborative work environment. Her attention to detail, organizational skills, and commitment to excellence make her an invaluable leader in the administration department. Outside of work, she is passionate about professional development and mentoring emerging talent.`,
    },

    {
      image: Jife,
      name: "Edu Umechukwu & Co",
      title: "Accounting and financial services.",
      bio: `Edu Umechukwu & Co is a reputable accounting and financial services firm dedicated to helping businesses manage their finances efficiently. 
      
      With years of experience in auditing, bookkeeping, tax advisory, and financial planning, the firm provides tailored solutions that empower companies to grow sustainably. 
      
      Their team combines deep industry knowledge with practical insights to ensure clients achieve both compliance and strategic financial success.`,
    },
  ];

  return (
    <>
      <section>
        <div className="OurTeam">
          <div>
            <h1>Meet Our Team</h1>
            <p>Passionate professionals driving our success.</p>
          </div>
        </div>
        <div className="TeamParent">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.name}
              image={member.image}
              name={member.name}
              title={member.title}
              bio={member.bio}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Team;
