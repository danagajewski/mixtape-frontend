import React, {useRef, useState} from 'react';
import LoginNew from "./NewLogin";
import Dashboard from "./Dashboard"
import {useNavigate} from "react-router";
import {useProfile} from "../Contexts/profile-context";



const Register = () => {

  const navigate = useNavigate();
  //const code = new URLSearchParams(window.location.search).get("code")
 // const state  = new URLSearchParams(window.location.search).get("state")
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordCRef = useRef()
  //const navigate = useNavigate()
  const {signup} = useProfile()
  const handleSignupBtn = async () => {
    if (usernameRef.current.value === '' ||
        emailRef.current.value === '' ||
        passwordRef.current.value === '' ) {
      alert("All Fields must be filled!")
      return
    }
    try {
      await signup(
          usernameRef.current.value,
          emailRef.current.value,
          passwordRef.current.value
      )
      navigate('/mix')
    } catch (e) {
      setTakenUsername(true);
    }
  }

  const [password, setPassword] = useState('');
  const [passwordC, setPasswordC] = useState('');
  const [takenUsername, setTakenUsername] = useState(false)

  return (
      <div className="row mix-login mt-5">
        <div className="col-2 col-lg-3 col-xl-4"/>
        <div className="col-8 col-lg-6 col-xl-4">
          <div className="container text-center">
            <img src={require("../../Style/logo.png")} alt=""/>
          </div>
          {takenUsername === false ?
              <div className="form-group mt-1">
                <label className="mx-2" htmlFor="username">Username</label>
                <input type="text" className="form-control"
                       id="username" ref={usernameRef}/>
              </div> :
              <div className="form-group has-danger mt-1">
                <label className="mx-2" htmlFor="username">Username</label>
                <input type="text" className="form-control is-invalid"
                       id="username" ref={usernameRef}/>
                <div className="invalid-feedback">Username is taken
                </div>
              </div>
          }
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
            {/*<p>{code}</p>*/}
            <div className="container mt-1 d-flex justify-content-center">
              <button type="button" onClick={() => handleSignupBtn()} className="btn btn-outline-light">Let's Rock</button>
            </div>
            {/*{ (code === null) ? <LoginNew/> : <Dashboard code={code} state={state}/> }*/}
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