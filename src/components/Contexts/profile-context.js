import React, {useContext, useState} from "react";
import axios from "axios";

const ProfileContext = React.createContext()

const api = axios.create({withCredentials: true})

export const ProfileProvider = ({children}) => {
  const [profile, setProfile]
      = useState()

  const signout = async () => {
    const response = await api
    .post("http://localhost:4000/api/signout")
    setProfile(null)
  }

  const checkLoggedIn = async () => {
    try {
      const response = await api
      .post("http://localhost:4000/api/profile")
      setProfile(response.data)
      return response.data
    } catch (e) {
      throw e
    }
  }

  const signup = async (username, email, password) => {
    try { // TODO: move this to service
      const response = await api
      .post("http://localhost:4000/api/signup",
          { username, email, password })
      setProfile(response.data)
    } catch (e) { throw e }
  }


  const signin = async (username, password) => {
    try {
      const response = await api
      .post("http://localhost:4000/api/signin",
          {username, password})
      setProfile(response.data)
    } catch (e) {
      throw e
    }
  }

  const update = async (user) => {
    try {
      await api.put("http://localhost:4000/api/users/" + user._id, user)
      const updatedUser = api.get("http://localhost:4000/api/users/" + user._id)
    } catch (e) {
      throw e
    }
  }

  const value = {signout, signin, profile, signup, checkLoggedIn, update}
  return(
      <ProfileContext.Provider value={value}>
        {children}
      </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  return useContext(ProfileContext)
}