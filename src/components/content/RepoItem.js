import React, { useEffect, useState } from 'react'
import { fetchData, fetchLanguages, fetchMyAss } from '../../fetch/fetch'
import "./RepoItem.css"

export default function RepoItem(props) {
  
  // let [icons_group, setIconsGroup] = useState(_ => [])
  // useEffect(() => {
  //   // console.log(props.data.name)
  //   setIconsGroup(_ => {
  //     let icon_names = []
  //     if (props !== undefined && props !== null && props.data.name !== "") {
  //       fetchLanguages(props.data.name).then(data => {
        
  //       })
  //     }
  //     console.log("hello")
  //   })
  // }, [props.data.name])
  

  // if ()

  return (
    <div className="content-section-repo-item">
        <h3>{props.data.name}</h3>
        <p>{props.data.description && `${props.data.description}`}</p>
        <div className="c"></div>
    </div>
  )
}
