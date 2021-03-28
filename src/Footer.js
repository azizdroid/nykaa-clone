import React from "react";
import { Row, Col, Button } from "antd";
import "./footer.css";
import {
  MobileOutlined,
  MailOutlined,
  InstagramFilled,
  FacebookFilled,
  HomeOutlined,
  YoutubeFilled,
  TwitterSquareFilled,
  HeartFilled,
  PhoneFilled,
} from "@ant-design/icons";
import { Input } from "antd";
import google from "./google.png";
import applr from "./applr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div>
      <Row className="footer-one" justify="space-around">
        <Col xs={24} md={5}>
          <MailOutlined />
          &nbsp; GET SPECIAL DISCOUNT IN YOUR INBOX &nbsp;{" "}
          <Button className="site-button-ghost-wrapper" ghost>
            Send
          </Button>
        </Col>
        <Col xs={24} md={8} className="footer-one">
          <Row justify="space-between">
            <Col md={1} xs={1}>
              <br />
              <MobileOutlined />
            </Col>
            <Col md={12} xs={12}>
              <br />
              <p> EXPERIENCE THE NYKAA MOBILE APP</p>
            </Col>
            <Col md={5} xs={5}>
              <img src={google} height="80" />
            </Col>
            <Col md={5} xs={5}>
              <img src={applr} height="80" />
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={5} className="footer-one">
          <PhoneFilled />
          &nbsp; FOR ANY HELP YOU MAY CALL US AT +91 922-220-1010
          <p>(Monday to Saturday, 9AM - 9PM)</p>
        </Col>
      </Row>
      <Row className="footer-two" justify="space-around">
        <Col xs={12} md={3} class="brand1">
          <p class="brand1">WHO ARE WE?</p>
          <p class="brand1">CAREERS</p>
          <p class="brand1">AUTHENTICITY</p>
          <p class="brand1">PRESS</p>
          <p class="brand1">TESTIMONIALS</p>
          <p class="brand1">NYKAA</p>
          <p class="brand1">RESPONSIBLE DISCLOSURE</p> <br />
        </Col>
        <Col xs={12} md={3} class="brand1">
          <p class="brand1">HELP </p> <p class="brand1">CONTACT US </p>
          <p class="brand1">FREQUENTLY ASKED QUESTIONS</p>
          <p class="brand1"> STORE LOCATOR</p>
          <p class="brand1">CANCELLATION </p>
          <p class="brand1">RETURN SHIPPING </p>
          <p class="brand1">DELIVERY</p>
          <br />
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
