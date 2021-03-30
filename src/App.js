import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DeveloperPortal from "./components/DeveloperPortal/DeveloperPortal";
import Testnet from "./components/DeveloperPortal/Testnet";
import Sdk from "./components/DeveloperPortal/SDK";
import ExampleClient from "./components/DeveloperPortal/ExampleClient";
import Blog from "./components/DeveloperPortal/Blog";
import LetsConnect from "./components/LetsConnect";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CodeOfConduct from "./components/CodeOfConduct";

const App = () => {
  const [pathname, setPathname] = React.useState("");

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, [pathname]);

  return (
    <>
      <Router>
        <div className="Content">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home onPathChange={setPathname} />
            </Route>
            <Route path="/about">
              <About onPathChange={setPathname} />
            </Route>
            <Route path="/developer-portal">
              <DeveloperPortal onPathChange={setPathname} />
            </Route>
            <Route path="/testnet">
              <Testnet />
            </Route>
            <Route path="/sdk">
              <Sdk />
            </Route>
            <Route path="/example-client">
              <ExampleClient />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/lets-connect">
              <LetsConnect onPathChange={setPathname} />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicy onPathChange={setPathname} />
            </Route>
            <Route path="/code-of-conduct">
              <CodeOfConduct onPathChange={setPathname} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
