import React, { useState, useMemo } from "react";
import "./Services.css";
import sortarrow from "../../Assets/arrow.svg";
import rating1 from "../../Assets/Rating/rating.svg";
import rating2 from "../../Assets/Rating/rating (1).svg";
import itemsData from "../../Components/Item.json";

function Services() {
  const ratings = { rating1, rating2 };
  const [sortBy, setSortBy] = useState("Most Popular");
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const toggleDescription = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const sortedItems = useMemo(() => {
    const sorted = [...itemsData];
    switch (sortBy) {
      case "High price to low":
        return sorted.sort((a, b) => b.priceperday - a.priceperday);
      case "Low price to High":
        return sorted.sort((a, b) => a.priceperday - b.priceperday);
      case "Highest rated":
        const getRatingValue = (r) => (r === "rating2" ? 2 : 1);
        return sorted.sort(
          (a, b) => getRatingValue(b.Rated) - getRatingValue(a.Rated)
        );
      default:
        return sorted;
    }
  }, [sortBy]);

  return (
    <div className="main-services-container">
      <div className="text-contain">
        <h1>POPULAR SERVICES</h1>
      </div>

      <div className="main-box">
        <div className="sortby-container">
          <h2>Sort by:</h2>
          <div className="option-container" onClick={() => setOpen(!open)}>
            <h2>{sortBy}</h2>
            <img src={sortarrow} alt="arrow" />
          </div>
        </div>

        {open && (
          <div className="drop-box">
            {[
              "Most Popular",
              "High price to low",
              "Low price to High",
              "Highest rated",
            ].map((option) => (
              <p
                key={option}
                onClick={() => {
                  setSortBy(option);
                  setOpen(false);
                }}
              >
                {option}
              </p>
            ))}
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
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className={`item-main-box ${
              selectedId === item.id ? "expanded" : ""
            }`}
          >
            <p className="ID">{item.id}</p>
            <p className="Services">{item.serv}</p>
            <p className="Rated">
              <img src={ratings[item.Rated]} alt="rating" />
            </p>
            <p className="QandA">{item["Q & A"]}</p>
            <p className="Starttime">{item.starttime}</p>
            <p className="Minorder">{item.minorder}</p>
            <p className="Maxorder">{item.maxorder}</p>
            <p className="Speed">{item.speed}</p>
            <p className="Priceperday">{item.priceperday}</p>

            <div className="CardButtons">
              <button
                className="btn-details"
                onClick={() => toggleDescription(item.id)}
              >
                {selectedId === item.id ? "Hide Details" : "Details"}
              </button>
              <button className="btn-order">Order Now</button>
            </div>

            {selectedId === item.id && (
              <div className="Description-box">
                <p>
                  <strong>Description:</strong> {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
