import React from "react";
import GetData from "../HOC/GetData";

const Skin3 = ({ data }) => {
  const { personal, skills, education, experiance } = data;

  return (
    <div className="skin3_container">
      <div className="skin3_header">
        {personal?.firstName && (
          <div className="skin3_initials">
            <p>{personal?.firstName.charAt(0)}</p>
            <p>{personal?.lastName.charAt(0)}</p>
          </div>
        )}
        <div style={{ marginLeft: "1rem" }}>
          <h1>{personal?.firstName}</h1>
          <h1>{personal?.lastName}</h1>
        </div>
      </div>
      <div className="skin3_contacts">
        {personal?.email && <p>{personal?.email} | </p>}
        {personal?.phoneNumber && <p>{personal?.phoneNumber} | </p>}
        {personal?.street && <p>{personal?.street} | </p>}
        {personal?.city && <p>{personal?.city} | </p>}
        {personal?.pincode && <p>{personal?.pincode} | </p>}
      </div>
      <div className="skin3_section">
        {skills.length > 0 && (
          <>
            <div className="skin3_subheading">SKILLS</div>
            <div className="skin3_content">
              <ul className="skin3_skills">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="skin3_section">
        {experiance.length > 0 && (
          <>
            <div className="skin3_subheading">EXPERIANCE</div>

            {experiance?.map((exp, index) => (
              <div key={index} className="skin3_exp">
                <h4>{exp.company}</h4>
                <div className="skin3_flex">
                  <p className="skin3_small_txt">{exp.role}</p>
                  <p className="skin3_small_txt">
                    {exp.start}-{exp.end}
                  </p>
                </div>
                <ul className="skin3_res">
                  {exp?.responsibilities?.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="skin3_section">
        {education.length > 0 && (
          <>
            <div className="skin3_subheading">Education</div>

            {education.map((ed) => (
              <div className="skin3_exp">
                <h4>{ed.institute}</h4>
                <div className="skin3_flex">
                  <p className="skin3_small_txt">
                    {ed.degree}{" "}
                    {ed?.specialisation ? `- ${ed?.specialisation}` : ""} |{" "}
                  </p>
                  <p>
                    {ed.start}-{ed.end}
                  </p>
                </div>
                <p>Cgpa : {ed.cgpa}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default GetData(Skin3);
