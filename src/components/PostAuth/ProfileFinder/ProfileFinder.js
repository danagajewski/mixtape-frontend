import React from "react";
import {findAllUsers} from "../../actions/user-actions";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import ProfileCard from "./ProfileCard";

const ProfileFinder = () => {

  const users = useSelector(state => state.users);
  const dispatch = useDispatch()
  useEffect(() => {
    findAllUsers(dispatch)
  }, []);
  console.log("USERS:",users)
  return (

      <ul className="list-group">
        <li className="list-group-item">
          <h5>Profiles:</h5>
        </li>
        {users && users.constructor !== Object ?
            users.map((user) => (<ProfileCard data={user}/>))
            :
            ""
        }
      </ul>

  )
}
export default ProfileFinder;