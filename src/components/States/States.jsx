import React, { useEffect, useState } from "react";
import axios from "axios";
import "./states.css";
import AOS from "aos";
import "aos/dist/aos.css";
const States = () => {
  const [statecount, setStateCount] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.covidindiatracker.com/state_data.json")
      .then((response) => setStateCount(response.data));
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="states" data-aos="fade-right">
      <ul className="heading">
        <li>Name</li>
        <li>confirmed</li>
        <li>active</li>
        <li>recovered</li>
        <li>deaths</li>
      </ul>
      <hr className="line" />
      <div className="results">
        {statecount.map((data, index) => {
          return (
            <ul key={index} className="resultsdata">
              <li style={{ color: " #dfdede" }}>{data.state}</li>
              <li style={{ color: "#D17979" }}>{data.confirmed}</li>
              <li style={{ color: "#396FC1" }}>{data.active}</li>
              <li style={{ color: "#82B15D" }}>{data.recovered}</li>
              <li style={{ color: "#B4B7A8" }}>{data.deaths}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default States;
