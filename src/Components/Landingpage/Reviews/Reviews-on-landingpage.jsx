import React from "react";
import "./Reviews-on-landingpage.css";
import image1 from "../../../Assets/Video.png";
import profiledp from "../../../Assets/9a8b28694f7ccfe355261a5ead22e7297e605ecd.png";
import ratings from "../../../Assets/Rating/rating.svg";

function ReviewsOnLandingpage() {
  return (
    <div className="main-reviewslanding-contanair">
      <div className="text-animantion">
        <div className="customer-text">
          <h1>150 k</h1>
          <p>Customers</p>
        </div>
        <div className="customer-text">
          <h1>100 k</h1>
          <p>Order Sold</p>
        </div>
        <div className="customer-text">
          <h1>100 M</h1>
          <p>Subscribers Sold</p>
        </div>
        <div className="customer-text">
          <h1>500 M</h1>
          <p>Likes Sold</p>
        </div>
      </div>

      <div className="image-box">
        <img src={image1} alt="client video" />
      </div>

      <div className="feedback-box">
        <h1>What Our Clients Says</h1>
        <div className="feedback-boxes">
          <div className="chatbox">
            <div className="profilebox">
              <div className="picture-user">
                <img src={profiledp} alt="user" />
              </div>
              <div className="rating-name">
                 <h1 >Person name</h1>
                <img src={ratings} alt="ratings" />
              </div>
            </div>
                <div className="text-paragragh">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure,

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure.</p>
          </div>

          </div>
      
        </div>
      </div>
    </div>
  );
}

export default ReviewsOnLandingpage;
