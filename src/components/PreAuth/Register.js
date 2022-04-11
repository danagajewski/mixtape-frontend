import React, { useState, useEffect } from 'react';
import Login from './Login'
import WebPlayback from "./Webplayback";

const SignIn = () => {
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

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

  }, []);

  return (
      <div className="row mix-login">
        <div className="col-2 col-lg-3 col-xl-4"/>
        <div className="col-8 col-lg-6 col-xl-4">
          <div className="container text-center">
            <img src={require("../../Style/logo.png")}/>
          </div>
          <div className="form-group mt-3">
            <label className="mx-2" htmlFor="username">Username</label>
            <input type="text" className="form-control"
                   id="username" placeholder="iamcool2022"/>
          </div>
          <div className="form-group mt-1">
            <label className="mx-2" htmlFor="password">Password</label>
            <input type="password" className="form-control"
                   id="password" placeholder="poopybutthole"/>
          </div>
          <div className="form-group mt-1">
            <label className="mx-2" htmlFor="password">Confirm Password</label>
            <input type="passwordC" className="form-control"
                   id="passwordC" placeholder="poopybutthole"/>
          </div>
          <div className="container mt-3 d-flex justify-content-center">
            {/*<button type="button" onClick={() => requestAuthorization()} className="btn btn-secondary">Let's Rock!</button>*/}
            { (token === '') ? <Login/> : <WebPlayback token={token} /> }
            <p>{token}</p>
            {/*<Login/>*/}
            {/*<WebPlayback/>*/}
          </div>
          <div className="row mt-1">
            <div className="col-5"><hr/></div>
            <div className="col-2 d-flex justify-content-center"><p className="mt-2">OR</p></div>
            <div className="col-5"><hr/></div>
          </div>
        </div>
        <div className="container mt-1 d-flex justify-content-center">
           <button type="button" className="btn btn-outline-light">Already a Mixer?</button>
        </div>
        <div className="col-2 col-lg-3 col-xl-4"/>
      </div>
  );
}

export default SignIn;