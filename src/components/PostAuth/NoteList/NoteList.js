import Note
  from "./Note";
import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import {findAllNotes} from "../../actions/notes-actions";
import {findAllFollowers} from "../../actions/followers-actions";
import '../mixtape-home.css'

const NoteList = ({profile}) => {

  let notes = useSelector(
      state => state.notes);
  useEffect(() => {findAllNotes(dispatch)}, []);
  const follows = useSelector(
      state => state.followers);
  const dispatch = useDispatch();
  useEffect(() => {findAllFollowers(dispatch)}, []);
  if (profile!==undefined) {
    let followed = follows.filter(follow => follow.follower === profile._id);
    followed = followed.map(follow => follow.followed)
    notes = notes.filter(note => followed.includes(note.user) || note.user === profile._id)
  }

  return (
      <ul className="list-group mt-no-background">
        {
            notes.map && notes.map(note =>
                <Note key={note._id}
                      note={note}/>)
        }
      </ul>
  );
}

export default NoteList;