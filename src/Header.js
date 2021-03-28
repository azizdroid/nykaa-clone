import React, { useState, useContext, useEffect } from "react";
import {
  MobileOutlined,
  GiftFilled,
  HomeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Row, Col, Button } from "antd";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./header.css";
import nykkalogo from "./nykka-logo.png";
import dior from "./dior.png";
import benefit from "./benefit.png";

import user1 from "./user1.png";
import offer from "./offer.png";
import basket2 from "./basket2.jpg";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { Input } from "antd";
import Basket from "./Basket.js";
import axios from "axios";

import { NykaContext } from "./NykaContext.js";

function Test() {
  const [brands, setBrand] = useState();

  useEffect(() => {
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=all`)
      .then((res) => {
        console.log("hereeee");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);

    // console.log("helloo");
    console.log(context.details);
  });
  const [{ user }, dispatch] = useStateValue(null);

  const { SubMenu } = Menu;
  const { Search } = Input;

  const context = useContext(NykaContext);
  const history = useHistory();

  useEffect(() => {
    console.log(context.details.product);
  }, []);
  return (
    <div>
      <Row justify="space-around" className="header">
        <Col>
          <div> Nykaa Beauty Bonanza Sale | Upto 40% OFF</div>
        </Col>
        <Col>
          <MobileOutlined /> Get App | <HomeOutlined /> Store & Events |{" "}
          <GiftFilled /> Gift Card | <QuestionCircleOutlined /> Help
        </Col>
      </Row>
      <Row className="header-navbar">
        <Col md={2}>
          <Link to="/">
            {" "}
            <img src={nykkalogo} height="40px" />
          </Link>
        </Col>
        <Col md={18}>
          <Menu mode="horizontal">
            <Menu.Item key="mail">Categories</Menu.Item>
            <SubMenu key="SubMenu" title="Nykka Fashion">
              {/* {context.map((brand) => {
                return (
                  <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">{brand.title}</Menu.Item>
                  </Menu.ItemGroup>
                );
              })} */}
              {/* {context
                ? context.brands.map((brand, index) => (
                    <Menu.Item key={index}>{brand.title}</Menu.Item>
                  ))
                : ""} */}
            </SubMenu>
            <SubMenu key="SubMenu6" title="Brands">
              {" "}
              <img
                src={dior}
                height="100px"
                onClick={() => {
                  context.setDetails((prev) => ({
                    ...prev,
                    brand: "dior",
                  }));
                  history.push("/brandsproducts");
                }}
              />
              <img src={benefit} height="100px" />{" "}
            </SubMenu>
            <SubMenu key="SubMenu7" title="Beauty Advice">
              <Menu.Item key="setting:19">Option 1</Menu.Item>
              <Menu.Item key="setting:29">Option 2</Menu.Item>
              <Menu.Item key="setting:93">Option 3</Menu.Item>
              <Menu.Item key="setting:94">Option 4</Menu.Item>
            </SubMenu>
            <Menu.Item key="alipay">
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nykka Network
              </a>
            </Menu.Item>
            <Search
              placeholder="Search products,brands"
              onSearch={(value) => console.log(value)}
              style={{ width: 200 }}
            />
          </Menu>
        </Col>
        <Col md={4} className="newphoto">
          <Link to="/login">
            {" "}
            <img src={user1} height="40px" />
          </Link>
          {user?.email}
          <Link to="/basket">
            <img src={basket2} height="40px" />
          </Link>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col xs={18} sm={10} md={24}>
          <Menu mode="horizontal">
            <Menu.Item key="mail" className="header-navbar1">
              <Link to="/makeup">Makeup</Link>
            </Menu.Item>

            <SubMenu key="SubMenu7" title="Brands" className="header-navbar1">
              <Menu.ItemGroup title="Item 1" className="header-navbar1">
                <Menu.Item key="setting:10">Option 1</Menu.Item>
                <Menu.Item key="setting:20">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2" className="header-navbar1">
                <Menu.Item key="setting:37">Option 3</Menu.Item>
                <Menu.Item key="setting:47">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="SubMenu8" title="Skin" className="header-navbar1">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:55">Option 1</Menu.Item>
                <Menu.Item key="setting:66">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:77">Option 3</Menu.Item>
                <Menu.Item key="setting:88">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="SubMenu23" title="Hair" className="header-navbar1">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:11">Option 1</Menu.Item>
                <Menu.Item key="setting:22">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:33">Option 3</Menu.Item>
                <Menu.Item key="setting:44">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>

            <SubMenu
              key="SubMenu09"
              title="Appliances"
              className="header-navbar1"
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:21">Option 1</Menu.Item>
                <Menu.Item key="setting:22">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:63">Option 3</Menu.Item>
                <Menu.Item key="setting:64">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="SubMenu1"
              title="Personal Care"
              className="header-navbar1"
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:71">Option 1</Menu.Item>
                <Menu.Item key="setting:27">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:34">Option 3</Menu.Item>
                <Menu.Item key="setting:43">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="SubMenu2" title="Natural" className="header-navbar1">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:41">Option 1</Menu.Item>
                <Menu.Item key="setting:42">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:53">Option 3</Menu.Item>
                <Menu.Item key="setting:54">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="SubMenu3"
              title="Mom & Baby"
              className="header-navbar1"
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:91">Option 1</Menu.Item>
                <Menu.Item key="setting:12">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:03">Option 3</Menu.Item>
                <Menu.Item key="setting:04">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="SubMenu4"
              title="Health & Wellness"
              className="header-navbar1"
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:40">Option 1</Menu.Item>
                <Menu.Item key="setting:60">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:100">Option 3</Menu.Item>
                <Menu.Item key="setting:200">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="SubMenu5"
              title="Fragrance"
              className="header-navbar1"
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:400">Option 1</Menu.Item>
                <Menu.Item key="setting:500">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:1000">Option 3</Menu.Item>
                <Menu.Item key="setting:2000">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <img src={offer} />
          </Menu>
        </Col>
      </Row>
      <br />
      <br />
    </div>
  );
}

export default Test;
