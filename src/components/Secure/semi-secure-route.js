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
    } catch (e) {
      setCurrentUser(null)
    }
  }
  useEffect(() => { check() }, []);
  return children;

};

export default SecureRoute;