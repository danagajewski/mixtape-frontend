import NavigateList from "./NavigateList.js";
import React from 'react';

const NavigationSidebar = (
    {
      active = 'explore'
    }) => {
  return (
      <>
        {NavigateList()}
        <div className="d-grid mt-2">
          <a href="tweet.html"
            className="btn btn-primary btn-block rounded-pill">Tweet</a>
        </div>
      </>
    );
}
export default NavigationSidebar;
