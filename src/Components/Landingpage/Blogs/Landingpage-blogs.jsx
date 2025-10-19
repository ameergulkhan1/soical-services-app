import React from "react";
import "./Landingpage-blogs.css";
import blogimage from "../../../Assets/37af4f1e63488827f5856c7505b3450b781b2dad.png";
import { useNavigate } from "react-router-dom";

function LandingpageBlogs() {
  const navigate = useNavigate();

  const handleBlogClick = () => {
   
    navigate("/reviews");
  };

  return (
    <div className="landingpage-blogs">
      <h1>Our Latest Blogs</h1>
      <div className="blogs-container">
        <div className="blog-card" onClick={handleBlogClick}>
          <img src={blogimage} alt="Blog" />
          <h2>
            Buying social media marketing tools can help you grow your business
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LandingpageBlogs;
