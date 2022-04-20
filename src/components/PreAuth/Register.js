import React, {useRef, useState} from 'react';
import LoginNew from "./NewLogin";
import Dashboard from "./Dashboard"
import {useNavigate} from "react-router-dom";
import {useProfile} from "../Contexts/profile-context";



const Register = () => {

  const code = new URLSearchParams(window.location.search).get('code')
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordCRef = useRef()
  //const navigate = useNavigate()
  const {signup} = useProfile()
  const handleSignupBtn = async () => {
    try {
      await signup(
          usernameRef.current.value,
          emailRef.current.value,
          passwordRef.current.value
      )
      //navigate('/profile')
    } catch (e) {
      alert('oops')
    }
  }

  const [password, setPassword] = useState('');
  const [passwordC, setPasswordC] = useState('');

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
            <label className="mx-2" htmlFor="email">Email</label>
            <input type="email" className="form-control"
                   id="email" ref={emailRef} placeholder="iam@cool2022.com"/>
          </div>
          <div className="form-group mt-1">
            <label className="mx-2" htmlFor="password">Password</label>
            <input type="password" className="form-control"
                   id="password" ref={passwordRef} onChange={event => setPassword(event.target.value)} placeholder="poopybutthole"/>
          </div>
          {password === passwordC ?
              <div className="form-group mt-1">
                <label className="mx-2" htmlFor="passwordC">Confirm New
                  Password</label>
                <input type="password" className="form-control"
                       id="passwordC" ref={passwordCRef}
                       onChange={event => setPasswordC(event.target.value)}/>
              </div> :
              <div className="form-group has-danger mt-1">
                <label className="mx-2" htmlFor="passwordC">Confirm New
                  Password</label>
                <input type="password" className="form-control is-invalid"
                       id="passwordC" ref={passwordCRef}
                       onChange={event => setPasswordC(event.target.value)}/>
                <div className="invalid-feedback">Must match first password.
                </div>
              </div>
          }
          <div className="container mt-3 d-flex justify-content-center">
            <p>{code}</p>
            {/*<LoginNew/>*/}
            <div className="container mt-1 d-flex justify-content-center">
              <a href="/login-spotify"> <button type="button" onClick={() => handleSignupBtn()} className="btn btn-outline-light">Let's Rock</button></a>
            </div>
            { (code === '') ? <LoginNew/> : <Dashboard/> }
            <p>{code}</p>
          </div>
          <div className="row mt-1">
            <div className="col-5"><hr/></div>
            <div className="col-2 d-flex justify-content-center"><p className="mt-2">OR</p></div>
            <div className="col-5"><hr/></div>
          </div>
        </div>
        <div className="container mt-1 d-flex justify-content-center">
           <a href="/login"> <button type="button" className="btn btn-outline-light">Already a Mixer?</button></a>
        </div>
        <div className="col-2 col-lg-3 col-xl-4"/>
      </div>
  );
}

export default Register;