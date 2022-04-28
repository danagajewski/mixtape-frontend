import React, {useRef} from "react";
import {useNavigate} from "react-router";
import {useProfile} from "../Contexts/profile-context";

const SignIn = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const signin = useProfile();
  const handleSigninBtn = async () => {
    try {
      await signin.signin(
          usernameRef.current.value,
          passwordRef.current.value
      )
      navigate('/mix', { replace: true })
    } catch (e) {
      alert('Invalid Username or Password')
    }
  }
  return (

      <div className="row mix-login">
        <div className="col-2 col-lg-3 col-xl-4"/>
        <div className="col-8 col-lg-6 col-xl-4">
          <div className="container text-center">
            <img src={require("../../Style/logo.png")} alt=""/>
          </div>
          <div className="form-group mt-3">
            <label className="mx-2" htmlFor="username">Username</label>
            <input type="text" className="form-control"
                   id="username" ref={usernameRef} placeholder="iamcool2022"/>
          </div>
          <div className="form-group mt-1">
            <label className="mx-2" htmlFor="password">Password</label>
            <input type="password" className="form-control"
                   id="password" ref={passwordRef} placeholder="poopybutthole"/>
          </div>
          <div className="container mt-3 d-flex justify-content-center">
            <button type="button" className="btn btn-secondary" onClick={handleSigninBtn}>Let's Rock!</button>
          </div>
          <div className="row mt-1">
            <div className="col-5"><hr/></div>
            <div className="col-2 d-flex justify-content-center"><p className="mt-2">OR</p></div>
            <div className="col-5"><hr/></div>
          </div>
          <div className="container mt-1 d-flex justify-content-center">
            <a href={"/"}> <button type="button" className="btn btn-outline-light">Need to Register?</button></a>
          </div>
        </div>
        <div className="col-2 col-lg-3 col-xl-4"/>
      </div>
  )
}

export default SignIn;