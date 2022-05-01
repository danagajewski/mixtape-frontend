import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllFollowers} from "../../actions/followers-actions";
import FollowList from "./FollowList";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";


const Followers = () => {
  const userId = useParams()
  const follows = useSelector(
      state => state.followers);
  const dispatch = useDispatch();
  useEffect(() => {findAllFollowers(dispatch, userId.pid)}, []);

  const followeds = follows.filter(follow => follow.followed === userId.pid);
  const length = followeds.length;

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  return(
      <div className="container text-center">
        <h3 className='mt-3'>Followers</h3>
        {length === 0 ? <h4 className='mt-2'>Nobody follows you yet!</h4> : <FollowList followeds={followeds}/>}

        <div className="container text-center mt-2">
          <button type="button" onClick={() => goBack()}
                  className="btn btn-outline-light mt-3">Back
          </button>
        </div>
      </div>
  );
}

export default Followers;