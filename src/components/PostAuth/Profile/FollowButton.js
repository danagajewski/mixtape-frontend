import React, {useEffect} from "react";
import {findAllFollowers, unfollow, follow} from "../../actions/followers-actions";
import {useDispatch, useSelector} from "react-redux";

const FollowButton = ({profile, userId}) => {
  let text = 'Follow'
  const follows = useSelector(
      state => state.followers);
  const dispatch = useDispatch();
  useEffect(() => {findAllFollowers(dispatch, profile._id)}, []);
  const followObj = follows.find(follow => follow.followed === userId && follow.follower === profile._id)
  const followsp = (followObj !== undefined)
  if(followsp){
    text = 'Unfollow'
  }
  const toggleFollow = () => {
    if (followsp) {
      unfollow(dispatch, profile._id, userId)
    }
    else{
      follow(dispatch, profile._id, userId)
    }
  }

  return(
      <div className="container text-center">
        <button type="button" onClick={() => {toggleFollow()}} className="btn btn-outline-light mix-follow">{text}</button>
      </div>
  )
}

export default FollowButton;