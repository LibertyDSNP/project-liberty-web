import React, { useEffect, useState } from "react";
import DeveloperPortalNav from "./DeveloperPortalNav";
import DeveloperPortalMobileNav from "./DeveloperPortalMobileNav";

const ExampleClient = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  useEffect(() => {
    props.onPathChange("example-client");
  }, [props]);

  useEffect(() => {
    const resizeListener = () => {
      setIsMobile(window.innerWidth < 750);
    };
    window.addEventListener("resize", resizeListener);
  }, []);

  return (
    <div
      className={
        isMobile
          ? "ExampleClient__layout Column Component"
          : "ExampleClient__layout Component"
      }
    >
      {isMobile ? (
        <DeveloperPortalMobileNav />
      ) : (
        <DeveloperPortalNav blockClassName="DeveloperPortalNav__sideNav" />
      )}
      <div className="ExampleClient__contentBlock">
        <div className="ExampleClient__content">
          <h1>Example Client</h1>
          <p>
            The DSNP is composed of three major elements. The first is identity,
            which creates a representation of users. The second is a social
            graph, which models relationships between user identities. The final
            element is messaging, which facilitates communication between users
            based on their social graph connections.
          </p>
          <p>
            Using the DSNP SDK, the Example Client demonstrates how to quickly
            integrate with the DSNP and manage all three elements. Given the
            development cycle, testing, and release sequence, the Example Client
            feature set might be behind the protocol spec and the SDK. Please
            read the release notes of the Example Client carefully to understand
            the dependencies.
          </p>
          <p>
            Grab the{" "}
            <a
              href="https://github.com/LibertyDSNP/sdk-ts"
              target="_blank"
              rel="noreferrer"
            >
              SDK
            </a>{" "}
            or the{" "}
            <a
              href="https://github.com/LibertyDSNP/example-client"
              target="_blank"
              rel="noreferrer"
            >
              client
            </a>{" "}
            from our repo and take a look. Hop in our{" "}
            <a
              href="https://forums.projectliberty.io"
              target="_blank"
              rel="noreferrer"
            >
              forums
            </a>{" "}
            to ask questions. As you read and learn, please help us improve
            these instructions for everybody else. We welcome your suggestions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExampleClient;
