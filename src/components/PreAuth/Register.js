import React, {useRef} from 'react';

// import WebPlayback from "./Webplayback";
import LoginNew from "./NewLogin";
import Dashboard from "./Dashboard"
import {useNavigate} from "react-router-dom";
import {useProfile} from "../Contexts/profile-context";



const Register = () => {
  // const requestAuthorization = () => {
  //   const AUTHORIZE = "https://accounts.spotify.com/authorize";
  //   const CLIENT_ID = "120d6eb199c6499998e0fe645309337b";
  //   const REDIRECT_URI = "http://localhost:3000/callback/";
  //   let url = AUTHORIZE;
  //   url += "?client_id=" + CLIENT_ID;
  //   url += "&response_type=code";
  //   url += "&redirect_uri=" + encodeURI(REDIRECT_URI);
  //   url += "&show_dialog=true";
  //   url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
  //   window.location.href = url;
  // }
  const code = new URLSearchParams(window.location.search).get('code')
  // const [token, setToken] = useState('');

  // useEffect(() => {
  //
  //   async function getToken() {
  //     const response = await fetch('/auth/token');
  //     const json = await response.json();
  //     setToken(json.access_token);
  //   }
  //
  //   getToken();
  //
  // }, []);
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordCRef = useRef()
  const navigate = useNavigate()
  const {signup} = useProfile()
  const handleSignupBtn = async () => {
    try {
      await signup(
          emailRef.current.value,
          passwordRef.current.value
      )
      navigate('/profile')
    } catch (e) {
      alert('oops')
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
            <label className="mx-2" htmlFor="email">Email</label>
            <input type="email" className="form-control"
                   id="email" ref={emailRef} placeholder="iam@cool2022.com"/>
          </div>
          <div className="form-group mt-1">
            <label className="mx-2" htmlFor="password">Password</label>
            <input type="password" className="form-control"
                   id="password" ref={passwordRef} placeholder="poopybutthole"/>
          </div>
          <div className="form-group mt-1">
            <label className="mx-2" htmlFor="password">Confirm Password</label>
            <input type="passwordC" className="form-control"
                   id="passwordC" ref={passwordCRef} placeholder="poopybutthole"/>
          </div>
          <div className="container mt-3 d-flex justify-content-center">
            {/*<button type="button" onClick={() => requestAuthorization()} className="btn btn-secondary">Let's Rock!</button>*/}
            <p>{code}</p>
            <LoginNew/>
            {/*<Dashboard/>*/}
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
           <a href="/login"> <button type="button" className="btn btn-outline-light" onClick={navigate('/login')}>Already a Mixer?</button></a>
        </div>
        <div className="col-2 col-lg-3 col-xl-4"/>
      </div>
  );
}

export default Register;