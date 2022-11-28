import React, { useEffect, useState } from "react";
import { fetchData } from "../../fetch/fetch";

// do not change the order
import "./Content.css";
import "./RepoItem.css"
import RepoItem from "./RepoItem";

export default function Content() {
  
  let [repo_items, setRepoItems] = useState([])

  let tst_p = {
    name: "Project-project",
    language: ["java", "css", "python"],
    description: "We are a focused team of skilled designers, thinkers, researchers and artists. We unite our diverse interests and experiences to build brands with depth."
  }
  let repo_test_item = (
    <RepoItem data={tst_p}></RepoItem>
  )

  useEffect(() => {
    fetchData().then(data => {
      // console.log(data[0])
      setRepoItems(data.map(item => {
        return <RepoItem key={item.id} data={item}></RepoItem>
      }))
    })
  }, [])
  
  return (
    <div className="content">
      <div className="content-header">
        <h2>My Repositories</h2>
      </div>
      <div className="content-section">
        <div className="content-section-grid">{repo_items}</div>
      </div>
    </div>
  );
}
