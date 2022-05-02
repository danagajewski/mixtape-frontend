import React from "react";
import {deleteNote} from "../../actions/notes-actions";
import NoteStats from "../NoteList/note-stats";

const Comment = ({note}) => {

  return (
      <div className="card wd-middle mt-2">

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
                </span></p>



              <p className="wd-content">{note.tuit}</p>
              <NoteStats note={note}/>

            </div>
          </div>
        </div>
      </div>
  )
}

export default Comment;