import React from "react";
import { Row, Col, Card } from "antd";

function HomeCard(props) {
  return (
    <div>
      <Card
        hoverable
        style={{ height: 330, marginBottom: 20, marginRight: 12 }}
        cover={<img alt="example" src={props.image} height="330" />}
      >
        <p className="brands-one">{props.text}</p>
        <p className="brands-two">{props.text1}</p>
      </Card>
    </div>
  );
}

export default HomeCard;
