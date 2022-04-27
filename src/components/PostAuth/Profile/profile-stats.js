import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllFollowers} from "../../actions/followers-actions";

const MyProfileStats = ({profile}) => {

  const dispatch = useDispatch;
  const follows = useSelector(state => state.followers)
  useEffect(() => {findAllFollowers(dispatch)}, [])
  const followers = follows.filter(follow => follow.followed._id === profile._id).length;
  const followeds = follows.filter(follow => follow.follower._id === profile._id).length;

  return (
      <div className="d-flex justify-content-around mt-2">
        <span><p>Followers</p> {followers}</span>
        <span><p>Follows</p> {followeds}</span>
        <span><i className="fa-solid fa-arrow-up-right-from-square"/></span>
      </div>
  );
}

export default MyProfileStats;