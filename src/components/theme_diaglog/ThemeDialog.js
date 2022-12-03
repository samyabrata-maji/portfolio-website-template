import React, { useEffect, useState } from "react";
import { THEME } from "../../user";
import "./ThemeDialog.css";

export default function ThemeDialog() {
  const [themeIndex, setTheme] = useState(0);

  function toggleThemeDialog() {
    document.querySelector(".diag").classList.toggle("diag-hide");
  }

  const switchTheme = (event) => {
    console.log(event.target.value);
    setTheme((_) => event.target.value);
  };

  useEffect(
    (_) => {
      // change theme
      console.log("change");
      const root = document.querySelector(":root");

      /** order of values
       * values: [pri, priLight, sec, secLight, accent, accentLight, bg, ]
       */
      root.style.setProperty("--col-pri", THEME[themeIndex].value[0]);
      root.style.setProperty("--col-pri-light", THEME[themeIndex].value[1]);
      root.style.setProperty("--col-sec", THEME[themeIndex].value[2]);
      root.style.setProperty("--col-sec-light", THEME[themeIndex].value[3]);
      root.style.setProperty("--col-accent", THEME[themeIndex].value[4]);
      root.style.setProperty("--col-accent-light", THEME[themeIndex].value[5]);
      root.style.setProperty("--col-bg", THEME[themeIndex].value[6]);
    },
    [themeIndex]
  );

  const theme_items = THEME.map((item, index) => {
    return (
      <li key={index}>
        <button id={item.id} value={item.index} onClick={switchTheme}>
          {item.title}
        </button>
      </li>
    );
  });

  return (
    <div className="diag">
      <button id="btn-close-diag" onClick={toggleThemeDialog}>
        x
      </button>
      <h2 className="diag-title">Switch Themes</h2>
      <ul>{theme_items}</ul>
    </div>
  );
}
