import React from "react";
import "./trackcard.css";

const TrackCard = ({ detail, paragraph, btn }) => {
  return (
    <>
      <div className="trackcard">
        <b>{detail}</b>
        <p>{paragraph}</p>
        <a className="tryout">{btn}</a>
      </div>
    </>
  );
};

export default TrackCard;
