import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {useProfile} from "../../Contexts/profile-context";
import axios from "axios";

const api = axios.create({
  withCredentials: true
});

const Profile = () => {
  
  const navigate = useNavigate()
  const {profile, signout, update} = useProfile()

  const logout = async () => {
    try {
      await signout()
    } catch (e) {

    }
    navigate('/login')
  }

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCRef = useRef();
  const profilePicRef = useRef();


  let updatedUser = {
    "username": profile.username,
    "password": profile.password,
    "email": profile.email,
    "token": profile.token,
    "refresh_token": profile.refresh_token,
    "profile_pic": profile.profile_pic,
  }

  const handleSubmit = () => {
    updatedUser.username = usernameRef.current.value;
    updatedUser.email = emailRef.current.value;
    updatedUser.profile_pic = profilePicRef.current.value;
    update(updatedUser);
  }

  return (
      <div className="row mt-4">
        <div className="col-2 col-lg-3 col-xl-4"/>
        <div className="col-8 col-lg-6 col-xl-4">
          <div className="container text-center wd-round-image">
            <img src="https://s3.amazonaws.com/images.berecruited.com/photos/athletes/dashboard/3817216.png?1494963118"/>
          </div>
          <div className="form-group mt-1">
            <label className="mx-2" htmlFor="profile">Change Profile Pic</label>
            <input type="text" className="form-control"
                   id="profile" ref={profilePicRef} placeholder="link to website"/>
          </div>
          <div className="form-group mt-1">
            <label className="mx-2" htmlFor="username">Username</label>
            <input type="text" className="form-control"
                   id="username" ref={usernameRef} value={updatedUser.username}/>
          </div>
          <div className="form-group mt-1">
            <label className="mx-2" htmlFor="email">Email</label>
            <input type="email" className="form-control"
                   id="email" ref={emailRef} value={updatedUser.email}/>
          </div>
          <div className="form-group mt-1">
            <label className="mx-2" htmlFor="password">New Password</label>
            <input type="password" className="form-control"
                   id="password" ref={passwordRef}
                   value={updatedUser.password}/>
          </div>
          {passwordRef === passwordCRef ?
              <div className="form-group mt-1">
                <label className="mx-2" htmlFor="passwordC">Confirm New
                  Password</label>
                <input type="passwordC" className="form-control"
                       id="passwordC" ref={passwordCRef}
                       value={updatedUser.password}/>
              </div> :
              <div className="form-group has-danger mt-1">
                <label className="mx-2" htmlFor="passwordC">Confirm New
                  Password</label>
                <input type="passwordC" className="form-control is-invalid"
                       id="passwordC" ref={passwordCRef}
                       value={updatedUser.password}/>
                <div className="invalid-feedback">Must match first password.
                </div>
              </div>
          }
        </div>

        <div className="container mt-1 d-flex justify-content-center">
          <a href="/mix">
            <button type="button" onClick={() => handleSubmit()} className="btn btn-outline-light">Save Changes</button>
          </a>
        </div>
        <div className="container mt-1 d-flex justify-content-center">
          <a href="/mix">
            <button type="button" className="btn btn-outline-light">Discard</button>
          </a>
        </div>
        <div className="container mt-1 d-flex justify-content-center">
          <a href="/mix">
            <button type="button" onClick={logout} className="btn btn-outline-light">Log Out</button>
          </a>
        </div>
        <div className="col-2 col-lg-3 col-xl-4"/>
      </div>
  )
}

export default Profile;