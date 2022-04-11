import React from 'react'
import {Link} from 'react-router-dom'

const NavigateItemSm = ({
  nav = {
    "icon": "fa-brands fa-twitter",
    "content": "",
    "active": true
  }
}) => {
  return (
      <Link to={nav.link}>
        <button className="list-group-item list-group-item-action">
          <i className={`${nav.icon}`}/>
        </button>
      </Link>
  );
}
export default NavigateItemSm;