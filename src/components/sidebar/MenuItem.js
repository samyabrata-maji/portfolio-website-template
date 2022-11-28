import React from 'react'
import './SideBar.css'

export default function MenuItem(props) {
  return (
    <li>
        <a href="/">
            <div className="sb-menu-box-icon"><ion-icon name={props.ionicon}  color="solid"></ion-icon></div>
            <span className="sb-menu-items">{props.title}</span>
        </a>
            <span className="sb-menu-tooltip">{props.title}</span>
    </li>
  )
}
