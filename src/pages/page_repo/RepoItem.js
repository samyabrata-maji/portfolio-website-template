import React, { useEffect, useState } from "react";
import { settings } from "../../user";

export default function RepoItem(props) {
  // const ct_stars =

  return (
    <div className="ct-sec-repo-item">
      <h3>
        <a href={props.data.url}>{props.data.name}</a>
      </h3>
      <p>{props.data.description && `${props.data.description}`}</p>
      <div className="ct-sec-repo-icons">
        <div className="repo-stars">
          {settings.showStarsCount ? (
            <>
              <ion-icon name="star-outline"></ion-icon>
              <p>{props.data.stars}</p>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="repo-forks">
          {settings.showForksCount ? (
            <>
              <ion-icon name="git-network-outline"></ion-icon>
              <p>{props.data.forks}</p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
