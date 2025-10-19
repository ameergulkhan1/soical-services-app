import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <div className="footer">
            <h1>Available Services</h1>
            <p>Services available for following platforms</p>
            <div className="footer-content">
                <div className="youtube-list">
                    <button>Youtube</button>
                    <p>Buy Youtube Views</p>
                    <p>Buy Youtube Subscribers</p>
                    <p>Buy Youtube Comments</p>
                    <p>Buy Youtube Likes</p>
                    <p>Buy Youtube Shares</p>
                </div>
                <div className="twitch-list">
                    <button>Twitch</button>
                    
                    <p>Buy Twitch Views</p>
                    <p>Buy Twitch Subscribers</p>
                    <p>Buy Twitch Comments</p>
                    <p>Buy Twitch Likes</p>
                    <p>Buy Twitch Shares</p>
                </div>
                <div className="instagram-list">
                    <button>Instagram</button>
                    <p>Buy Instagram Followers</p>
                    <p>Buy Instagram Views</p>
                    <p>Buy Instagram Comments</p>
                    <p>Buy Instagram Likes</p>
                    <p>Buy Instagram Shares</p>
                </div>
            </div>
            <footer>Copyright © 2024 myUchannel. all rights reserved.</footer>
            </div>

    )}
    export default Footer;