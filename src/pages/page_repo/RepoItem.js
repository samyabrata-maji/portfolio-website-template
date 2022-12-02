import React, { useEffect, useState } from "react";
import { GLOBAL_USERNAME } from "../../fetch/fetch";

export default function RepoItem(props) {
  const [icon_group, setIconsGroup] = useState([]);
  useEffect(() => {
    let repo_name = props.data.name;
    let username = GLOBAL_USERNAME
    let lang_url = `https://api.github.com/repos/${username}/${repo_name}/languages`;

    fetch(lang_url)
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("error");
      })
      .then((data) => {
        data = Object.keys(data);
        setIconsGroup((_) => {
          let id = 0;
          return data.map((item) => {
            item = item.toLowerCase();
            switch (item) {
              case "html":
                item = "html5";
                break;
              case "css":
                item = "css3";
                break;
              case "jupyter notebook":
                item = "python";
                break;
              default:
                break;
            }

            // let default_color = "#868686"
            // fetch("../../utility/color.json").then(res => {
            //   if (res.ok) return res.json().icon_color
            //   else throw new Error("erere")
            // }).then(data => {
            //   default_color = data[Math.floor(Math.random()*6)]
            // })

            return (
              <box-icon key={id++} color="#013220" type="logo" size="sm" name={item}></box-icon>
            );
          });
        });
        // console.log(data)
      });
  }, [props, props.data.name]);

  return (
    <div className="ct-sec-repo-item">
      <h3><a href={props.data.url}>{props.data.name}</a></h3>
      <p>{props.data.description && `${props.data.description}`}</p>
      <div className="ct-sec-repo-icons">
        <div className="repo-icons">{icon_group}</div>
        <div className="repo-stars">
          <ion-icon name="star-outline"></ion-icon>
          <p>{props.data.stars}</p>
        </div>
        <div className="repo-forks">
          <ion-icon name="git-network-outline"></ion-icon>
          <p>{props.data.forks}</p>
        </div>
      </div>
    </div>
  );
}
