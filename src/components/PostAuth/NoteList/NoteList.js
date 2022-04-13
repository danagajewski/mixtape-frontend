import Note
  from "./Note";
import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import {findAllNotes} from "../../actions/notes-actions";

const NoteList = () => {
  const notes = useSelector(
      state => state.notes);
  const dispatch = useDispatch();
  useEffect(() => {findAllNotes(dispatch)}, []);

  return (
      <ul className="list-group">
        {
            notes.map && notes.map(note =>
                <Note key={note._id}
                      note={note}/>)
        }
      </ul>
  );
}

export default NoteList;