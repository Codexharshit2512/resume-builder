import React, { useState } from "react";
import { useSelector, useDispatch, useEffect } from "react-redux";
import FormFooter from "./FormFooter";
import ResumePreview from "./ResumePreview";

const ContactBlock = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.personal);
  const [contact, setContactState] = useState({ ...state });

  const onChange = (e) => {
    const target = e.target;
    const value = target.value;
    setContactState({ ...contact, [target.name]: value });
  };
  return (
    <div className="form_flex">
      <div className="form_block">
        <h2 className="heading center">Personal Details</h2>
        <div className="form-group">
          <div className="input-group">
            <label>First Name</label>
            <span>
              <input
                value={contact?.firstName}
                name="firstName"
                onChange={onChange}
                type="text"
              />
            </span>
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <span>
              <input
                value={contact?.lastName}
                name="lastName"
                onChange={onChange}
                type="text"
              />
            </span>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label>Email</label>
            <span>
              <input
                value={contact?.email}
                name="email"
                type="email"
                onChange={onChange}
              />
            </span>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label>Phone</label>
            <span>
              <input
                value={contact?.phoneNumber}
                name="phoneNumber"
                onChange={onChange}
                type="number"
              />
            </span>
          </div>
          <div className="input-group">
            <label>Street</label>
            <span>
              <input
                value={contact?.street}
                name="street"
                onChange={onChange}
                type="text"
              />
            </span>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label>City</label>
            <span>
              <input
                value={contact?.city}
                name="city"
                onChange={onChange}
                type="text"
              />
            </span>
          </div>
          <div className="input-group">
            <label>State</label>
            <span>
              <input
                value={contact?.state}
                name="state"
                onChange={onChange}
                type="text"
              />
            </span>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label>Country</label>
            <span>
              <input
                value={contact?.country}
                name="country"
                onChange={onChange}
                type="text"
              />
            </span>
          </div>
          <div className="input-group">
            <label>Pin Code</label>
            <span>
              <input
                value={contact?.pincode}
                name="pincode"
                onChange={onChange}
                type="text"
              />
            </span>
          </div>
        </div>
        <FormFooter route="contact" data={contact} />
      </div>
      <ResumePreview active={contact} route="contact" />
    </div>
  );
};

export default ContactBlock;
//active={contact} route="contact"
