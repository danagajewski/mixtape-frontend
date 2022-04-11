const CLIENT_ID = "120d6eb199c6499998e0fe645309337b";
const REDIRECT_URI = "http://localhost:3000/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const SpotifyAuth = () => {

  return (
      <div className="row mix-center">
        <div className="col-12">
          <h1>{REDIRECT_URI}</h1>
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=
    ${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
    {/*      <h1>HERE</h1>*/}
        </div>
      </div>)
}

export default SpotifyAuth;