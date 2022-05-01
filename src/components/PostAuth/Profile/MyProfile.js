import React, {useEffect, useRef, useState} from "react";
import {useProfile} from "../../Contexts/profile-context";
import MyProfileStats from "./profile-stats";
import EditProfile from "./EditProfile";
import '../mixtape-home.css'
import ProfileNotes from "./ProfileNotes";

const MyProfile = () => {

  const {profile} = useProfile();

  const [editProfile, setEditProfile]  = useState(false);

  const toggleEditProfile = () => {
    setEditProfile(!editProfile);
  }



  let updatedUser = {
    "_id": profile._id,
    "username": profile.username,
    "password": profile.password,
    "email": profile.email,
    "token": profile.token,
    "refresh_token": profile.refresh_token,
    "profile_pic": profile.profile_pic,
  }
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const phrase = ['Hello, ' + updatedUser.username]

  useEffect(() => {
    if (index === phrase.length - 1 && subIndex === phrase[index].length) {
      return;
    }

    if (subIndex === phrase[index].length + 1 &&
        index !== phrase.length - 1 &&
        !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
      <>
        <div className={"container text-center mt-4"}>
          <h3>
            {`${phrase[index].substring(0, subIndex)}`}
          </h3>
        </div>
        <div className="row mt-2">
          <div className="col-1 col-lg-2 col-xl-3"/>
          <div className="col-10 col-lg-8 col-xl-6">

            <div className="container text-center">

              <img className="wd-round-image-prof"
                   src={updatedUser.profile_pic ? updatedUser.profile_pic
                       : "https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg"}
                   alt={""}/>
            </div>

            <MyProfileStats ProfileId={profile._id}/>
            <div className="container mt-1 mb-2 d-flex justify-content-center">
              <button type="button" onClick={() => toggleEditProfile()}
                      className="btn btn-outline-light mix-follow">{editProfile?'Done':'Edit Profile'}</button>
            </div>
            {editProfile?<EditProfile profile={profile}/> : <></>}
            <ProfileNotes profileId={profile._id}/>
          </div>

          <div className="col-1 col-lg-2 col-xl-3"/>
        </div>
      </>
  )
}

export default MyProfile;