import React from "react";
import { Card } from "antd";
import { Row, Col, Button } from "antd";
import "./makeup.css";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import MakeupCard from "./MakeupCard";

function SideNavbar(props) {
  const { SubMenu } = Menu;
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <div>
      <div className="site-card-wrapper">
        <Row justify="space-between">
          <Col md={1} xs={1}></Col>

          <Col md={5} xs={2} className="makeup-card">
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu key="sub1" title={props.name}>
                  <Menu.Item key="1">{props.option}</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          </Col>

          <Col md={12} xs={1}>
            <MakeupCard />
          </Col>
        </Row>
      </div>
      <br />
    </div>
  );
}

export default SideNavbar;
