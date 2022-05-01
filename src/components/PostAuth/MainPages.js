import {Outlet} from "react-router-dom";
import React from "react";
import NavigationSidebar from "./NavigationSidebar/NavigationSidebar";
import './mixtape-home.css'
import WhoToFollowList from "./WhoToFollow/WhoToFollowList";
import TopCharts from "./TopCharts/TopCharts";

const MainPage = () => {
  return (
        <div className="row mt-2">
          <div className="col-2 col-lg-1 col-xl-2">
            <NavigationSidebar/>
          </div>
          <div className="col-10 col-lg-7 col-xl-6">
            <Outlet/>
          </div>
          <div className="d-none d-lg-block col-lg-4 col-xl-4">
            <TopCharts/>
          </div>
        </div>
  );
};

export default MainPage;
