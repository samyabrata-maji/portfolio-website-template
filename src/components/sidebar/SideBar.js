import React from 'react'
import MenuItem from './MenuItem'
import './SideBar.css'

export default function SideBar() {

    const menu_items_data = [
        {
            id: 0,
            title: "Home",
            ionicon: "home-outline",
            boxicon: "",
            color: "white",
            classNames: [],
        }, {
            id: 1,
            title: "Repo",
            ionicon: "git-branch-outline",
            boxicon: "",
            color: "white",
            classNames: [],
        }, {
            id: 2,
            title: "Tech",
            ionicon: "build-outline",
            boxicon: "",
            color: "white",
            classNames: [],
        }, {
            id: 3,
            title: "Contact",
            ionicon: "help-outline",
            boxicon: "",
            color: "white",
            classNames: [],
        }
    ]

    const menu_items = menu_items_data.map((item) => {
        return <MenuItem
            key = {item.id}
            ionicon = {item.ionicon}
            title={item.title}></MenuItem>
    })

    function toggleMenu() {
        document.querySelector('.main .sb').classList.toggle('sb-active')
    }

  return (
    <div className="sb">
        <div className="sb-header">
            <div className="sb-header-menu-button" onClick={toggleMenu}>
                <ion-icon name="chevron-forward-outline" id="menu-btn" color="white"></ion-icon>
            </div>
        </div>
        
        <ul className="sb-menu">
            {menu_items}
        </ul>
    </div>
  )
}
