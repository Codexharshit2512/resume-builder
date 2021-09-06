import React from "react";
import GetData from "../HOC/GetData";

const Skin2 = ({ data }) => {
  const { personal, skills, education, experiance } = data;
  return (
    <div className="skin2_container">
      <div className="skin2_header">
        {personal?.firstName && (
          <div className="skin2_initials">
            {`${personal?.firstName.charAt(0)} ${personal?.lastName.charAt(0)}`}
          </div>
        )}
        <div className="skin2_contacts_container">
          <h1>{personal?.firstName + " " + personal?.lastName}</h1>
          <div className="skin2_contacts">
            {personal?.email && <p>{personal?.email} | </p>}
            {personal?.phoneNumber && <p>{personal?.phoneNumber} | </p>}
            {personal?.street && <p>{personal?.street} | </p>}
            {personal?.city && <p>{personal?.city} | </p>}
            {personal?.pincode && <p>{personal?.pincode} | </p>}
          </div>
        </div>
      </div>

      <div className="skin2_section">
        {skills.length > 0 && (
          <>
            <div className="skin2_subheading">SKILLS</div>
            <div className="skin2_content">
              <ul className="skin2_skills">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="skin2_section">
        {experiance.length > 0 && (
          <>
            <div className="skin2_subheading">EXPERIANCE</div>
            <div className="skin2_content">
              {experiance?.map((exp, index) => (
                <div key={index} className="skin2_exp">
                  <h4>{exp.company}</h4>
                  <p className="skin2_small_txt">
                    {exp.start}-{exp.end}
                  </p>
                  <p className="skin2_small_txt">{exp.role}</p>
                  <ul className="skin2_res">
                    {exp?.responsibilities?.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="skin2_section">
        {education.length > 0 && (
          <>
            <div className="skin2_subheading">Education</div>
            <div className="skin2_content">
              {education.map((ed) => (
                <div className="skin2_exp">
                  <h4>{ed.institute}</h4>
                  <p className="skin2_small_txt">
                    {ed.degree}{" "}
                    {ed?.specialisation ? `- ${ed?.specialisation}` : ""} |{" "}
                    {ed.start}-{ed.end}
                  </p>
                  <p>Cgpa : {ed.cgpa}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GetData(Skin2);
