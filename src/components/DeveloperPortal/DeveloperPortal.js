import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/brand-icon.png";
import DevIcon from "../../images/icons/Dev_Icon.png";
import DSNPIcon from "../../images/icons/DSNP_Icon.png";
import SDKIcon from "../../images/icons/SDK_Icon.png";
import TestnetIcon from "../../images/icons/Testnet_Icon.png";

const DeveloperPortal = (props) => {
  useEffect(() => {
    props.onPathChange("developer-portal");
  }, [props]);

  const SlashBar = [];
  for (let i = 0; i < 25; i++) {
    let idName = "slash" + i;
    SlashBar.push(
      <div className="DeveloperPortal__slash" id={idName} key={idName}>
        {" "}
      </div>
    );
  }

  return (
    <div className="DeveloperPortal__block Component">
      <div className="DeveloperPortal__blackBackground">
        <div className="DeveloperPortal__header">
          <img className="DeveloperPortal__headerLogo" src={Logo} alt="logo" />
          <div className="DeveloperPortal__headerText">
            <div className="DeveloperPortal__headerTitle">
              <h1 className="NoSpace" data-aos="fade-right">
                Liberty Developer Resources
              </h1>
            </div>
            <div className="DeveloperPortal__headerCaption">
              <p className="NoSpace" data-aos="fade-right">
                Unified Decentralized Universally Accessible Social Graph
                Protocol.
              </p>
            </div>
            <div className="DeveloperPortal__headerCaption--bold">
              <h2 className="NoSpace" data-aos="fade-right">
                It’s time to build
              </h2>
            </div>
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
            your goals; the navigation panel below gives some useful entry
            points.
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
            something or just wondering where the most appropriate place to
            start is, please post and we’ll do our best to help. You can also
            reach us by filing an issue in any of our repositories. If you need
            to reach us privately, please email{" "}
            <a href="mailto:hello@projectliberty.io">hello@projectliberty.io</a>
            .
          </p>
        </div>
      </div>
      <div className="DeveloperPortal__quickLinks">
        <div className="DeveloperPortal__quickLinkCard" data-aos="fade-up">
          <img
            className="DeveloperPortal__quickLinkCardIcon"
            src={DSNPIcon}
            alt="dsnp icon"
          />
          <h3 className="DeveloperPortal__quickLinkCardTitle">DSNP</h3>
          <p className="DeveloperPortal__quickLinkCardDescription">
            The Distributed Social Networking Protocol is the glue that joins
            all the Project Liberty technologies together.
          </p>
          <a
            href="http://spec.projectliberty.io/"
            target="_blank"
            rel="noreferrer"
          >
            &#x2192;
          </a>
        </div>
        <div className="DeveloperPortal__quickLinkCard" data-aos="fade-up">
          <img
            className="DeveloperPortal__quickLinkCardIcon"
            src={DevIcon}
            alt="dev icon"
          />
          <h3 className="DeveloperPortal__quickLinkCardTitle">
            Dev Environment
          </h3>
          <p className="DeveloperPortal__quickLinkCardDescription">
            How to set up a development environment for building DSNP
            applications.
          </p>
          <Link to="/example-client">&#x2192;</Link>
        </div>
        <div className="DeveloperPortal__quickLinkCard" data-aos="fade-up">
          <img
            className="DeveloperPortal__quickLinkCardIcon"
            src={TestnetIcon}
            alt="testnet icon"
          />
          <h3 className="DeveloperPortal__quickLinkCardTitle">Testnet</h3>
          <p className="DeveloperPortal__quickLinkCardDescription">
            The test network provides a simple "server side" against which you
            can test a DSNP client application.
          </p>
          <Link to="/testnet">&#x2192;</Link>
        </div>
        <div className="DeveloperPortal__quickLinkCard" data-aos="fade-up">
          <img
            className="DeveloperPortal__quickLinkCardIcon"
            src={SDKIcon}
            alt="sdk icon"
          />
          <h3 className="DeveloperPortal__quickLinkCardTitle">SDK</h3>
          <p className="DeveloperPortal__quickLinkCardDescription">
            A software development kit offering build configurations and common
            components for DSNP-enabled applications.
          </p>
          <Link to="/sdk">&#x2192;</Link>
        </div>
      </div>
      <div className="DeveloperPortal__rules">
        <div className="DeveloperPortal__rulesContent">
          <h2>Contribution Guidelines & Community Standards</h2>
          <p>
            Development activity across Project Liberty shares a common set of
            Contribution Guidelines and a single Code of Conduct. Some
            repositories will have additional technology-specific developer
            documentation, but we try to keep the contribution workflow as
            consistent as possible from repository to repository, so that a
            participant in one project can easily make contributions elsewhere
            as desired.
          </p>
          <a
            className="DeveloperPortal__link"
            href="https://github.com/LibertyDSNP/liberty-web/pull/13"
            target="_blank"
            rel="noreferrer"
          >
            <div className="DeveloperPortal__linkTitle">
              Contribution Guidelines
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
      <div className="DeveloperPortal__logoBars">{SlashBar}</div>
      <div
        className="DeveloperPortal__blackBackground DeveloperPortal__reportingBlock"
        data-aos="fade-right"
      >
        <div className="DeveloperPortal__reporting">
          <h2>Reporting Secure Vulnerabilities</h2>
          <p>
            If you discover a security vulnerability in one of the projects
            here, and you feel that it's sensitive enough that it shouldn’t be
            posted publicly, please report it (and thank you!).
          </p>
          <a className="DeveloperPortal__link" href="#">
            <div className="DeveloperPortal__linkTitle--white">
              Report Vulnerability
            </div>
            &#x2192;
          </a>
        </div>
      </div>
      <div className="DeveloperPortal__logoBars--two">{SlashBar}</div>
    </div>
  );
};

export default DeveloperPortal;
