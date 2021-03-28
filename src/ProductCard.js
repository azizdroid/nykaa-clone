import React from "react";
import "./product.css";
import { Card } from "antd";
import { Row, Col, Button } from "antd";
import { StarOutlined, HomeOutlined } from "@ant-design/icons";
import { Input } from "antd";

import MakeupCard from "./MakeupCard";
import { HeartOutlined } from "@ant-design/icons";

function ProductCard(props) {
  return (
    <div>
      <Row justify="space-around" style={{ marginBottom: 15 }}>
        <Col md={20}>
          <Card bordered={false}>
            <Row>
              <Col md={8} sm={24} xs={24}>
                <img src={props.img} />{" "}
              </Col>
              <Col md={12} sm={24} xs={22} className="prod-title">
                <h2>{props.title}</h2>
                <div className="product-one">
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
                <div className="product-data">
                  <strong>{props.price}</strong>
                  <p style={{ fontWeight: 500 }}>inclusive of all taxes</p>
                  <Card
                    bordered={false}
                    style={{
                      backgroundColor: "#DCDCDC",
                      textAlign: "start",
                    }}
                  >
                    <p>
                      Free wonderpuff worth Rs 899 on orders of Rs 1200! *Offer
                      not valid on sheetmasks and safety essentials products!
                    </p>
                  </Card>
                </div>
                <div>
                  <br />
                  <div>
                    <Row justify="space-between">
                      <Col md={8} sm={12} xs={12}>
                        <Button
                          type="primary"
                          style={{
                            backgroundColor: "#fc2779",
                            borderColor: "#fc2779",
                          }}
                        >
                          ADD TO BAG{" "}
                        </Button>
                      </Col>
                      <Col md={15} sm={12} xs={24} className="delivery">
                        <HomeOutlined /> DELIVERY OPTIONS
                        <Input placeholder="Basic usage" />
                        <br />
                        <br />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductCard;
