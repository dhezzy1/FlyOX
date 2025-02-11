import React from "react";
import "./heropage.css";
import Flightarea from "../../components/flightarea/flightarea";
import { flightAreaData } from "../../data/flightdata";

const Heropage = () => {
  return (
    <div className="Heropagecontainer">
      <h2>
        Welcome to Flyox. <br />
        Let's fly with us
      </h2>
      <div className="flight-list-box">
        <div className="flight-list">
          {flightAreaData.length &&
            flightAreaData.map((product, index) => (
              <Flightarea
                key={index}
                small={product.small}
                term={product.term}
                select={product.select}
                option={product.option}
              />
            ))}
        </div>
      </div>
      <button className="searchbtn">Search Flight</button>
    </div>
  );
};

export default Heropage;
