import React from "react";

const LetsConnect = () => {
  return (
    <>
      <h1 className="Contact__formH1">Let’s Connect</h1>
      <p className="Contact__formP">
        If you are interested, let’s connect - join our forum
      </p>
      <p className="Contact__formP">
        <a
          className="Contact__formA"
          href="https://forum.projectliberty.io/"
          target="_blank"
          rel="noreferrer"
        >
          https://forum.projectliberty.io/
        </a>
      </p>
      <p className="Contact__formP">or join our mailing list</p>
      <div className="Contact__form">
        {/*/!*[if lte IE 8]>*!/*/}
        {/*<script*/}
        {/*  charSet="utf-8"*/}
        {/*  type="text/javascript"*/}
        {/*  src="//js.hsforms.net/forms/v2-legacy.js"*/}
        {/*></script>*/}
        {/*/!*<![endif]*!/*/}
        {/*<script*/}
        {/*  charSet="utf-8"*/}
        {/*  type="text/javascript"*/}
        {/*  src="//js.hsforms.net/forms/v2.js"*/}
        {/*></script>*/}
        {/*{hbspt.forms.create({*/}
        {/*  portalId: "8047098",*/}
        {/*  formId: "630d873c-376a-4c52-ac77-6447c8b198de",*/}
        {/*})}*/}
      </div>
    </>
  );
};

export default LetsConnect;
