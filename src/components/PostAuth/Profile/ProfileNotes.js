import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllNotes} from "../../actions/notes-actions";
import Note from "../NoteList/Note";

const ProfileNotes = ({profileId}) => {

  let notes = useSelector(
      state => state.notes);
  const dispatch = useDispatch();
  useEffect(() => {
    findAllNotes(dispatch)
  }, []);
  notes = notes.filter(note => note.user === profileId)

  return (
      <div className='container mt-3 text-center'>
        <h5 className='text-center'>Your Notes</h5>
        <ul className="list-group mt-3 mt-no-background">
          {
              notes.map && notes.map(note =>
                  <Note key={note._id}
                        note={note}/>)
          }
        </ul>
      </div>
  );
}

export default ProfileNotes;