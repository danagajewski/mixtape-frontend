import NavigateItemLg from "./NavigateItemLg.js"
import NavigateItemSm from "./NavigateItemSm.js"
import navs from "./nav.json"
import React from 'react'

const NavigateList = () => {
  return(
    <>
      <div className="list-group d-none d-xl-block">
          {navs.map(nav => {return(<NavigateItemLg nav={nav} key={nav.content}/>);})}
      </div>
      <div className="list-group d-xl-none">
          {navs.map(nav => {return(<NavigateItemSm nav={nav} key={nav.content}/>);})}
      </div>
    </>
  );
}
export default NavigateList;