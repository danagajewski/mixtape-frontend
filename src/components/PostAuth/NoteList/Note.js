import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import NoteStats from "./note-stats";
import {deleteNote} from "../../actions/notes-actions";
import {searchDeezerById} from "../../services/deezer-service";
import {useProfile} from "../../Contexts/profile-context";
import '../mixtape-home.css';

const Note = ({note}) => {
  const dispatch = useDispatch();
  const [ans, setAns] = useState();
  const {profile} = useProfile();
  const getAnswer = async () => {
    if (note.songId.current) {
      const data = await searchDeezerById(note.songId.current)
      setAns(data)
    }
  }

  useEffect(() => {
    getAnswer()
  }, [])
  console.log(note)

  return (
      <div className="card wd-middle mt-1">

        <div className="card-header">
          <span className='mt-note-font'> {note.username} commented on</span>
        </div>
        <a href={`mix/details/${note.songId.current}`} className="mt-no-underline">
        <div className="card-header">
          <div className="row">
            <div className="col-2">
              <img src={ans ? ans.album.cover_small : ''} className='mt-album'/>
            </div>
            <div className="col-8">
              <h5 className="card-title">{ans ? ans.title : ''}</h5>
              <h6 className="card-subtitle text-muted">By {ans
                  ? ans.artist.name : ''}</h6>
            </div>
          </div>
        </div>
        </a>
        <div className="row card-body p-1 m-1 ">


          <div className="row">
            <div className="col-2 my-2">
              <img src={note.profilePicture} alt={""}
                   className="wd-round-image"/>
              {/*<img src="" alt={""} className="wd-round-image"/>*/}
            </div>
            <div className="col-10">
              <p className="wd-content-main">{note.username} {note.verified
                  ? <i className="fa-solid fa-check-circle"/> : ""} <span
                  className="wd-handle">@{note.handle}</span> <span
                  className="wd-handle"> - {note.time}

                {profile!==undefined && profile._id===note.user?<i className="fas fa-remove float-end"
                   onClick={() => deleteNote(dispatch, note)}/>:<></>}
                </span></p>



              <p className="wd-content">{note.tuit}</p>
              <NoteStats note={note}/>

            </div>
          </div>
        </div>
      </div>

  );
}

export default Note;