import React, { useEffect } from "react";
import DeveloperPortalNav from "./DeveloperPortalNav";

const Testnet = (props) => {
  useEffect(() => {
    props.onPathChange("testnet");
  }, [props]);

  return (
    <div className="Testnet__layout Component">
      <DeveloperPortalNav blockClassName="DeveloperPortalNav__sideNav" />
      <div className="Testnet__contentBlock">
        <div className="Testnet__content">
          <h1>Testnet</h1>
          <p>
            The DSNP is backed by a blockchain network that helps applications
            find messages. It acts like an index and doesn’t actually contain
            message content. This is our testnet version of that blockchain.
            Having a testnet allows us to test different apps without creating
            any permanent records. Our testnet is open to the community for
            experimentation. Please do not use it in earnest. We periodically
            destroy the data and do not make any promises about reliability or
            consistency.
          </p>
          <p>
            The details of the testnet connection will be released as soon as it
            becomes available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testnet;
