import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Password-change.css";
import "../shared/Styles/shared.css";
import backgroundimage from "../../Assets/Rectangle 39.png";
import { FormButton } from "../shared/FormComponents";

function PasswordChange() {
  const navigate = useNavigate();

  const handleOk = () => {
    navigate("/login");
  };

  return (
    <div className="password-change-container">
      <img
        src={backgroundimage}
        className="background-image"
        alt="blurred background"
      />

      <div className="password-change-box">
        <div className="success-icon">✓</div>
        <h1>Password Changed Successfully!</h1>
        <p>Your password has been updated successfully.</p>

        <FormButton 
          type="button" 
          className="ok-btn"
          onClick={handleOk}
        >
          OK
        </FormButton>
      </div>
    </div>
  );
}

export default PasswordChange;
