import React from "react";

const NavBarTab = ({
  tab = {
    "content": "For You",
    "active" : true
  }
}) => {
  let active = tab.active ? "nav-link active" : "nav-link";
  return(
  <li className="nav-item">
    <a className= {`${active}`} href="/"> {tab.content} </a>
  </li>
  
  );
}

export default NavBarTab;