import React, { useEffect, useState } from 'react'
import { fetchLanguages } from '../../fetch/fetch'
import "./RepoItem.css"

export default function RepoItem(props) {
  
  // let icons_group = []
  // if (props.data.language && props.data.language!==undefined) {
  //   if ( props.data.language instanceof String) {
  //     icons_group = [props.data.language]
  //   }
  //   icons_group = props.data.language.map(item => {
  //     return <box-icon type='logo' name={item}></box-icon>
  //   })
  // }

  let [icons_group, setIconsGroup] = useState(_ => [])
  useEffect(() => {
    // console.log(props.data.name)
    if (props.data.name !== undefined) {
      fetchLanguages(props.data.name).then(data => {
        setIconsGroup(data.map(item => {
          return <box-icon type='logo' name={item}></box-icon>
        }))
      })
    }
  }, [props.data.name])
  

  // if ()

  return (
    <div className="content-section-repo-item">
        <h3>{props.data.name}</h3>
        <p>{props.data.description && `${props.data.description}`}</p>
        <div className="c">{icons_group}</div>
    </div>
  )
}
