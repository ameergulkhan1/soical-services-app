import React, { useEffect, useState, useMemo } from "react";
import "./Landingpage-blogs.css";
import blogimage from "../../../Assets/37af4f1e63488827f5856c7505b3450b781b2dad.png";
import blogsData from "../../Blogs.json"; 
import { useNavigate } from "react-router-dom";

function LandingpageBlogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const updatedBlogs = blogsData.map((blog) => ({
      ...blog,
      image: blogimage,
    }));
    setBlogs(updatedBlogs);
  }, []);
  const randomBlogs = useMemo(() => {
    const shuffled = [...blogs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [blogs]);

  const handleBlogClick = (blog) => {
    navigate("/blogs", { state: { blog } });
  };

  return (
    <div className="landingpage-blogs">
      <h1>Our Latest Blogs</h1>
      <div className="blogs-container">
        {randomBlogs.map((blog, index) => (
          <div key={index} className="blog-card" onClick={() => handleBlogClick(blog)}>
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingpageBlogs;
