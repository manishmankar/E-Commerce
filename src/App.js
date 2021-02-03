import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import ProductLIst from "./Components/ProductList/ProductList";
import Details from "./Components/Details/Details";
import Default from "./Components/Default/Default";
import Card from "./Components/Card/Card";
import Store from "./Components/Store/Store";
import Model from "./Components/Model/Model";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/details" component={Details} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/" component={ProductLIst} />
        <Route component={Default} />
      </Switch>
      <Model />
    </React.Fragment>
  );
}

export default App;
