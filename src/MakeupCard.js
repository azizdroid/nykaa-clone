import React from "react";
import { Card } from "antd";
import "./makeup.css";
import prod1 from "./prod1.jpg";
import "./index.css";
import { StarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

function MakeupCard(props) {
  const { Meta } = Card;

  return (
    <div>
      <Link to="/product">
        <Card
          hoverable
          className="makeup-card1"
          style={{ width: 280, color: "black" }}
          cover={
            <img alt="example" height="250" className="image" src={props.img} />
          }
        >
          <div class="container">
            <div className="product__rating">
              <div class="middle">
                <h1 class="text">PREVIEW SHADES</h1>
              </div>{" "}
            </div>
          </div>
          <h4>{props.desc}</h4>
          <h5> {props.price}</h5>
          <div className="product__rating">
            <StarFilled />
            <StarFilled />
            <StarFilled />
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default MakeupCard;
