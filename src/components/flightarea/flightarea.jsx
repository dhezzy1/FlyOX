import React from "react";
import './flightarea.css'

const Flightarea = ({ small,select, option,term }) => {
  return (
    <div className="flightareacontainer">
      <p>{small}  </p>
      <select name={select} id="">
        <option value="">{option}</option>
      </select>
      <small>{term}</small>
    </div>
  );
};

export default Flightarea;
