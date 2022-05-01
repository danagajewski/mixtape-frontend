import {Outlet} from "react-router-dom";
import React from "react";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import '../mixtape-home.css'

const Profiles = () => {
  return (
      <div className="row mt-2">
        <div className="col-2 col-lg-2 col-xl-2">
          <NavigationSidebar/>
        </div>
        <div className="col-10 col-lg-10 col-xl-10">
          <Outlet/>
        </div>
      </div>
  );
};

export default Profiles;
