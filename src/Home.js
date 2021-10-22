import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__sectionHeader">
          20% off on beef!
        </div>
        <img src="./images/grocerystorebackground.jpeg" alt="" className="home__image" />
      </div>
    </div>
  );
}

export default Home;
