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
import LetsConnect from "./components/LetsConnect";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CodeOfConduct from "./components/CodeOfConduct";
import Page1 from "./components/DeveloperPortal/Page1";

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
            <Route path="/page-1">
              <Page1 onPathChange={setPathname} />
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
