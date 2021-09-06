import React from "react";
import GetData from "../HOC/GetData";

const Skin1 = ({ data }) => {
  const { personal, skills, education, experiance } = data;

  return (
    <div className="skin1_container">
      <h1 className="skin1_heading">{`${personal?.firstName} ${personal?.lastName}`}</h1>
      <div className="skin1_contacts_container">
        <div className="skin1_contacts">
          {personal?.email && <p>{personal?.email} | </p>}
          {personal?.phoneNumber && <p>{personal?.phoneNumber} | </p>}
          {personal?.street && <p>{personal?.street} | </p>}
          {personal?.city && <p>{personal?.city} | </p>}
          {personal?.pincode && <p>{personal?.pincode} | </p>}
        </div>
      </div>
      <div className="skin1_section">
        <div className="skin1_subheading">SKILLS</div>
        <ul className="skin1_skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="skin1_section">
        <div className="skin1_subheading">EXPERIANCE</div>
        {experiance.map((exp) => (
          <div className="skin1_exp">
            <h4>{exp.company}</h4>
            <p className="skin1_small_txt">
              {exp.role} | {exp.start}-{exp.end}
            </p>
            <ul className="skin1_res">
              {exp?.responsibilities?.map((res) => (
                <li key={res}>{res}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="skin1_section">
        <div className="skin1_subheading">Education</div>
        {education.map((ed) => (
          <div className="skin1_exp">
            <h4>{ed.institute}</h4>
            <p className="skin1_small_txt">
              {ed.degree} {ed?.specialisation ? `- ${ed?.specialisation}` : ""}{" "}
              | {ed.start}-{ed.end}
            </p>
            <p>Cgpa : {ed.cgpa}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetData(Skin1);
