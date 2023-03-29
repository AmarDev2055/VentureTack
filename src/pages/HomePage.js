import React from "react";
import Layout from "./../components/Layout/Layout";
import CardData from "../components/Layout/CardData";
import Sider from "../components/Layout/Sider";
import CardLink from "../components/Layout/CardLink";
import Bardiagram from "../components/Layout/Bardiagram";
import Proflies from "../components/Layout/Proflies";
const HomePage = () => {
  return (
    <Layout>
      <div className="conatiner">
        <div className="topHome">
          <img src="./images/nepal.PNG" alt="" className="map" />
        </div>
        <div className="card__data">
          <CardData />
          <hr className="horizental"></hr>
          <CardLink />
        </div>
      </div>
      <div className="sub-container">
        <div className="middleHome">
          <Sider />
        </div>
        <div className="bardaigram">
          <span className="barPerformance">
            <b>Overall Performance</b>
          </span>
          <Bardiagram />
        </div>
        <Proflies />
      </div>
    </Layout>
  );
};

export default HomePage;
