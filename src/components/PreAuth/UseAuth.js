import React from "react";
import { useState, useEffect} from 'react';
import axios from "axios";

const UseAuth = (code) => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect = (() => {
    axios.post("http://localhost:4000/login",
        {
          code,
        }).then(res => {
          setAccessToken(res.data.accessToken)
          setRefreshToken(res.data.refreshToken)
          setExpiresIn(res.data.expiresIn)

    }).catch(() => {
      window.location = "/home"
    })
  }, [code])

  useEffect = (() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
      axios
      .post("http://localhost:3001/refresh", {
        refreshToken,
      })
      .then(res => {
        setAccessToken(res.data.accessToken)
        setExpiresIn(res.data.expiresIn)
      })
      .catch(() => {
        window.location = "/home"
      })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}

export default UseAuth;