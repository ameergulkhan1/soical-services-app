import React, { useState } from "react";
import "./Blogs.css";
import searchicon from "../../Assets/Vector (1).svg";
import blogimage from "../../Assets/37af4f1e63488827f5856c7505b3450b781b2dad.png";
import blogsData from "../../Components/Blogs.json"; 

function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const blogs = blogsData.map((blog) => ({
    ...blog,
    image: blogimage,
  }));

  const handleSearch = () => {
    setSubmittedSearch(searchTerm.trim());
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    const matchesSearch =
      submittedSearch === "" ||
      blog.title.toLowerCase().includes(submittedSearch.toLowerCase()) ||
      blog.category.toLowerCase().includes(submittedSearch.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="Blogs container">
      <h1 className="blogs-page">Search Blogs According To</h1>
      <p>Lorem Ipsum</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchicon} alt="Search Icon" className="search-icon" />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="categories">
        <ul>
          {["All", "Technology", "Health", "Lifestyle", "Finance"].map((cat) => (
            <li
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => {
                setSelectedCategory(cat);
                setSubmittedSearch(""); 
              }}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="blog-results">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <h4>{blog.title}</h4>
              <p className="category">{blog.category}</p>
              <img src={blog.image} alt={blog.title} />
              <p>{blog.description}</p>
            </div>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
