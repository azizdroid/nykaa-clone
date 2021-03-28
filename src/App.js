import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Makeup from "./Makeup";
import Basket from "./Basket";
import Product from "./Product";
import { Row, Col, Button } from "antd";
import Makeuplist from "./Makeuplist";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { NykaContext } from "./NykaContext.js";
import ProductPage from "./ProductPage";
import Brandsproduct from "./Brandsproduct";

function App() {
  const [{ user }, dispatch] = useStateValue(null);

  const [njn, set] = useState();

  // const [brands, setBrand] = useState([
  //   { title: "lakme", id: 1 },
  //   { title: "Huda", id: 2 },
  //   { title: "Revlon", id: 3 },
  //   { title: "Revolution", id: 4 },
  //   { title: "Masaba", id: 5 },
  //   { title: "Kylie", id: 6 },
  //   { title: "Colorpop", id: 7 },
  //   { title: "Colorbar", id: 8 },
  //   { title: "Nyka", id: 9 },
  // ]);

  const [details, setDetails] = useState({
    product: null,
    brand: "hello",
  });

  return (
    <div className="App">
      {/* {!user ? (
        <Login />
      ) : (
       
      )} */}
      <div className="App-body">
        <NykaContext.Provider value={{ details, setDetails }}>
          <Router>
            <Switch>
              <Route path="/makeup">
                <Header />
                <Makeup />
                <Footer />
              </Route>
              <Route path="/product">
                <Header />
                <Product />
                <Footer />
              </Route>
              <Route path="/login">
                <Login />{" "}
              </Route>
              <Route path="/list">
                <Makeuplist />
              </Route>
              <Route path="/basket">
                <Header />
                <Basket />
                <Footer />
              </Route>
              <Route path="/brandsproducts">
                <Header />
                <Brandsproduct />
                <Footer />
              </Route>
              <Route path="/productpage">
                <Header />
                <ProductPage />
                <Footer />
              </Route>
              <Route path="/">
                <Header />
                <Home />
                <Footer />
              </Route>
            </Switch>
          </Router>
        </NykaContext.Provider>
      </div>
    </div>
  );
}

export default App;
