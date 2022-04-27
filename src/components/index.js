import {Outlet} from "react-router-dom";
import React from "react";
import NavigationSidebar from "./PostAuth/NavigationSidebar/NavigationSidebar";
import './PostAuth/mixtape-home.css'
import WhoToFollowList from "./PostAuth/WhoToFollow/WhoToFollowList";
import whoReducer from "./PostAuth/reducers/user-reducer";
import notesReducer from "./PostAuth/reducers/notes-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import FollowersReducer from "./PostAuth/reducers/followers-reducer";

const reducers = combineReducers(
    {notes: notesReducer, users: whoReducer, followers: FollowersReducer});

const store = createStore(reducers);

const Index = () => {
  return (
      <Provider store={store}>
        <Outlet/>
      </Provider>
  );
};

export default Index;
