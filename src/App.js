import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "antd/dist/antd.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DeveloperPortal from "./components/DeveloperPortal";
import LetsConnect from "./components/LetsConnect";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Navigation />
            <Home />
          </Route>
          <Route path="/about">
            <Navigation />
            <About />
          </Route>
          <Route path="/developer-portal">
            <Navigation />
            <DeveloperPortal />
          </Route>
          <Route path="/lets-connect">
            <Navigation />
            <LetsConnect />
          </Route>
          <Route path="/privacy-policy">
            <Navigation />
            <PrivacyPolicy />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
