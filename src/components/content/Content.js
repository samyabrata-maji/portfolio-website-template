import React from "react";
import { fetchData } from "../../fetch/fetch";
import "./Content.css";
import RepoItem from "./RepoItem";

export default function Content() {
  const content_repo_data = [1, 2, 3, 4, 5];

  // let data = fetchData()
  // console.log(data)

  // const content_repo = fetchData().then(data => {
  //   // console.log(data)
  //   return <button>{data.name}</button>
  // })

  // const content_repo = content_repo_data.map((item) => {
  //   return <RepoItem key={item} id={item}></RepoItem>;
  // });

  function setRepoItems() {
    
  }

  return (
    <div className="content">
      <div className="content-header">
        <h2>My Repositories</h2>
      </div>
      <div className="content-section">
        <div className="content-section-grid">{setRepoItems()}</div>
      </div>
    </div>
  );
}
