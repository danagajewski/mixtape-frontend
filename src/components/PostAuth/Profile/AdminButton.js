import React from "react";
import {useDispatch} from "react-redux";
import {updateUser} from "../../actions/user-actions";

const AdminButton = ({user}) => {

  const dispatch = useDispatch;

  return (
      <div>
        {user.admin ? <></> :
            <div className="container text-center mt-1">
              <button type="button" onClick={() => updateUser(dispatch, {...user, admin: true})}
                      className="btn btn-outline-light mix-follow">Make Admin
              </button>
            </div>}

        <div className="container text-center mt-1">
          <button type="button" onClick={() => updateUser(dispatch, {...user, verified: !user.verified})}
                  className="btn btn-outline-light mix-follow">{user.verified?'Unverify':'Verify'}
          </button>
        </div>
      </div>
  );
}

export default AdminButton;