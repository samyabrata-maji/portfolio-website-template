import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

export default function MenuItem(props) {
  return (
    <li>
      <Link to={props.pageTo}>
        <div className="sb-menu-box-icon">
          <ion-icon name={props.ionicon} color="solid"></ion-icon>
        </div>
        <span className="sb-menu-items">{props.title}</span>
      </Link>
      <span className="sb-menu-tooltip">{props.title}</span>
    </li>
  );
}
