import React, { useEffect, useState } from "react";
import "./Home.css";
import { USERNAME, JOURNEY_DATA } from "../../user";
import JourneyList from "../../components/journey_component/JourneyList";
import Dialog from "../../components/dialog/Dialog";

export default function ContentHome() {

  useEffect(_ => {
    window.alert('This website is still in development')
  })

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
        to={item.to}
        from={item.from}
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
          <li>Learner</li>
          <li>Open Source Enthusiast</li>
          <li>Web Developer</li>
          <li>Interested in Dev Ops</li>
        </ul>
      </div>
    </div>
  );
}
