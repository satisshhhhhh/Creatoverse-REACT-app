import React from 'react'
import { Link } from 'react-router-dom'
const Menu = [
  {
    title: "Marketplace",
    link: "Marketplace"
  },
  {
    title: "Collections",
    link: "Collections"
  },
  {
    title: "Profile",
    link: "Profile"
  },
  {
    title: "Creators",
    link: "Creators"
  }
]
function MobileMenu() {
  return (
    <div className="header__mobile js-header-mobile">
      <div className="header__mobile__menu space-y-40">
        <ul className="d-flex space-y-20">
          {Menu.map((val, i) => (
            <li key={i}> <Link className="color_black" to={val.link}> {val.title}</Link> </li>
          ))}
        </ul>
        <div className="space-y-20">
          <div className="header__search in_mobile w-full">
            <input type="text" placeholder="Search" />
            <button className="header__result">
              <i className="ri-search-line" />
            </button>
          </div>
          <Link className="btn btn-grad btn-sm" to="connect-wallet">Connect
            wallet</Link>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
