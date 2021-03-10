import React from "react";
import BrandIcon from "../images/brand-icon.png";

const Home = () => {
  return (
    <>
      <div className="Index__questions">
        <h1 className="Index__questionsH1">
          Why should corporations control our social networks and own our
          personal data?
        </h1>
        <h1 className="Index__questionsH1">
          Why isn’t the social network public infrastructure?
        </h1>
        <h1 className="Index__questionsH1">
          What if we could break free from the surveillance economy?
        </h1>
        <h1 className="Index__questionsH1">
          What if social networks didn’t extract value from people, but
          generated it for them?
        </h1>
        <h1 className="Index__questionsH1">
          Why do our relationships need a gatekeeper?
        </h1>
        <h1 className="Index__questionsH1">
          What if the social graph were as free and open as the Internet?
        </h1>
      </div>
      <div>
        <img className="Index__blackBoxIcon" src={BrandIcon} alt="brand icon" />
        <div className="Index__blackBox">
          <h2 className="Index__blackBoxH2">
            Reclaiming the social graph for the common good is one of the
            greatest opportunities of our time.
          </h2>
        </div>
      </div>
      <div className="Index__bodyText">
        <p>
          Embedded at the core of every social network lies a complex digital
          representation of our online relationships known as the social graph.
          The majority of how we connect, learn, transact, contribute, and
          consume depends upon this little-known conceptual model—which means
          the social graph holds immense power. Yet our largest social networks
          are built on proprietary social graphs, owned by private companies
          who’ve become the de facto gatekeepers of our online interactions. In
          this balkanized system, corporations broker our relationships, exploit
          our personal data for gain, surveil our interactions, and control the
          information we see.
        </p>
        <p>
          The time has come to build new, open source web protocols that are
          driven by transparency, trust, economic inclusion, and societal
          benefit. We believe an essential step in creating an Internet that
          works for everyone is a unified, decentralized, and universally
          accessible social graph protocol. A social graph built as shared
          public infrastructure would give people control over their own data,
          and help them derive direct economic benefit from the value their
          networks generate. With people, not corporations, in control, we can
          reclaim the social graph to serve common good over shareholder
          profit—and unlock the possibility for positive social impact at scale.
        </p>
        <p>
          Our team has begun this work, but it is too ambitious and too urgent
          for any one group to take on alone. It calls for a global collective
          of bold thinkers and visionary builders, bringing together skills from
          many disciplines. We hope you will join us in rewriting the rules—and
          in taking back this essential part of the Internet for all.
        </p>
      </div>
    </>
  );
};

export default Home;
