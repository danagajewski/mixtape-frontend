import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllFollowers} from "../../actions/followers-actions";

const MyProfileStats = ({ProfileId}) => {
  const follows = useSelector(
      state => state.followers);
  const dispatch = useDispatch();
  useEffect(() => {findAllFollowers(dispatch)}, []);


  const followers = follows.filter(follow => follow.followed === ProfileId).length;
  const followeds = follows.filter(follow => follow.follower === ProfileId).length;
  console.log(follows)

  return (
      <div className="d-flex justify-content-center mt-2">
        <a href={`/profile/followers/${ProfileId}`} className='mt-no-underline'><p className="mx-1">Followers <span>{followers}</span></p></a>
        <a href={`/profile/following/${ProfileId}`} className='mt-no-underline'><p className="mx-1">Following <span>{followeds}</span></p></a>
      </div>
  );
}

export default MyProfileStats;