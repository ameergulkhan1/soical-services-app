import React from "react";
import "./Landingpage.css";
import  Hero from "./Herosection/Hero";
import greenlogo from "../../Assets/green-vector.png";
import orangelogo from "../../Assets/orange-vector.png";
import bluelogo from "../../Assets/Blue-vector.png";
import purplelogo from "../../Assets/purple-vector.png";
import LimitedServices from "./limited-Services";
import ReviewsOnLandingpage from "./Reviews/Reviews-on-landingpage";
import FAQS from "./FAQS/Faqs";
import LandingpageBlogs from "./Blogs/Landingpage-blogs";
import Footer from "../Footer/Footer";

function Landingpage(){
    return(
      <div className="landingpage">
        <Hero/>
        <div className="footer-box">
          <div className="content-container">
            <div className="logo-container">
              <img src={greenlogo} alt="" />
               <h1>24/7 Support</h1>
            </div>
              <div className="logo-container">
              <img src={orangelogo} alt="" />
               <h1>500+ Services</h1>
            </div>
              <div className="logo-container">
              <img src={bluelogo} alt="" />
               <h1>Privacy Protected</h1>
            </div>
              <div className="logo-container">
              <img src={purplelogo} alt="" />
               <h1>Lowest Prices</h1>
            </div>
          </div>

        </div>
        <LimitedServices/>
        <ReviewsOnLandingpage/>
        <FAQS/>
        <LandingpageBlogs/>
        <Footer/>
      </div>
    )
}
export default Landingpage;