import React from "react";

const AdminButton = ({user}) => {

  console.log(user)

  return (
      <div>
        {user.admin ? <></> :
            <div className="container text-center mt-1">
              <button type="button"
                      className="btn btn-outline-light mix-follow">Make Admin
              </button>
            </div>}

        <div className="container text-center mt-1">
          <button type="button"
                  className="btn btn-outline-light mix-follow">{user.verified?'Unverify':'Verify'}
          </button>
        </div>
      </div>
  );
}

export default AdminButton;