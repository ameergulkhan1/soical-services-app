import React from "react";
import { useFormik } from "formik";
import "./Styles/LoginModal.css";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../api"; // ✅ imported from API routes

import blurscreen from "../../Assets/Rectangle 39.png";
import googlelogos from "../../Assets/af68bcce85ee37470340e16f49272fce2cc5afc7.png";

function LoginModal({ onClose }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        // ✅ Send login request to backend
        const response = await authApi.login(values);

        if (response?.data?.success) {
          const { token, user } = response.data;

          // ✅ Store JWT in localStorage (not cookies)
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          alert("Login successful!");
          onClose(); // close modal
          navigate("/"); // redirect to homepage or dashboard
        } else {
          alert(response?.data?.message || "Invalid credentials");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert(
          error.response?.data?.message ||
            "Login failed. Please check your email and password."
        );
      }
    },
  });

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="modal-overlay">
      <img src={blurscreen} alt="blurred background" className="blurred-bg" />

      <div className="main-login-container">
        <h1>Login To Your Account</h1>

        <form className="login-form" onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />

          <div className="forgot-password">
            <a href="#" onClick={handleForgotPassword}>
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="button-container">
          <p>Don’t have an account?</p>
          <button
            type="button"
            className="signup-btn"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>

        <div className="or-divider">
          <span>OR</span>
        </div>

        <div className="google-button-boxs">
          <img src={googlelogos} alt="google logo" />
          <button>Sign up with Google</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
