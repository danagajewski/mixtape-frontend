import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllFollowers} from "../../actions/followers-actions";

const MyProfileStats = ({ProfileId}) => {
  const follows = useSelector(
      state => state.followers);
  const dispatch = useDispatch();
  useEffect(() => {findAllFollowers(dispatch, ProfileId)}, []);


  const followers = follows.filter(follow => follow.followed === ProfileId).length;
  const followeds = follows.filter(follow => follow.follower === ProfileId).length;


  return (
      <div className="d-flex justify-content-center mt-2">
        <p className="mx-1">Followers <span>{followers}</span></p>
        <p className="mx-1">Following <span>{followeds}</span></p>
      </div>
  );
}

export default MyProfileStats;