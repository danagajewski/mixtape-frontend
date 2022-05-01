import React from "react";
import {findAllUsers} from "../../actions/user-actions";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useSelector} from "react-redux";

const ProfileFinder = () => {

  const users = useSelector( state => state.users);
  const dispatch = useDispatch()
  useEffect(()=>{findAllUsers(dispatch)},[]);
  console.log(users)
  return (
      <>
      </>
  )
}
export default ProfileFinder;