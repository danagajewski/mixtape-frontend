import React, {useEffect, useState} from 'react';
import {Navigate} from "react-router";
import {useProfile} from "../Contexts/profile-context";

const SecureRoute = ({children}) => {
  const checkLoggedIn = useProfile()
  const [currentUser, setCurrentUser] = useState()
  const [waiting, setWaiting] = useState(true)
  const check = async () => {
    try {
      const user = await checkLoggedIn.checkLoggedIn()
      setCurrentUser(user)
      setWaiting(false)
    } catch (e) {
      setWaiting(false)
    }
  }
  useEffect(() => { check() }, [])
  if(currentUser) {
    return children
  } else if(waiting) {
    return null
  } else {
    return <Navigate to="/login"/>
  }
};

export default SecureRoute;