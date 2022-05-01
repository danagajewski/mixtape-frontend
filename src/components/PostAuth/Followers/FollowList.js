import React from "react";
import Follow from "./Follow";
import {useNavigate} from "react-router-dom";

const FollowList = ({followeds}) => {

  const navigate = useNavigate();



  return (

      <div className="row mt-2">
        <div className="col-1 col-lg-2 col-xl-3"/>
        <div className="col-10 col-lg-8 col-xl-6">
          <ul className="list-group">
            {
                followeds.map && followeds.map(follow =>
                    <Follow key={follow._id}
                            follow={follow}/>)
            }
          </ul>
        </div>
        <div className="col-1 col-lg-2 col-xl-3"/>
      </div>
  );
}

export default FollowList;