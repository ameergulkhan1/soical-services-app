import React from "react";
import { useFormik } from "formik";
import "./Styles/SignupModal.css";
import blurscreen from "../../Assets/Rectangle 39.png";
import googlelogos from "../../Assets/af68bcce85ee37470340e16f49272fce2cc5afc7.png";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../api"; // ✅ imported from your API routes

function SignupModal() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
      onSubmit: async (values, { resetForm }) => {
      try {
        if (values.password !== values.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }

        // ✅ Call backend signup API
        const response = await authApi.signup({
          name: values.name,
          email: values.email,
          password: values.password,
        });

        if (response?.data?.success) {
          alert("Signup successful!");
          resetForm();
          navigate("/login");
        } else {
          alert(response?.data?.message || "Signup failed, please try again.");
        }
      } catch (error) {
        console.error("Signup error:", error);
        alert(
          error.response?.data?.message ||
            "Something went wrong. Please try again later."
        );
      }
    },
  });

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="signup-overlay">
      <img
        src={blurscreen}
        alt="blurred background"
        className="signup-blurred-bg"
      />

      <div className="signup-container">
        <h1>Create Your Account</h1>

        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />

          <button type="submit" className="signup-btn-submit">
            Sign Up
          </button>
        </form>

        <div className="signup-login-redirect">
          <p>Already have an account?</p>
          <button
            type="button"
            className="login-btn-link"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        <div className="signup-or-divider">
          <span>OR</span>
        </div>

        <div className="signup-google-box">
          <img src={googlelogos} alt="google logo" />
          <button>Sign up with Google</button>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
