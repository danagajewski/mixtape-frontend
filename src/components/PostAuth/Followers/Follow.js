import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findUser} from "../../actions/user-actions";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import {Outlet} from "react-router-dom";
import WhoToFollowList from "../WhoToFollow/WhoToFollowList";

const Follow = ({follow}) => {
  const dispatch = useDispatch();
  const user = useSelector(
      state => state.users);
  useEffect(() => {
    findUser(dispatch, follow.followed)
  }, []);

  return (
      <div className="card wd-middle">
        <div className="row card-body p-1 m-1 ">
          <a href={'/profile/' + user._id} className='mt-no-underline'>
            <div className="row">

              <div className="col-2 my-1">
                <img src={user.profile_pic ? user.profile_pic
                    : "https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg"}
                     alt={""}
                     className="wd-round-image"/>
              </div>
              <div className="col-10">
                <p className="wd-content-main">{user.username} {user.verified
                    ? <i className="fa-solid fa-check-circle"/> : ""}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
  );
}

export default Follow;