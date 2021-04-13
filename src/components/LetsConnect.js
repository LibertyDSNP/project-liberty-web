import React, { useEffect } from "react";
import HubspotForm from "react-hubspot-form";

const LetsConnect = (props) => {
  useEffect(() => {
    props.onPathChange("lets-connect");
  }, [props]);

  return (
    <div className="Component">
      <div className="LetsConnect__block">
        <h1 className="LetsConnect__title">Let’s Connect</h1>
        <p className="LetsConnect__caption">
          If you are interested, let’s connect - join our forum
        </p>
        <p className="LetsConnect__caption">
          <a
            className="LetsConnect__link"
            href="https://forums.projectliberty.io/"
            target="_blank"
            rel="noreferrer"
          >
            https://forums.projectliberty.io/
          </a>
        </p>
        <p className="LetsConnect__caption">or join our mailing list</p>
        <div className="LetsConnect__form">
          <HubspotForm
            portalId="8047098"
            formId="630d873c-376a-4c52-ac77-6447c8b198de"
          />
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
