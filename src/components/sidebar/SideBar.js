import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import "./SideBar.css";
import { MENU_DATA } from "../../user";

export default function SideBar() {
  useEffect(() => {
    const btnToggleTheme = document.getElementById("btn-toggle-theme");
    btnToggleTheme.onclick = () => {
      // dialog to switch themes
      // document.querySelector(':root').style.setProperty('--col-accent', '#fffff')
    };
  }, []);

  const menu_items = MENU_DATA.map((item, index) => {
    return (
      <MenuItem
        id={item.id}
        pageTo={item.pageTo}
        key={index}
        ionicon={item.ionicon}
        title={item.title}
      ></MenuItem>
    );
  });

  function toggleDarkTheme() {
    // document.querySelector(':root').style.setProperty()
  }

  function toggleMenu() {
    document.querySelector(".main .sb").classList.toggle("sb-active");
    document.querySelector(".main .sb").classList.toggle("sb-passive");
  }

  return (
    <div className="sb sb-passive">
      <div className="sb-head">
        <div className="sb-head-menu-btn" onClick={toggleMenu}>
          <ion-icon
            name="chevron-forward-outline"
            id="menu-btn"
            color="white"
          ></ion-icon>
        </div>
      </div>

      <ul className="sb-menu">{menu_items}</ul>
    </div>
  );
}
