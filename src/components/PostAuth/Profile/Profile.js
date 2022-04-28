import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router";
import MyProfileStats from "./profile-stats";
import {findUser} from "../../actions/user-actions";
import {useDispatch, useSelector} from "react-redux";

const Profile = () => {
  let navigate = useNavigate();
  const param = useParams();
  const profileId = String(param.pid);
  console.log(profileId)
  const profile = useSelector(
      state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {findUser(dispatch, profileId)}, []);




  // const goBack = () => {
  //   navigate(-1);
  // }

  return (
      <div className="row mt-5">
        <div className="col-2 col-lg-3 col-xl-4"/>
        <div className="col-8 col-lg-6 col-xl-4">

          <div className="container text-center">

            <img className="wd-round-image-prof"
                 src={profile.profile_pic ? profile.profile_pic
                     : "https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg"}
                 alt={""}/>
          </div>
          <div className="container text-center">
            <h3>{profile.username}</h3>
          </div>
          <MyProfileStats ProfileId={profileId}/>
          <div className="container text-center">
            <button type="button"
                    className="btn btn-outline-light mt-3">Back
            </button>
          </div>
        </div>
      </div>
  )
}

export default Profile;