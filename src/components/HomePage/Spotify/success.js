import React from "react";

const Success = () => {
  const CLIENT_ID = "120d6eb199c6499998e0fe645309337b";
  const CLIENT_SECRET = "8dbfa481b1b2484abd65c69077a09783";
  const REDIRECT_URI = "http://localhost:3000/callback/";
  const TOKEN = "https://accounts.spotify.com/api/token";
  let access_token = null;
  let refresh_token = null;

  function handleRedirect(){
    let code = getCode();
    fetchAccessToken( code );
    window.history.pushState("", "", REDIRECT_URI); // remove param from url
  }

  function getCode(){
    let code = null;
    const queryString = window.location.search;
    if ( queryString.length > 0 ){
      const urlParams = new URLSearchParams(queryString);
      code = urlParams.get('code')
    }
    return code;
  }

  function fetchAccessToken( code ){
    let body = "grant_type=authorization_code";
    body += "&code=" + code;
    body += "&redirect_uri=" + encodeURI(REDIRECT_URI);
    body += "&client_id=" + CLIENT_ID;
    body += "&client_secret=" + CLIENT_SECRET;
    callAuthorizationApi(body);
  }

  function callAuthorizationApi(body){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(CLIENT_ID + ":" + CLIENT_SECRET));
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
  }

  function handleAuthorizationResponse(){
    if ( this.status === 200 ){
      let data = JSON.parse(this.responseText);
      console.log(data);
      data = JSON.parse(this.responseText);
      if ( data.access_token !== undefined ){
        access_token = data.access_token;
       // localStorage.setItem("access_token", access_token);
      }
      if ( data.refresh_token  !== undefined ){
        refresh_token = data.refresh_token;
        //localStorage.setItem("refresh_token", refresh_token);
      }
      console.log(access_token);
      console.log(refresh_token);
    }
    else {
      console.log(this.responseText);
      alert(this.responseText);
    }
  }

  return (
      <h1>
        SUCCESS!!!
        <button type="button" onClick={() => handleRedirect()} className="btn btn-success">Get Token</button>
      </h1>
  )
}
export default Success;