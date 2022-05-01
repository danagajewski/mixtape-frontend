import React, {useRef, useState} from "react";
import {useProfile, signout} from "../../Contexts/profile-context";
import {useNavigate} from "react-router";



const EditProfile = ({profile}) => {

  const {update, signout} = useProfile()
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCRef = useRef();
  const profilePicRef = useRef();
  let navigate = useNavigate();

  let updatedUser = {
    "_id": profile._id,
    "username": profile.username,
    "password": profile.password,
    "email": profile.email,
    "token": profile.token,
    "refresh_token": profile.refresh_token,
    "profile_pic": profile.profile_pic,
    "verified": profile.verified,
    "admin":profile.admin
  }

  const logout = async () => {
    try {
      await signout()
    } catch (e) {

    }
    navigate('/login')
  }

  const handleSubmit = () => {
    if (password === passwordC) {
      updatedUser.username = usernameRef.current.value;
      updatedUser.password = passwordRef.current.value;
      updatedUser.email = emailRef.current.value;
      updatedUser.profile_pic = profilePicRef.current.value;
      update(updatedUser, profile._id);

    }
  }
  const [password, setPassword] = useState(updatedUser.password);
  const [passwordC, setPasswordC] = useState(updatedUser.password);

  return (
      <div className='container'>
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
        {
          password === passwordC ?
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
        <div className="container mt-1 d-flex justify-content-center">
          <a href='/profile'>
            <button type="button" onClick={() => handleSubmit()}
                    className="btn btn-outline-light mt-1">Save Changes
            </button>
          </a>
        </div>
        <div className="container mt-1 d-flex justify-content-center">
          <a href={"/login"}>
            <button type="button" onClick={logout}
                    className="btn btn-outline-danger mt-1">Log Out
            </button>
          </a>
        </div>
      </div>
  )
}

export default EditProfile;