import React from "react";
import { useFormik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import "./Styles/ForgotPassword.css";
import "../shared/Styles/shared.css";
import otpApi from "../../api/otpApi";
import backgroundimage from "../../Assets/Rectangle 39.png";
import { FormInput, FormButton, FormError } from "../shared/FormComponents";

function OTPVerification() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const emailFromQuery = query.get("email") || "";

  const [submitError, setSubmitError] = React.useState(null);

  const formik = useFormik({
    initialValues: {
      email: emailFromQuery,
      code: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) errors.email = "Email is required";
      if (!values.code) errors.code = "OTP code is required";
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitError(null);
        const response = await otpApi.verifyOtp({ email: values.email, code: values.code });
        if (response?.data?.success) {
          const token = response.data.token;
          // navigate to reset password with token
          navigate(`/reset-password?token=${encodeURIComponent(token)}`);
        } else {
          setSubmitError(response?.data?.message || "Invalid OTP");
        }
      } catch (err) {
        console.error("OTP verify error:", err);
        setSubmitError(err.response?.data?.message || err.message || "Failed to verify OTP");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="main-container-fgpassword">
      <img
        src={backgroundimage}
        className="background-image"
        alt="blurred background"
      />

      <div className="form-container">
        <h1>Verify OTP</h1>

        <form onSubmit={formik.handleSubmit}>
          <FormInput
            label="Email Address"
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            required
          />

          <FormInput
            label="OTP Code"
            type="text"
            id="code"
            name="code"
            value={formik.values.code}
            onChange={formik.handleChange}
            error={formik.errors.code}
            required
          />

          <FormError error={submitError} />

          <FormButton type="submit" className="fgpassword-btn" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Verifying..." : "Verify OTP"}
          </FormButton>
        </form>
      </div>
    </div>
  );
}

export default OTPVerification;
