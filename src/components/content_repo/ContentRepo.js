import React, { useEffect, useState } from "react";
import { fetchData } from "../../fetch/fetch";

// do not change the order
import "./ContentRepo.css";
import RepoItem from "./RepoItem";

export default function Content() {
  const [repo_items, setRepoItems] = useState((_) => []);

  useEffect(() => {
    fetchData().then((data) => {
      setRepoItems(
        data.map((item) => {
          return <RepoItem key={item.id} data={item}></RepoItem>;
        })
      );
    });
  }, []);

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
