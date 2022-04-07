import React from "react";

const SignIn = () => {
  return (
      <div className="row mix-center">
        <div className="col mix-center">
          <img src={require("../../Style/logo.png")}/>
        </div>
        <div className="row mix-center">
          <div className="form-group">
            <input type="text" className="form-control"
                   id="username" placeholder="Enter Username"/>
          </div>
        </div>
          <div className="form-group">
            <input type="password" className="form-control"
                   id="password" placeholder="Enter Password"/>
          </div>
        </div>

      </div>
  )
}

export default SignIn;