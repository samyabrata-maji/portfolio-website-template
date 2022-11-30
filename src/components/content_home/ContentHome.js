import React from "react";

export default function ContentHome() {
  const pfp_sammaji = require("../../assets/img/sammaji.jpg")
  return (
    <div className="con-home">
      <div className="con-head-pfp">
        <div>
          <h2>
            Hello,
            <br /> I'm Samyabrata Maji
          </h2>
          <img alt="profile pic" src={pfp_sammaji} height="300" />
        </div>
      </div>
      <div></div>
    </div>
  );
}
