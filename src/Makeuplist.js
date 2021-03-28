import Axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Card } from "antd";
import "./makeup.css";
import prod1 from "./prod1.jpg";
import "./index.css";
import { StarFilled } from "@ant-design/icons";
import { Row, Col, Button } from "antd";
import { NykaContext } from "./NykaContext";
import { useHistory } from "react-router";

function Makeuplist() {
  const { Meta } = Card;

  const [value, setValue] = useState();

  // componentDidMount() {
  //     axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json`)
  //     .then(res=>{
  //         console.log(res);
  //         this.setState({value:res.data});
  //     });
  // }

  const context = useContext(NykaContext);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
      .then((res) => {
        console.log("hereeee");
        console.log(res);
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);

    // console.log("helloo");
    console.log(context.details);
  });

  return (
    <div>
      <Row justify="space-around" className="makeup-card1">
        {value
          ? value.map((val, index) => (
              <div>
                <Col md={4} sm={12} xs={24} className="makeup-card1">
                  <Card
                    hoverable
                    onClick={() => {
                      context.setDetails({
                        product: val,
                      });
                      history.push("/productpage");
                    }}
                    className="makeup-card1"
                    style={{ width: 300, color: "black" }}
                    cover={
                      <img alt="example" height="250" src={val.image_link} />
                    }
                  >
                    <div class="container">
                      <div className="product__rating">
                        <div class="middle">
                          <h1 class="text">PREVIEW SHADES</h1>
                        </div>{" "}
                        <br />
                      </div>
                    </div>{" "}
                    <p style={{ fontSize: 16 }}>{val.name}</p>
                    <h3>{val.brand}</h3>
                    <h3>
                      {" "}
                      {val.price_sign}
                      {val.price}
                    </h3>
                    <div className="product__rating">
                      <h3>{val.rating}</h3>
                    </div>
                  </Card>
                </Col>
              </div>
            ))
          : ""}
      </Row>
    </div>
  );
}

export default Makeuplist;
