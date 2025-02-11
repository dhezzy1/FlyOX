import React from "react";
import "./trendy.css";

const Trendy = ({ info, detail,explore ,trendImg}) => {
  return (
    <div className="trendcard">
      <div className="trendcarddetail">
        <div className="trendcardimg">
            <img src={trendImg} alt="" />
        </div>
        <div className="trendcardtextbtn">
          <p className="discocunt">{info}</p>
          <p className="status">{detail}</p>
          <button>{explore}</button>
        </div>
      </div>
    </div>
  );
};

export default Trendy;
