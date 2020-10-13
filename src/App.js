import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import Helpline from "./components/Helpline/Helpline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/countries" exact component={Countries} />
          <Route path="/helpline" exact component={Helpline} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
