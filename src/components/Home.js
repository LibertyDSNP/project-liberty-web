import React, { useEffect } from "react";
import BrandIcon from "../images/brand-icon.png";
import Slider from "react-slick";

const Home = (props) => {
  useEffect(() => {
    props.onPathChange("home");
  }, [props]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    pauseOnHover: false,
    prevArrow: false,
    nextArrow: false,
  };

  return (
    <div className="Component">
      <Slider {...sliderSettings} className="Home__slider">
        <h2>
          Why should corporations control our social networks and own our
          personal data?
        </h2>
        <h2>Why isn’t the social network public infrastructure?</h2>
        <h2>What if we could break free from the surveillance economy?</h2>
        <h2>
          What if social networks didn't extract value from people, but
          generated it for them?
        </h2>
        <h2>Why do our relationships need a gatekeeper?</h2>
        <h2>What if the social graph were as free and open as the Internet?</h2>
      </Slider>
      <img className="Home__blackBoxIcon" src={BrandIcon} alt="brand icon" />
      <div className="Home__blackBox">
        <h2 className="Home__blackBoxText">
          Reclaiming the social graph for the common good is one of the greatest
          opportunities of our time.
        </h2>
      </div>
      <div className="Home__bodyText">
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
    </div>
  );
};

export default Home;
