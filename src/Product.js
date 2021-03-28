import React from "react";
import { Card } from "antd";
import { Row, Col, Button } from "antd";
import { StarOutlined, HomeOutlined } from "@ant-design/icons";
import { Input } from "antd";

import MakeupCard from "./MakeupCard";
import { HeartOutlined } from "@ant-design/icons";
import "./product.css";
import ProductCard from "./ProductCard";

function Product() {
  return (
    <div>
      <ProductCard
        title="Nykaa Matte to Last! Mini Liquid Lipstick - Urja 24      "
        img="https://images-static.nykaa.com/media/catalog/product/tr:h-350,w-300,cm-pad_resize/8/9/8904245709471_re_ne_w_01_urja_24.jpg"
      />

      <div className="prod-1">
        <Row justify="start">
          <Col md={10} sm={24} xs={16}>
            <h3 style={{ color: "grey" }}>PRODUCT DESCRIPTION</h3>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Product;
