import React from "react";

function Text(props) {
  return (
    <div className="sec-exp-text-con">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function Deco(props) {
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

export default function JourneyList(props) {
  
  return (
    <>
      <div className="con-exp-item">
        <Deco position={props.position}></Deco>
        <Text title={props.title} description={props.description}></Text>
      </div>
    </>
  );
}
