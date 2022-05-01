import {useDispatch} from "react-redux";
import React from "react";
import {updateNote} from "../../actions/notes-actions";
import {useNavigate} from "react-router-dom";
const NoteStats = ({note}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
      <div className="d-flex justify-content-around">


        {/*<span><i className="fa-solid fa-comment"/> {note.comments*/}
        {/*    && note.comments}</span>*/}
        {/*<span><i className="fa-solid fa-retweet"/> {note.retuits*/}
        {/*    && note.retuits}</span>*/}
        <span onClick={() => updateNote(dispatch, {
          ...note,
          likes: note.likes + 1
        })}>
          {note.liked &&
              <i className="fas fa-heart me-1"
                 style={{color: 'red'}}/>}
          {!note.liked &&
              <i className="far fa-heart me-1"/>}
          {note.likes !== 0 && note.likes}
          </span>
        {/*<span><i className="fa-solid fa-arrow-up-right-from-square"*/}
        {/*onClick={()=> {navigate(`/mix/details/${note.songId}`)}}/></span>*/}
      </div>
  );
}
export default NoteStats;