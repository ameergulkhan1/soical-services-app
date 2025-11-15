import React from "react";
import { useFormik } from "formik";
import "./Styles/ForgotPassword.css";
import "../shared/Styles/shared.css";
import { authApi } from "../../api";
import { useNavigate } from "react-router-dom";
import backgroundimage from "../../Assets/Rectangle 39.png";
import { FormInput, FormButton, FormError } from "../shared/FormComponents";

function ForgotPassword() {
  const [submitError, setSubmitError] = React.useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitError(null);
      console.log('Submitting forgot password form:', { email: values.email });
      
      const response = await authApi.forgotPassword({ email: values.email });
      
      if (response?.data?.success) {
        // navigate to OTP verification page and pass email in query
        navigate(`/verify-otp?email=${encodeURIComponent(values.email)}`);
      } else if (response?.data?.message) {
        setSubmitError(response.data.message);
      } else {
        throw new Error('Failed to send reset email');
      }
    } catch (error) {
      console.error('Forgot password submission error:', error);
      let errorMessage = 'An error occurred while processing your request.';
      
      if (error.response?.status === 404) {
        errorMessage = 'Email address not found. Please check and try again.';
      } else if (error.response?.status === 429) {
        errorMessage = 'Too many attempts. Please wait a few minutes and try again.';
      } else if (error.response?.status === 500) {
        errorMessage = 'Server error. Please try again later or contact support.';
      }
      
      setSubmitError(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    onSubmit: handleFormSubmit,
  });

  return (
    <div className="main-container-fgpassword">
      <img
        src={backgroundimage}
        className="background-image"
        alt="blurred background"
      />

      <div className="form-container">
        <h1>Forgot Password</h1>

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

          <FormError error={submitError} />

          <FormButton 
            type="submit" 
            className="fgpassword-btn"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "SENDING..." : "SEND EMAIL TO RESET PASSWORD"}
          </FormButton>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
