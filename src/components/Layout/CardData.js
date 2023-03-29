import React from "react";
import "../../css/card-data.css";
import { FaMapMarked } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

const CardData = () => {
  const icondata = [
    { id: 1, img: "./images/state.png", num: "७", text: "प्रदेश" },
    { id: 2, img: "./images/district.png", num: "७७", text: "जिल्ला" },
    { id: 3, img: "./images/government1.png", num: "६", text: "प्र.न.प" },
    { id: 4, img: "./images/government2.png", num: "४६०", text: "न.पा." },
    { id: 5, img: "./images/government3.png", num: "२७६", text: "उप.म.न.प" },
    { id: 6, img: "./images/locator1.png", num: "७५३", text: "कुल स्थान" },
    { id: 7, img: "./images/hall.png", num: "६७४", text: "कुल वडा" },
  ];
  return (
    <>
      {icondata.map((data) => (
        <div className="cardd">
          <img src={data.img} alt=" icon" />
          <div className="iconDiv">
            <span className="number fs-3 fw-bold">{data.num}</span>
            <span className="text fs-10">{data.text}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardData;
