import React from "react";
import Heropage from "./page/heropage/heropage";
import NavBar from "./components/navbar/navbar";
import TrackCard from "./components/trackCard/trackcard";
import { flightTryOut } from "././data/flightdata";
import Itemcard from "./components/itemcard/itemcard";
import "./App.css";
import FlightConversation from "./components/FlightConversation/FlightConversation";
import UserReviews from "./page/review/review";
import Footer from "./footer/footer";
import Trendy from "./components/trendy/trendy";
import { trendCard } from "././data/flightdata";
const App = () => {
  return (
    <>
      <NavBar />
      <Heropage />
      <div className="flightryoutcontainer">
        {flightTryOut.length &&
          flightTryOut.map((product, index) => (
            <TrackCard
              key={index}
              detail={product.detail}
              paragraph={product.paragraph}
              btn={product.btn}
            />
          ))}
      </div>
      <center>
        <div className="exploreimg">
          <p>Lets Explore the world with us</p>
        </div>
      </center>
      <div className="trendcont" >
        <strong>
          Grab Our Trendy <br />
          Discount
        </strong>
        <div>
          {trendCard.length &&
            trendCard.map((product, index) => (
              <Trendy
                key={index}
                info={product.info}
                detail={product.detail}
                btn={product.btn}
                trendImg={product.trendImg}
              />
            ))}{" "}
        </div>
      </div>
      
      {/* <div className="App">
        <FlightConversation />
      </div>

      <div className="itemcard">
        <Itemcard />
      </div> */
      // <div className="reviews">
      //   {" "}
      //   <UserReviews />
      // </div>*
      
      <div className="footer">
        <Footer />
      </div> }
    </>
  );
};

export default App;
