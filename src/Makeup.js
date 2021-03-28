import React from "react";
import { Row, Col, Button } from "antd";
import "./makeup.css";
import car1 from "./car1.jpg";
import car2 from "./car2.jpg";
import car3 from "./car3.jpg";
import { Carousel } from "antd";
import SideNavbar from "./SideNavbar";
import { Card } from "antd";
import prod1 from "./prod1.jpg";
import propd2 from "./prod1.jpg";
import prod3 from "./prod1.jpg";
import "./App.css";
import "./makeup.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import MakeupCard from "./MakeupCard";
import Makeuplist from "./Makeuplist";

function Makeup() {
  const { SubMenu } = Menu;
  const { Header, Content, Footer, Sider } = Layout;
  const { Meta } = Card;

  return (
    <div style={{ background: "282c34" }}>
      <Row justify="center">
        <h2 className="makeup-card">
          MAKE UP COLLECTION - MAKEUP ITEMS ONLINE (7805 ITEMS)
        </h2>
      </Row>
      <div className="cara">
        <Row>
          <Col md={2}></Col>
          <Col md={20}>
            <Carousel autoplay>
              <div>
                <img
                  src={car1}
                  height="200px"
                  className="cara"
                  width="1200px"
                />
              </div>

              <div>
                <img
                  src={car2}
                  height="200px"
                  className="cara"
                  width="1200px"
                />
              </div>
              <div>
                <img
                  src={car3}
                  height="200px"
                  className="cara"
                  width="1200px"
                />
              </div>
            </Carousel>
          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
      <Row justify="center">
        <h2 className="makeup-card">ALL PRODUCTS</h2>
      </Row>
      <Row justify="space-around">
        <Col md={24}>
          <Row justify="space-around">
            <Col md={2}></Col>
            <Col md={4} sm={24} xs={24}>
              <Menu
                mode="inline"
                defaultSelectedKeys={[""]}
                defaultOpenKeys={["null"]}
                style={{ height: "100%" }}
              >
                <SubMenu key="sub1" title="CATEGORY">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="PRICE">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub66" title="BRAND">
                  <Menu.Item key="59">option9</Menu.Item>
                  <Menu.Item key="510">option10</Menu.Item>
                  <Menu.Item key="511">option11</Menu.Item>
                  <Menu.Item key="512">option12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub77" title="PRICE">
                  <Menu.Item key="49">option9</Menu.Item>
                  <Menu.Item key="410">option10</Menu.Item>
                  <Menu.Item key="411">option11</Menu.Item>
                  <Menu.Item key="412">option12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub88" title="DISCOUNT">
                  <Menu.Item key="39">option9</Menu.Item>
                  <Menu.Item key="310">option10</Menu.Item>
                  <Menu.Item key="311">option11</Menu.Item>
                  <Menu.Item key="312">option12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub99" title="AVG CUSTOMER RATING">
                  <Menu.Item key="29">option9</Menu.Item>
                  <Menu.Item key="210">option10</Menu.Item>
                  <Menu.Item key="211">option11</Menu.Item>
                  <Menu.Item key="212">option12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub100" title="COLOR">
                  <Menu.Item key="19">option9</Menu.Item>
                  <Menu.Item key="110">option10</Menu.Item>
                  <Menu.Item key="111">option11</Menu.Item>
                  <Menu.Item key="112">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Col>
            <Col md={18} sm={24}>
              <Row justify="space-around">
                <Makeuplist />{" "}
                {/* <Col
                  md={7}
                  md={7}
                  sm={12}
                  xs={24}
                  className="makeup-card1"
                ></Col>
                <Col
                  md={7}
                  md={7}
                  sm={12}
                  xs={24}
                  className="makeup-card1"
                ></Col>
                <Col
                  md={7}
                  md={7}
                  sm={12}
                  xs={24}
                  className="makeup-card1"
                ></Col> */}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Makeup;
