import React from "react";
import "./home.css";
import offer from "./offer.png";
import basket2 from "./basket2.jpg";
import dermalogica from "./dermalogica.jpg";
import kay from "./kay.jpg";
import mercury from "./mercury.jpg";
import mask from "./mask.gif";
import farsali from "./farsali.jpg";
import haul from "./haul.gif";
import kaya from "./kaya.jpg";
import brand1 from "./brand1.jpg";
import brand2 from "./brand2.jpg";
import brand3 from "./brand3.jpg";
import brand4 from "./brand4.jpg";
import brand5 from "./brand5.jpg";
import brand6 from "./brand6.jpg";
import brand7 from "./brand7.jpg";
import brand8 from "./brand8.jpg";
import smashcard from "./smashcard.jpg";
import maybcard from "./maybcard.jpg";
import kiel from "./kiel.jpg";
import smash from "./smash.gif";
import loreal from "./loreal.gif";
import lakme from "./lakme.jpg";
import store1 from "./store1.jpg";
import store2 from "./store2.jpg";
import bonazasale from "./bonazasale.jpg";
import huda from "./huda.jpg";
import beauty from "./beauty.jpg";
import sale from "./sale.gif";
import { Card } from "antd";
import makeup from "./makeup.jpg";
import festive from "./festive.jpg";
import { Carousel } from "antd";
import { Row, Col, Button } from "antd";
import HomeCard from "./HomeCard";
import SmallCard from "./SmallCard";

function Home() {
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
      <Row justify="center">
        <Card
          hoverable
          style={{ width: 1200, height: 110, marginBottom: 75 }}
          cover={<img alt="example" src={makeup} />}
        />
      </Row>
      <Row justify="center">
        <br />
        <h2 className="home-card">
          <br />
          IN THE SPOTLIGHT
        </h2>
      </Row>
      <Row justify="center">
        <Col xs={22} sm={22} md={10}>
          {/* <Card
            hoverable
            style={{ height: 300, marginRight: 12, marginBottom: 12 }}
            cover={<img alt="example" height="330px" src={festive} />}
          ></Card> */}
          <HomeCard image={festive} />
        </Col>

        <Col xs={22} sm={22} md={10}>
          <HomeCard image={kaya} />
        </Col>
        <Col md={10} sm={22} xs={22}>
          <HomeCard image={smashcard} />
        </Col>
        <Col md={10} sm={22} xs={22}>
          <HomeCard image={maybcard} />
        </Col>
        <Col md={10} sm={22} xs={22}>
          <HomeCard image={lakme} />
        </Col>
        <Col md={10} sm={22} xs={22}>
          <HomeCard image={loreal} />
        </Col>
      </Row>
      <Row justify="center">
        <Card
          hoverable
          style={{ height: 50, marginBottom: 50 }}
          cover={<img src={bonazasale} height="80" width="1000" />}
        />
      </Row>
      <Row justify="center">
        <br />
        <h2 className="home-card">
          <br />
          SPECIAL SELECTION FOR YOU{" "}
        </h2>
      </Row>
      <Row justify="center">
        <Col md={10} sm={22} xs={22}>
          <HomeCard image={haul} />
        </Col>
        <Col md={10} sm={22} xs={22}>
          <HomeCard image={farsali} />
        </Col>
        <Col md={10} sm={22} xs={22}>
          <HomeCard image={mercury} />
        </Col>
        <Col md={10} sm={22} xs={22}>
          <HomeCard image={mask} />
        </Col>
      </Row>
      <Row justify="center">
        <br />
        <h2 className="home-card">
          <br />
          STORE IN FOCUS{" "}
        </h2>
      </Row>
      <Row justify="center">
        <Col md={10} xs={22} sm={22}>
          <HomeCard image={store1} />
        </Col>
        <Col md={10} xs={22} sm={22}>
          <HomeCard image={store2} />
        </Col>
      </Row>
      <Row justify="center">
        <br />
        <h2 className="home-card">
          <br />
          FEATURED BRANDS{" "}
        </h2>
      </Row>
      <Row justify="space-around">
        <Col md={5} xs={10} sm={10}>
          <SmallCard
            image={brand1}
            text="Upto 15% OFF"
            text1=" Your Hair Your Way !"
          ></SmallCard>
        </Col>
        <Col md={5} xs={10} sm={10}>
          <SmallCard
            image={brand2}
            text="Upto 15% OFF"
            text1=" Your Hair Your Way !"
          ></SmallCard>
        </Col>
        <Col md={5} xs={10} sm={10}>
          <SmallCard
            image={brand3}
            text="3-Piece Best Loved Kit + 2 Sheetmasks Fr"
            text1="  On Orders Of Rs.999+"
          ></SmallCard>
        </Col>
        <Col md={5} xs={10} sm={10}>
          <SmallCard
            image={brand4}
            text="Complimentary Badgal Bang Mascara"
            text1="  + Buy 3 Get 3 Free On Sheet Masks"
          >
            <br />
          </SmallCard>
        </Col>
        <Col md={5} xs={10} sm={10}>
          <SmallCard
            image={brand5}
            class="brands-one"
            text="Complimentary Badgal Bang Mascara"
            text1="Sample On Rs.2200"
          ></SmallCard>
        </Col>
        <Col md={5} xs={10} sm={10}>
          <SmallCard
            image={brand6}
            text="Nykaa Fragrances"
            text1="Upto 40% OFF"
          ></SmallCard>
        </Col>
        <Col md={5} xs={11} sm={11}>
          <SmallCard
            image={brand7}
            text="Buy 2 Get 2"
            text1="Goodness Of Turmeric & Saffron"
          ></SmallCard>
        </Col>
        <Col md={5} xs={11} sm={11}>
          <SmallCard
            image={brand8}
            text="Buy 2 Get 2"
            text1="       Goodness Of Turmeric & Saffron"
          ></SmallCard>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
