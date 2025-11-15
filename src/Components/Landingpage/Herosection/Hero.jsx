import React from "react";
import "./Hero.css";
import soicalimage from "../../../Assets/youtube_facebook.png";
import soicalimage2 from"../../../Assets/tiktok_instagram.png";
import vectorimage from "../../../Assets/Vector 2.svg";
import googlelogo from"../../../Assets/af68bcce85ee37470340e16f49272fce2cc5afc7.png";

function Hero(){
    return(
        <div className="main-hero-container">
            <div className="left-soical-image">
                <img src={soicalimage} alt="image" className="image-left" />
            </div>
            <div className="text-container">
                <h1>DESIGNED TO BOOST YOUR</h1>
                <h2>SOCIAL CHANNELS</h2>
                <p>We are Solving 80% orders issue in 3-6 Hours and 20% in 24 hours
maximum . You can take withdrawal from Best Expertz account to
wallet Anytime Without Any Charges .</p>

     <form>
    <input type="email" id="email" name="email" className="lableemail" placeholder="example02@gmail.com" />
    <button type="submit" className="signupbutton">Signup</button>
  </form>
<div className="or-dividers">
  <span>OR</span>
</div>
<div className="google-button-box">
    <img src={googlelogo} alt="googlelogo" />
   
    <button>Sign up with Google</button>


</div>

  

            </div>
            <div className="left-soical-image2">
                <img src={soicalimage2} alt="image" className="image-right" />
            </div>
           
        </div>
    )
}
export default Hero;