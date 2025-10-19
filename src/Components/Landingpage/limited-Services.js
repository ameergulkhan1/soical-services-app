import React, { useState } from "react";
import "./LimitedServices.css";
import sortarrow from "../../Assets/arrow.svg";
import rating1 from "../../Assets/Rating/rating.svg";
import rating2 from "../../Assets/Rating/rating (1).svg";
import items from "../../Components/Item.json";
import { useNavigate } from "react-router-dom";

function LimitedServices() {
  const ratings = { rating1, rating2 };
  const [open, setOpen] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  const limitedItems = items.slice(0, 9);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="main-service-container">
      <div className="text-contain">
        <h1>POPULAR SERVICES</h1>
      </div>

      <div className="main-box">
        <div className="sortby-container">
          <h2>sort by :</h2>
          <div className="option-container" onClick={() => setOpen(!open)}>
            <h2>Most Popular</h2>
            <img src={sortarrow} alt="arrow" />
          </div>
        </div>

        {open && (
          <div className="drop-box">
            <p>High price to low</p>
            <p>Low price to High</p>
            <p>Highest rated</p>
          </div>
        )}
      </div>

      <div className="card-boxes">
        <p>ID</p>
        <p>Services</p>
        <p>Rated</p>
        <p>Q & A</p>
        <p>Start time</p>
        <p>Min. order</p>
        <p>Max. order</p>
        <p>Speed</p>
        <p>Price per day</p>
        <p>Description</p>
      </div>

      <div className="cards-items-main-box">
        {limitedItems.map((item) => (
          <div className="item-main-box" key={item.id}>
            <p>{item.id}</p>
            <p>{item.serv}</p>
            <p>
              <img src={ratings[item.Rated]} alt="rating" />
            </p>
            <p>{item["Q & A"]}</p>
            <p>{item.starttime}</p>
            <p>{item.minorder}</p>
            <p>{item.maxorder}</p>
            <p>{item.speed}</p>
            <p>{item.priceperday}</p>

            <div className="CardButtons">
              <button
                className="btn-details"
                onClick={() => toggleDescription(item.id)}
              >
                {expandedId === item.id ? "Hide Details" : "Details"}
              </button>
              <button className="btn-order">Order Now</button>
            </div>

            {expandedId === item.id && (
              <div className="Description">
                <strong>Description:</strong> {item.description}
              </div>
            )}
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => navigate("/services")}
            className="show-more-btn"
          >
            Show More →
          </button>
        </div>
      </div>
    </div>
  );
}

export default LimitedServices;
