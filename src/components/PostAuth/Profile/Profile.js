import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router";
import {useProfile} from "../../Contexts/profile-context";
import axios from "axios";
import MyProfileStats from "./profile-stats";

const api = axios.create({
  withCredentials: true
});

const Profile = () => {
  let navigate = useNavigate();
  const {profile, signout, update} = useProfile()


  const logout = async () => {
    try {
      await signout()
    } catch (e) {

    }
    // navigate('/login') todo: this needs to be put back in
  }
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCRef = useRef();
  const profilePicRef = useRef();

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

  const handleSubmit = () => {
    if(password === passwordC){
      updatedUser.username = usernameRef.current.value;
      updatedUser.password = passwordRef.current.value;
      updatedUser.email = emailRef.current.value;
      updatedUser.profile_pic = profilePicRef.current.value;
      update(updatedUser);
      console.log(updatedUser);
    }
  }
  const [password, setPassword] = useState(updatedUser.password);
  const [passwordC, setPasswordC] = useState(updatedUser.password);

  return (
      <>
        <div className={"container text-center mt-4"}>
          <h3>
            {`${phrase[index].substring(0, subIndex)}`}
          </h3>
        </div>
        <div className="row mt-2">
          <div className="col-2 col-lg-3 col-xl-4"/>
          <div className="col-8 col-lg-6 col-xl-4">

            <div className="container text-center">

              <img className="wd-round-image-prof"
                   src={updatedUser.profile_pic ? updatedUser.profile_pic
                       : "https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg"}
              alt={""}/>
            </div>
            <MyProfileStats profile={profile}/>
            <div className="form-group mt-1">
              <label className="mx-2" htmlFor="profile">Change Profile
                Pic</label>
              <input type="text" className="form-control"
                     id="profile" ref={profilePicRef}
                     placeholder="link to image (we can't afford blobs)"
                     defaultValue={updatedUser.profile_pic}/>
            </div>
            <div className="form-group mt-1">
              <label className="mx-2" htmlFor="username">Username</label>
              <input type="text" className="form-control"
                     id="username" ref={usernameRef}
                     defaultValue={updatedUser.username}/>
            </div>
            <div className="form-group mt-1">
              <label className="mx-2" htmlFor="email">Email</label>
              <input type="email" className="form-control"
                     id="email" ref={emailRef}
                     defaultValue={updatedUser.email}/>
            </div>
            <div className="form-group mt-1">
              <label className="mx-2" htmlFor="password">New Password</label>
              <input type="password" className="form-control"
                     id="password" ref={passwordRef}
                     onChange={event => setPassword(event.target.value)}
                     defaultValue={updatedUser.password}/>
            </div>
            {password === passwordC ?
                <div className="form-group mt-1">
                  <label className="mx-2" htmlFor="passwordC">Confirm New
                    Password</label>
                  <input type="password" className="form-control"
                         id="passwordC" ref={passwordCRef}
                         onChange={event => setPasswordC(event.target.value)}
                         defaultValue={updatedUser.password}/>
                </div> :
                <div className="form-group has-danger mt-1">
                  <label className="mx-2" htmlFor="passwordC">Confirm New
                    Password</label>
                  <input type="password" className="form-control is-invalid"
                         id="passwordC" ref={passwordCRef}
                         onChange={event => setPasswordC(event.target.value)}
                         defaultValue={updatedUser.password}/>
                  <div className="invalid-feedback">Must match first password.
                  </div>
                </div>
            }
          </div>

          <div className="container mt-1 d-flex justify-content-center">
            <a href="/mix">
              <button type="button" onClick={() => handleSubmit()}
                      className="btn btn-outline-light mt-1">Save Changes
              </button>
            </a>
          </div>
          <div className="container mt-1 d-flex justify-content-center">
            <a href="/mix">
              <button type="button" className="btn btn-outline-light">Discard
              </button>
            </a>
          </div>
          <div className="container mt-1 d-flex justify-content-center">
            {/*todo: the a tag needs to be replaced*/}
            <a href={"/login"}>
              <button type="button" onClick={logout}
                      className="btn btn-outline-danger mt-1">Log Out
              </button>
            </a>
          </div>
          <div className="col-2 col-lg-3 col-xl-4"/>
        </div>
      </>
  )
}

export default Profile;