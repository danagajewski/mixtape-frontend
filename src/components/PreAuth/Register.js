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
          <div className="form-group mt-1">
            <label className="mx-2" htmlFor="password">Confirm Password</label>
            <input type="passwordC" className="form-control"
                   id="passwordC" placeholder="poopybutthole"/>
          </div>
          <div className="container mt-3 d-flex justify-content-center">
            <a href="/home"> <button type="button" className="btn btn-secondary">Let's Rock!</button></a>
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
  )
}

export default SignIn;