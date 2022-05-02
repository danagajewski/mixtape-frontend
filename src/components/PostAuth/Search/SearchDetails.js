import React, {useEffect, useRef, useState} from "react";

import {searchDeezerById} from "../../services/deezer-service";
import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import {createNote} from "../../actions/notes-actions";
import {useProfile} from "../../Contexts/profile-context";
import SongNotes from "./SongNotes";
// import {useNavigate} from "react-router-dom";

const SearchDetails = () => {
  const dispatch = useDispatch();
  const {profile, signout, update} = useProfile()
  const songId = useRef()

  const [newTuit, setNewTuit] =
      useState({
        tuit: 'New tuit', user: profile, username: profile.username,
        profilePicture: profile.profile_pic,
        songId: songId.current
      });
  const [ans, setAns] = useState()
  const {searchDetailString} = useParams()


  const getAnswer = async () => {
    if (songId.current.value !== "") {
      const data = await searchDeezerById(songId.current)
      setAns(data)
    }
  }

  useEffect(() => {
    if (searchDetailString) {
      songId.current = searchDetailString
      getAnswer()
    }
  }, [])
  console.log(profile)
  // console.log(searchDetailString)
  console.log(songId.current)
  console.log(newTuit)
  return (
      // <h1>Success</h1>
      <div className="card border-primary mb-3">
        <div className="card-header">
          <img src={ans ? ans.artist.picture : ""}
               className="img-rounded-corners" height="50px"/>
          <span>  {ans ? ans.artist.name : ""}</span>

        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-3">
              <img src={ans ? ans.album.cover_medium : ""}
                   className="img-rounded-corners"
                  height="100px"/>
            </div>
            <div className="col-9">
              <h4 className="card-title">{ans ? ans.title : ""}</h4>
              <h6 className="card-subtitle mb-2 text-muted">{ans
                  ? ans.album.title
                  : ""}</h6>
              {/*<img src={ans ? ans.artist.picture : ""}/>*/}
            </div>
          </div>
          <textarea className="form-control wd-whats-happening"
                    onChange={(e) =>
                        setNewTuit({
                          ...newTuit,
                          songId:songId.current,
                          tuit: e.target.value
                        })}/>
          <button onClick={() =>
              createNote(dispatch, newTuit)}
                  className="btn btn-primary btn-block rounded-pill my-2 wd-tuit-button">
            <i className="fa-solid fa-paper-plane"/>
          </button>
        </div>
        <SongNotes songId={songId}/>
      </div>
  )
}
export default SearchDetails;