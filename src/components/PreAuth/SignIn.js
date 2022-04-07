import React from "react";

const SignIn = () => {
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
          <div className="container mt-3 d-flex justify-content-center">
            <a href="/home"> <button type="button" className="btn btn-secondary">Let's Rock!</button></a>
          </div>
        </div>
        <div className="col-2 col-lg-3 col-xl-4"/>
      </div>
  )
}

export default SignIn;