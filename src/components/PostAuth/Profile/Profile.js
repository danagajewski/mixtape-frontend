import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import MyProfileStats from "./profile-stats";
import {findUser} from "../../actions/user-actions";
import {useDispatch, useSelector} from "react-redux";
import {useProfile} from "../../Contexts/profile-context";
import FollowButton from "./FollowButton";
import '../mixtape-home.css'
import ProfileNotes from "./ProfileNotes";

const Profile = () => {
  const {profile} = useProfile();
  let navigate = useNavigate();
  const param = useParams();
  const userId = String(param.pid);
  const user = useSelector(
      state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {findUser(dispatch, userId)}, []);






  const goBack = () => {
    navigate(-1);
  }

  return (
      <div className="row mt-5">
        <div className="col-2 col-lg-3 col-xl-4"/>
        <div className="col-8 col-lg-6 col-xl-4">

          <div className="container text-center">

            <img className="wd-round-image-prof"
                 src={user.profile_pic ? user.profile_pic
                     : "https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg"}
                 alt={""}/>
          </div>
          <div className="container text-center">
            <h3>{user.username}</h3>
          </div>
          <MyProfileStats ProfileId={userId}/>
          {profile ? <FollowButton profile={profile} userId={userId}/> : <></>}
          <ProfileNotes profileId={userId}/>
          <div className="container text-center mt-2">
            <button type="button" onClick={() => goBack()}
                    className="btn btn-outline-light mt-3">Back
            </button>
          </div>
        </div>
      </div>
  )
}

export default Profile;