import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/brand-icon.png";

const DeveloperPortal = (props) => {
  useEffect(() => {
    props.onPathChange("developer-portal");
  }, [props]);

  return (
    <div className="DeveloperPortal__block Component">
      <div className="DeveloperPortal__blackBackground">
        <div className="DeveloperPortal__header">
          <img src={Logo} alt="logo" />
          <div className="DeveloperPortal__headerText">
            <h1 className="DeveloperPortal__headerTitle">
              Liberty Developer Resources
            </h1>
            <p className="DeveloperPortal__headerCaption">
              Unified Decentralized Universally Accessible Social Graph
              Protocol.
            </p>
            <h2 className="DeveloperPortal__headerCaption--bold">
              It’s time to build
            </h2>
          </div>
        </div>
        <div className="DeveloperPortal__getStarted">
          <h2>Get Started</h2>
          <p>
            Everything here is open source. Our development roadmap is focused
            on our <Link to="/about">mission</Link> of reclaiming the social
            graph for the common good and is guided by our principles.
          </p>
          <p>
            If this is your first visit, the{" "}
            <a
              href="https://github.com/LibertyDSNP/papers"
              target="_blank"
              rel="noreferrer"
            >
              Decentralized Social Networking Protocol (DSNP) whitepaper
            </a>{" "}
            is a good place to start. Where you go after that will depend on
            your goals; the navigation panel gives some useful entry points.
          </p>
          <p>
            The first and most important entry point is our{" "}
            <a
              href="https://forums.projectliberty.io/"
              target="_blank"
              rel="noreferrer"
            >
              Discussion Forums
            </a>
            . All questions and suggestions are welcome! If you’re curious about
            something, or you’re just wondering where the most appropriate place
            to start is, please post and we’ll do our best to help. You can also
            reach us by filing an issue in any of our repositories, of course.
            If you need to reach us privately, please email{" "}
            <a href="mailto:hello@projectliberty.io">hello@projectliberty.io</a>
            .
          </p>
        </div>
      </div>
      <div className="DeveloperPortal__logoBars"> </div>
      <div className="DeveloperPortal__whiteBackground">
        <div className="DeveloperPortal__quickLinks">
          <div className="DeveloperPortal__quickLinkCard">
            <h3>DSNP</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              labore odit veniam! Beatae dolore est incidunt nulla.
            </p>
            <a
              href="http://spec.projectliberty.io/"
              target="_blank"
              rel="noreferrer"
            >
              &#x2192;
            </a>
          </div>
          <div className="DeveloperPortal__quickLinkCard">
            <h3>Example Client</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              eaque illo minus veniam. Ab adipisci alias beatae doloribus.
            </p>
            <Link to="/example-client">&#x2192;</Link>
          </div>
          <div className="DeveloperPortal__quickLinkCard">
            <h3>Testnet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto atque dolore ea eaque earum, error id illo incidunt.
            </p>
            <Link to="/testnet">&#x2192;</Link>
          </div>
          <div className="DeveloperPortal__quickLinkCard">
            <h3>SDK</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              asperiores assumenda deleniti doloremque ducimus expedita.
            </p>
            <Link to="/sdk">&#x2192;</Link>
          </div>
        </div>
        <div className="DeveloperPortal__rules">
          <div className="DeveloperPortal__rulesContent">
            <h2>Contribution Guidelines & Community Standards</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              delectus ducimus eveniet facilis incidunt itaque, iure laboriosam
              magnam odit perferendis placeat quae quisquam ratione saepe
              voluptatibus. Adipisci deleniti quaerat reprehenderit. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ab amet asperiores
              delectus, explicabo ipsa magnam modi recusandae velit. Aliquam
              consequuntur debitis, laborum libero magni minus nihil quas quos
              rem voluptatem!
            </p>
            <a
              className="DeveloperPortal__link"
              href="https://github.com/LibertyDSNP/liberty-web/pull/13"
              target="_blank"
              rel="noreferrer"
            >
              <div className="DeveloperPortal__linkTitle">
                Contribution Guide
              </div>
              &#x2192;
            </a>
            <a
              className="DeveloperPortal__link"
              href="https://www.projectliberty.io/codeOfConduct.html"
              target="_blank"
              rel="noreferrer"
            >
              <div className="DeveloperPortal__linkTitle">Code of Conduct</div>
              &#x2192;
            </a>
          </div>
        </div>
      </div>
      <div className="DeveloperPortal__logoBars"> </div>
      <div className="DeveloperPortal__blackBackground">
        <div className="DeveloperPortal__reporting">
          <h2>Reporting Secure Vulnerabilities</h2>
          <p>
            If you have discovered a security vulnerability in one of the
            projects here, and you feel that it is sensitive enough that it
            shouldn’t.
          </p>
          <a className="DeveloperPortal__link" href="#">
            <div className="DeveloperPortal__linkTitle--white">
              Report Vulnerability
            </div>
            &#x2192;
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPortal;
