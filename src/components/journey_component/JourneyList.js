import React from "react";

function Text(props) {
  return (
    <div className="sec-exp-text-con">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {/* <p>{`Date: ${props.from} - ${props.to}`}</p> */}
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
  
  let sub_item = props.sub_item;
  if (sub_item) {
    sub_item = sub_item.map((item, index) => {
      return (
        <JourneyList
          key={index}
          title={item.title}
          to={item.to}
          from={item.from}
          description={item.description}
        />
      );
    });
  }

  return (
    <>
      <div className="con-exp-item">
        <Deco position={props.position}></Deco>
        <Text title={props.title} description={props.description}></Text>
      </div>
      <div>{sub_item}</div>
    </>
  );
}
