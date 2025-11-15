import React from "react";
import { useFormik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import "./Styles/RESET-PASSWORD.css";
import "../shared/Styles/shared.css";
import { authApi } from "../../api";
import background from "../../Assets/Rectangle 39.png";
import { FormInput, FormButton, FormError } from "../shared/FormComponents";
import { validatePassword, validateConfirmPassword } from "../../utils/validation";
function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [submitError, setSubmitError] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  // Check if token exists
  React.useEffect(() => {
    if (!token) {
      console.error('Reset password attempted without token');
      alert("Reset token is missing. Please use the link from your email.");
      navigate("/forgot-password");
    }
  }, [token, navigate]);

  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitError(null);
      setIsSubmitting(true);
      
      console.log('Submitting password reset:', { token: token?.substring(0, 10) + '...' });
      
      const response = await authApi.resetPassword({
        token,
        password: values.newPassword,
      });

      if (response?.data?.success) {
        alert("✅ Password successfully reset!");
        // go to success/confirmation screen which leads back to login
        navigate("/password-change");
      } else {
        throw new Error(response?.data?.message || 'Failed to reset password');
      }
    } catch (error) {
      console.error('Password reset submission error:', error);
      setSubmitError(error.response?.data?.message || error.message || 'Failed to reset password');
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors = {};
      const passwordErrors = validatePassword(values.newPassword);
      if (passwordErrors.length) errors.newPassword = passwordErrors[0];
      
      const confirmErrors = validateConfirmPassword(
        values.newPassword,
        values.confirmPassword
      );
      if (confirmErrors.length) errors.confirmPassword = confirmErrors[0];
      
      return errors;
    },
    onSubmit: handleFormSubmit,
  });

  if (!token) {
    return null; // Don't render anything if there's no token (useEffect will redirect)
  }

  return (
    <div className="reset-password-container">
      <img src={background} className="reset-bg-image" alt="background" />

      <div className="reset-password-box">
        <h1>Reset Password</h1>

        <form onSubmit={formik.handleSubmit} className="reset-password-form">
          <FormInput
            label="New Password"
            type="password"
            id="newPassword"
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={formik.errors.newPassword}
            required
          />

          <FormInput
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.errors.confirmPassword}
            required
          />

          <FormError error={submitError} />

          <FormButton 
            type="submit" 
            className="reset-btn"
            disabled={isSubmitting || formik.isSubmitting}
          >
            {isSubmitting || formik.isSubmitting ? "Resetting..." : "Reset Password"}
          </FormButton>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
