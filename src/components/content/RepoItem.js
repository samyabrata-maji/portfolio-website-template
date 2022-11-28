import React, { useEffect, useState } from 'react'
import { fetchData, fetchLanguages, fetchMyAss } from '../../fetch/fetch'
import "./RepoItem.css"

export default function RepoItem(props) {
  
  return (
    <div className="content-section-repo-item">
        <h3>{props.data.name}</h3>
        <p>{props.data.description && `${props.data.description}`}</p>
        <div className="c"></div>
    </div>
  )
}
