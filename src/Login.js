import React from "react";
import "./login.css";
import { Card } from "antd";
import { Row, Col, Button } from "antd";
import {
  CloseOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import nykalogin from "./nykalogin.jpg";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signInwithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  const signInwithFacebook = () => {};

  return (
    <div className="login">
      <Row justify="space-around">
        <Col md={8}>
          <Card
            bordered={true}
            className="card"
            style={{ height: 650, marginTop: 20, borderRadius: 30 }}
          >
            <Row className="close">
              <Col md={24}>
                <CloseOutlined style={{ fontSize: 32 }} />
              </Col>
              <Row className="close">
                <p>Sign in</p>
              </Row>
              <Row className="sign-two">
                <p>
                  {" "}
                  To quickly find your favourites items, saved addresses and
                  payments. Register and earn 2000 reward points
                </p>
                <Row justify="center">
                  <Col md={20} xs={24}>
                    <img
                      src={nykalogin}
                      style={{ justifyContent: "center", width: 270 }}
                    />
                  </Col>
                </Row>
              </Row>
            </Row>
            <Col md={24} xs={24}>
              <Button
                type="primary"
                style={{
                  backgroundColor: "rgb(240, 6, 135)",
                  borderColor: "rgb(240, 6, 135)",
                  alignItems: "center",
                  justify: "center",
                  width: 270,
                  justifyItems: "center",
                }}
              >
                SIGN IN WITH EMAIL{" "}
              </Button>
            </Col>
            <Row>
              <br />
              <Col md={12} xs={24} style={{ marginTop: 10 }}>
                <br />
                <Button
                  onClick={signInwithFacebook}
                  style={{ borderColor: "aqua", width: 150 }}
                >
                  <FacebookOutlined
                    style={{ textAlign: "left", color: "blue" }}
                  />{" "}
                  FACEBOOK
                </Button>
              </Col>
              <Col md={8} xs={24} style={{ marginTop: 10 }}>
                <br />
                <Button
                  onClick={signInwithGoogle}
                  style={{ borderColor: "green", width: 150 }}
                >
                  <GoogleOutlined style={{ textAlign: "left", color: "red" }} />{" "}
                  GOOGLE
                </Button>
              </Col>
              <p
                style={{
                  color: "grey",
                  marginTop: 10,
                  fontfamily: "Source Sans Pro",
                }}
              >
                By continuing, you agree that you have read and accept our T&Cs
                and Privacy Policy
              </p>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
