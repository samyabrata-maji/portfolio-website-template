import React from "react";
import './ContentHome.css'

function ExpItem(props) {
  switch (props.position) {
    case "start":
      return <h1>start</h1>;
    case "end":
      return <h1>end</h1>;
    default:
      return <h1>default</h1>;
  }
}

export default function ContentHome() {
  const pfp_sammaji = require("../../assets/img/sammaji.jpg");
  return (
    <div className="ct-home">
      <div className="ct-con-sec-pf">
        <div className="head-pf">
          <h2>
            Hello,
            <br /> I'm Samyabrata Maji
          </h2>
          <img alt="profile pic" src={pfp_sammaji} height="300" />
        </div>
        <div className="sec-pf-intro">
          <h2>About Me</h2>
          <ul>
            <li>Web Developer</li>
            <li>Android Developer</li>
            <li>Loves Tech</li>
          </ul>
        </div>
      </div>
      <div className="ct-con-sec-exp">
        <ExpItem position="start"></ExpItem>
        <ExpItem></ExpItem>
        <ExpItem></ExpItem>
        <ExpItem></ExpItem>
        <ExpItem position="end"></ExpItem>
      </div>
    </div>
  );
}
