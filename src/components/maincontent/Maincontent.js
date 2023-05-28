import React from "react";
import "./maincontent.css";
import Form from "../form/Form";
import Mainlockup from "../mainlockup/Mainlockup";

const Maincontent = () => {
  return (
    <div className="edyoda-content">
      <div className="edyoda-content-container">
        <div className="edyoda-content-mainlockup">
          <Mainlockup />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
