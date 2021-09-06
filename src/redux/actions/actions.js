import { setUser } from "../reducers/user";
import { setDisplayName } from "../reducers/name";
import firebase from "../../firebase/config";
import { auth, firestore } from "../../firebase/config";
import { resetContact } from "../reducers/name";
import { resetEducation } from "../reducers/education";
import { resetSkills } from "../reducers/skill";
import { resetExperiance } from "../reducers/experiance";
import { setResumeId, setResumeSkin } from "../reducers/resume";
export const signUp =
  ({ email, password, firstName, lastName }) =>
  (dispatch) => {
    return new Promise((resolve, reject) => {
      let user;
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const { email, uid } = userCredential.user;
          user = {
            isAuth: true,
            user: { email, uid, firstName, lastName },
          };
          return auth.currentUser.updateProfile({
            displayName: `${firstName} ${lastName}`,
          });
        })
        .then(() => {
          dispatch(setUser(user));
          dispatch(
            setDisplayName({
              firstName: user?.user?.firstName,
              lastName: user?.user?.lastName,
            })
          );
          resolve();
        })
        .catch((err) => {
          console.log(err);
          resolve();
        });
    });
  };

export const login =
  ({ email, password }) =>
  (dispatch) => {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const { email, uid, displayName } = userCredential.user;
          const firstName = displayName.split(" ")[0];
          const lastName = displayName.split(" ")[1];
          const user = {
            isAuth: true,
            user: { email, uid, firstName, lastName },
          };
          dispatch(setUser(user));
          dispatch(
            setDisplayName({
              firstName: user?.user?.firstName,
              lastName: user?.user?.lastName,
            })
          );
          resolve();
        })
        .catch((err) => {
          console.log(err);
          resolve();
        });
    });
  };

export const logout = () => (dispatch) => {
  auth
    .signOut()
    .then(() => {
      const user = {
        isAuth: false,
        user: null,
      };
      dispatch(setUser(user));
      dispatch(resetContact({ firstName: "", lastName: "" }));
      dispatch(resetEducation());
      dispatch(resetExperiance());
      dispatch(resetSkills());
      dispatch(setResumeId(null));
      dispatch(setResumeSkin({ code: null, logo: null }));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const googleLogin = (close, history) => (dispatch) => {
  var provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var { email, displayName, uid } = result.user;
      const firstName = displayName.split(" ")[0];
      const lastName = displayName.split(" ")[1];
      dispatch(
        setUser({
          isAuth: true,
          user: { email, token, uid, firstName, lastName },
        })
      );
      dispatch(
        setDisplayName({
          firstName,
          lastName,
        })
      );
      // ...
      close();
      history.push("/getting-started");
    })
    .catch((error) => {
      console.log(error);
      close();
    });
};

export const saveResumeToDB = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { personal, skills, education, experiance, user, resume } =
      getState();
    const newResume = {
      personal,
      skills,
      education,
      experiance,
      uid: user?.user?.uid,
      skin: resume?.skin,
      logo: resume?.logo,
    };
    console.log(newResume);
    firestore
      .collection("resumes")
      .add(newResume)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        dispatch(setResumeId(docRef.id));
        resolve();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        reject();
      });
  });
};

export const updateResume = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const { personal, skills, education, experiance, user, resume } =
      getState();
    const newResume = {
      personal,
      skills,
      education,
      experiance,
      uid: user?.user?.uid,
      skin: resume?.skin,
      logo: resume?.logo,
    };
    console.log(newResume);
    if (resume?.resumeId) {
      firestore
        .collection("resumes")
        .doc(resume.resumeId)
        .set(newResume)
        .then((docRef) => {
          resolve();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          reject();
        });
    }
  });
};

export const reset = (fName, lName) => (dispatch) => {
  dispatch(setResumeId(null));
  dispatch(resetContact({ firstName: fName, lastName: lName }));
  dispatch(resetEducation());
  dispatch(resetExperiance());
  dispatch(resetSkills());
};
