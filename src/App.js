import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Exchange from "./components/exchange/exchange";
import Configuration from "./components/configuration/configuration";

function App() {
  return (
    <Router>
      <div id="App">
        <Navbar />
        <div id="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/exchange" component={Exchange} />
            <Route path="/configuration" component={Configuration} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
