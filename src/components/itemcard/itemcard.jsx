import React from "react";
import "./itemcard.css";

const Itemcard = ({ detail, paragraph, btn }) => {
  return (
    <>
      <a href="">
        <b>{detail}</b>
        <p>{paragraph}</p>
        <a className="tryout">{btn}</a>
      </a>
    </>
  );
};

export default Itemcard;
