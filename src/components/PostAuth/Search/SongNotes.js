import Note
  from "../NoteList/Note";
import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import {findAllNotes} from "../../actions/notes-actions";
import Comment from "./Comment";

const SongNotes = ({songId}) => {

  const dispatch = useDispatch();
  let notes = useSelector(
      state => state.notes);
  useEffect(() => {findAllNotes(dispatch)}, []);
  notes = notes.filter(note => note.songId === songId.current);

  return (
      <ul className="list-group">
        {
            notes.map && notes.map(note =>
                <Comment key={note._id}
                      note={note}/>)
        }
      </ul>
  );
}

export default SongNotes;