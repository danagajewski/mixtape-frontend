import React from "react";
import {Link} from "react-router-dom"

const NavigateItemLg = ({
  nav = {
    icon: "fa-brands fa-twitter",
    content: "",
    active: true
  }
}) => {
  return (
      <Link to={nav.link}>
        <button className={`list-group-item ${nav.active
            ? ' list-group-item-action active' : ' list-group-item-action'}`}>
          <i className={`${nav.icon}`}/> {nav.content}
        </button>
      </Link>
  );
}
export default NavigateItemLg;