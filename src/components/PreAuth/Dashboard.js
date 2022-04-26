import React, {useState} from "react";
import UseAuth from './UseAuth'
import axios from "axios";
// import { Container, Form } from "react-bootstrap";
// import {useState, useEffect} from "react";
// import SpotifyWebApi from 'spotify-web-api-node';
// import Player from "./Player"
// import TrackSearchResult from "./TrackSearchResult"

// const spotifyApi = new SpotifyWebApi({
//   clientId: "120d6eb199c6499998e0fe645309337b",
// })

const Dashboard = ({code, state}) => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()
  const api = axios.create({withCredentials: true})

  api.get("http://localhost:4000/api/getToken/" + code)
  .then(res => {
    setAccessToken(res.accessToken)
    setRefreshToken(res.data.refreshToken)
    setExpiresIn(res.data.expiresIn)

  })

  //const accessToken = UseAuth(code);
  // const [search, setSearch] = useState("")
  // const [searchResults, setSearchResults] = useState([])
  // const [playingTrack, setPlayingTrack] = useState()

  // function chooseTrack(track) {
  //   setPlayingTrack(track)
  //   setSearch("")
  // }
  //
  // useEffect(() => {
  //   if (!accessToken) return
  //   spotifyApi.setAccessToken(accessToken)
  // }, [accessToken]);
  //
  // useEffect(() => {
  //   if (!search) return setSearchResults([])
  //   if (!accessToken) return
  //
  //   let cancel = false
  //   spotifyApi.searchTracks(search).then(res => {
  //     if (cancel) return
  //     setSearchResults(
  //         res.body.tracks.items.map(track => {
  //           const smallestAlbumImage = track.album.images.reduce(
  //               (smallest, image) => {
  //                 if (image.height < smallest.height) return image
  //                 return smallest
  //               },
  //               track.album.images[0]
  //           )
  //
  //           return {
  //             artist: track.artists[0].name,
  //             title: track.name,
  //             uri: track.uri,
  //             albumUrl: smallestAlbumImage.url,
  //           }
  //         })
  //     )
  //   })
  //
  //   return () => (cancel = true)
  // }, [search, accessToken])

  return (
      <>
        <h1>access token</h1>
        <h6>{accessToken}</h6>
      </>
      // <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
      //   <Form.Control
      //       type="search"
      //       placeholder="Search Songs/Artists"
      //       value={search}
      //       onChange={e => setSearch(e.target.value)}
      //   />
      //   <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
      //     {searchResults.map(track => (
      //         <TrackSearchResult
      //             track={track}
      //             key={track.uri}
      //             chooseTrack={chooseTrack}
      //         />
      //     ))}
      //     {/*{searchResults.length === 0 && (*/}
      //     {/*    <div className="text-center" style={{ whiteSpace: "pre" }}>*/}
      //     {/*      {lyrics}*/}
      //     {/*    </div>*/}
      //     {/*)}*/}
      //   </div>
      //   <div>
      //     {/*<Player accessToken={accessToken} trackUri={playingTrack?.uri} />*/}
      //   </div>
      // </Container>
  )
}
export default Dashboard;