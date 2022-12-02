import React from "react";
import "./Home.css";
import { USERNAME, JOURNEY_DATA } from "../../user";
import JourneyList from "../../components/journey_component/JourneyList";

export default function ContentHome() {
  const exp_dat = JOURNEY_DATA.map((item, index) => {

    return (
      <JourneyList
        key={index}
        position={
          index === 0
            ? "start"
            : index === JOURNEY_DATA.length - 1
            ? "end"
            : "default"
        }
        title={item.title}
        description={item.description}
      ></JourneyList>
    );
  });

  return (
    <div className="ct-home">
      <div className="sec-pf-head">
        <h2>
          <span>Hello,</span>
          <br /> I'm {USERNAME.name}
        </h2>
        <img
          alt="profile pic"
          src={`${process.env.PUBLIC_URL}/assets/img/sammaji.jpg`}
          height="300"
        />
      </div>

      <div className="sec-pf-exp">{exp_dat}</div>

      <div className="sec-pf-intro">
        <h2>About Me</h2>
        <ul>
          <li>Web Developer</li>
          <li>Android Developer</li>
          <li>Loves Tech</li>
        </ul>
      </div>
    </div>
  );
}
