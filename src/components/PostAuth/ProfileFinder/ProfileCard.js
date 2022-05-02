import React from "react";
import {useNavigate} from "react-router-dom";

const ProfileCard = (data) => {
  const navigate = useNavigate()
  console.log(data)
  return (
      <>
        {/*<div onClick={() => {navigate(`/profile/${data.data._id}`)}}>*/}
        <a href={`/profile/${data.data._id}`} className="list-group-item list-group-item-action">
          {/*<li className="list-group-item justify-content-between align-items-center">*/}
            <div className="row">
              <div className="col-4">
                <img src={data.data.profile_pic ? data.data.profile_pic
                    : "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"}
                     alt="Fail"
                     width="60px"
                     style={{borderRadius: "100px"}}/>
              </div>
              <div className="col-8 mt-2">
                <h6>{data.data.username} {data.data.verified ? <i className="fa-solid fa-check-circle"/> : ""}</h6>
              </div>
            </div>
          {/*</li>*/}
        </a>
        {/*</div>*/}
      </>
  )
}

export default ProfileCard;