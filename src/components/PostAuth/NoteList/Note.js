import React from "react";
import {useDispatch} from "react-redux";
import NoteStats from "./note-stats";
import {deleteNote} from "../../actions/notes-actions";

const Note = ({
  note = {
    "_id": "123",
    "topic": "Web Development",
    "postedBy": {
      "username": "ReactJS"
    },
    "liked": true,
    "verified": false,
    "handle": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "attachments": {
      "video": "unKvMC3Y1kI"
    },
    "logo-image": "https://s3.amazonaws.com/images.berecruited.com/photos/athletes/dashboard/3817216.png?1494963118",
    "avatar_image": "https://s3.amazonaws.com/images.berecruited.com/photos/athletes/dashboard/3817216.png?1494963118",
    "stats": {
      "comments": 123,
      "retuits": 234,
      "likes": 345
    }
  }
}) => {
  const dispatch = useDispatch();

  return (<div className="card wd-middle">


        <div className="row card-body p-1 m-1 ">
          <div className="row">
            <div className="col-2 my-2">
              <img src={note.avatar_image} alt={""} className="wd-round-image"/>
            </div>
            <div className="col-10">
              <p className="wd-content-ends"> {note.topic}</p>
              <p className="wd-content-main">{"postedBy" in note ? note.postedBy.username : "Dana Gajewski"} {note.verified
                  ? <i className="fa-solid fa-check-circle"/> : ""} <span className="wd-handle">@{note.handle}</span> <span
                  className="wd-handle"> - {note.time}
                <i className="fas fa-remove float-end" onClick={() => deleteNote(dispatch, note)}/>
                </span></p>
              <p className="wd-content">{note.tuit}</p>
              <p className="wd-content">{note.songId}</p>
              {note.hasOwnProperty("attachments") && "image"
              in note.attachments ?
                  <img
                      src={note.attachments.image}
                      className="wd-rounded-edges my-2" alt={""}/> :
                  <></>}
              {note.hasOwnProperty("attachments") && "video"
              in note.attachments ?
                  <iframe height={250} className="my-2 wd-rounded-edges"
                          src={"https://www.youtube.com/embed/"
                              + note.attachments.video}
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen/> :
                  <></>}
              <NoteStats note={note}/>

            </div>
          </div>
        </div>
      </div>


  );
}

export default Note;