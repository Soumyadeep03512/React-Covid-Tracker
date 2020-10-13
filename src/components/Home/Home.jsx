import React from "react";
import Cards from "../Cards/Cards";
import Navbarhome from "../NavbarHome/Navbarhome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import States from "../States/States";
import Map from "../Map/Map";
import Graph from "../Graph/Graph";

const Home = () => {
  return (
    <div>
      <div>
        <Cards />
      </div>

      <Router>
        <Navbarhome />
        <Switch>
          <Route path="/" exact component={States} />
          <Route path="/map" exact component={Map} />
          <Route path="/graph" exact component={Graph} />
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
