import React from "react";

const Privacy = () => {
  return (
      <div className="row mix-login mt-5">
        <div className="col-2 col-lg-3 col-xl-4"/>
        <div className="col-8 col-lg-6 col-xl-4">
          <div className="container text-center">
            <img src={require("../../Style/logo.png")} alt=""/>
          </div>
         <p className="text-center mt-3"> Hi! Welcome to Mixtape: an interactive music sharing and listening platform. We are so glad you are here! We want to clear the air a bit before you dive head-first into a realm of music discover. As a company, we value privacy above everything. Therefore, we promise that we will never use or sell any data you enter on this website without your explicit knowledge and consent. If we ever plan to use user data, it will be exclusively an opt-in program so you know exactly when and how your data is being used. We thank you for using our little project :) Have fun!</p>
        </div>
        <div className="container mt-1 d-flex justify-content-center">
          <a href="/mix"> <button type="button" className="btn btn-outline-light">Dive in</button></a>
        </div>
        <div className="col-2 col-lg-3 col-xl-4"/>
      </div>
  );
}

export default Privacy;