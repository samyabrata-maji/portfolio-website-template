import React, { useEffect, useState } from "react";
import { fetchData, fetchLanguages, fetchMyAss } from "../../fetch/fetch";
import "./RepoItem.css";

export default function RepoItem(props) {
  const [icon_group, setIconsGroup] = useState([]);
  useEffect(() => {
    let repo_name = props.data.name;
    let username = "samyabrata-maji";
    let lang_url = `https://api.github.com/repos/${username}/${repo_name}/languages`;
    
    fetch(lang_url).then(res => {
      if (res.ok) return res.json()
      else throw new Error("error")
    }).then(data => {
      data = Object.keys(data)
      setIconsGroup(_ => {
        let id = 0
        return data.map(item => {
          item = item.toLowerCase()
          switch(item) {
            case 'html':
              item = 'html5'
              break
            case 'css':
              item = 'css3'
              break
            case 'jupyter notebook':
              item = 'python'
              break
            default:
              break 
          }
          return <box-icon key={id++} type='logo' name={item}></box-icon>
        })
      })
      // console.log(data)
    })


  }, [props, props.data.name]);

  return (
    <div className="content-section-repo-item">
      <h3>{props.data.name}</h3>
      <p>{props.data.description && `${props.data.description}`}</p>
      <div className="cpc">{icon_group}</div>
    </div>
  );
}
