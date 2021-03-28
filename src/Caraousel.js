import React from "react";
import { Row, Col, Card } from "antd";

function Caraousel() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img src={dermalogica} height="370px" />{" "}
        </div>

        <div>
          <img src={kay} height="370px" />
        </div>
        <div>
          <img src={kiel} height="370px" />
        </div>
        <div>
          <img src={huda} height="370px" />
        </div>
        <div>
          <img src={smash} height="370px" />
        </div>
      </Carousel>
      ,
    </div>
  );
}

export default Caraousel;
