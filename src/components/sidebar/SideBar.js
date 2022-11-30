import React, { useState } from "react";
import MenuItem from "./MenuItem";
import "./SideBar.css";
import { MENU_ITEMS_DATA } from "./dat_menu_items";

export default function SideBar() {
  // changing theme
  const [theme, setTheme] = useState(() => "default");

//   function switchTheme() {
//     window.alert("click")
//     let root = document.querySelector(":root");
//     root.style.setProperty("--color-accent", "red");
//     root.style.setProperty("--color-accent-sec", "green");
//     setTheme(() => {
//       return "light";
//     });
//   }

  const menu_items = MENU_ITEMS_DATA.map((item) => {
    return (
      <MenuItem
        pageTo={item.pageTo}
        key={item.id}
        ionicon={item.ionicon}
        title={item.title}
      ></MenuItem>
    );
  });

  function toggleMenu() {
    document.querySelector(".main .sb").classList.toggle("sb-active");
    document.querySelector(".main .sb").classList.toggle("sb-passive");
  }

  return (
    <div className="sb sb-passive">
        {/* <button onClick={switchTheme}>Click me</button> */}
      <div className="sb-header">
        <div className="sb-header-menu-button" onClick={toggleMenu}>
          <ion-icon
            name="chevron-forward-outline"
            id="menu-btn"
            color="white"
          ></ion-icon>
        </div>
      </div>

      <ul className="sb-menu">
        {menu_items}
      </ul>
    </div>
  );
}
