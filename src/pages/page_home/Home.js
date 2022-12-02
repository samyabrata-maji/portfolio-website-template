import React from "react";
import "./Home.css";
import { EXPERIENCE_DATA } from "./dat_about_me";

function ExpText() {
  return (
    <div className="sec-exp-text-con">
      <h2>Hello</h2>
      <p>My name is Samyabrata</p>
    </div>
  );
}

function ExpDeco(props) {
  switch (props.position) {
    case "start":
      return (
        <div className="deco deco-start">
          <div></div>
          <span></span>
        </div>
      );
    case "end":
      return (
        <div className="deco deco-end">
          <div></div>
          <span></span>
        </div>
      );
    default:
      return (
        <div className="deco deco-default">
          <div></div>
          <span></span>
        </div>
      );
  }
}

function ExpItem(props) {
  return (
    <div className="con-exp-item">
      <ExpDeco position={props.position}></ExpDeco>
      <ExpText></ExpText>
    </div>
  );
}

export default function ContentHome() {
  const exp_dat = EXPERIENCE_DATA.map((_, index) => {
    return (
      <ExpItem
        key={index}
        position={
          index === 0
            ? "start"
            : index === EXPERIENCE_DATA.length - 1
            ? "end"
            : "default"
        }
      />
    );
  });

  return (
    <div className="ct-home">
      <div className="sec-pf-head">
        <h2>
          Hello,
          <br /> I'm Samyabrata Maji
        </h2>
        <img alt="profile pic" src={`${process.env.PUBLIC_URL}/assets/img/sammaji.jpg`} height="300" />
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
