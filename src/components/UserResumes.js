import React, { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import UserResume from "./UserResume";
import { useSelector, useDispatch } from "react-redux";
import { setResumeId, setResumeSkin } from "../redux/reducers/resume";
import { useHistory } from "react-router-dom";
import { updateContactSection } from "../redux/reducers/name";
import { updateSkillSection } from "../redux/reducers/skill";
import { updateEducationSection } from "../redux/reducers/education";
import { updateExperianceSection } from "../redux/reducers/experiance";
import Loader from "./Loader";

const UserResumes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const uid = useSelector((state) => state?.user?.user?.uid);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    firestore
      .collection("resumes")
      .where("uid", "==", uid)
      .get()
      .then((querySnapshot) => {
        const arr = [];

        querySnapshot.forEach((doc) => {
          arr.push({ id: doc.id, data: { ...doc.data() } });
        });
        setData(arr);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  const handleEdit = (resume) => {
    dispatch(setResumeId(resume?.id));
    dispatch(
      setResumeSkin({ code: resume?.data?.skin, logo: resume?.data.logo })
    );
    dispatch(updateContactSection(resume?.data?.personal));
    dispatch(updateSkillSection(resume?.data?.skills));
    dispatch(updateEducationSection(resume?.data?.education));
    dispatch(updateExperianceSection(resume?.data?.experiance));
    history.push("/create/contact");
  };
  return (
    <div className="getting_started_container">
      <div className="skins_list flex">
        {loading ? (
          <Loader loading={loading} />
        ) : data.length > 0 ? (
          data.map((resume) => (
            <UserResume
              key={resume.id}
              resume={resume}
              handleEdit={handleEdit}
            />
          ))
        ) : (
          <h1>No resume created till now</h1>
        )}
      </div>
    </div>
  );
};

export default UserResumes;
