import React from 'react';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=120d6eb199c6499998e0fe645309337b&response_type=code&redirect_uri=http://localhost:3000/auth/callback&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function LoginNew() {
  return (
      <div>
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          Login With Spotify
        </a>
      </div>
  )
}

