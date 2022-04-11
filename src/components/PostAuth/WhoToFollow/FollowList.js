import follows from "../../data/Follows.json";
import Follow from "./Follow.js";
import React from "react";

const FollowList = () => {
  return (
    <>
      {follows.map(follow => {
          return(
              <Follow follow={follow} key={follow.name}/>
          );
        })}
    </>);
}

export default FollowList;