import NavigateList from "./NavigateList.js";
import React from 'react';

const NavigationSidebar = (
    {
      active = 'explore'
    }) => {
  return (
      <>
        {NavigateList()}
      </>
    );
}
export default NavigationSidebar;
