import * as service from '../services/notes-service';

export const CREATE_NOTE = 'CREATE_NOTE';
export const FIND_ALL_NOTES = 'FIND_ALL_NOTES';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const createNote = async (dispatch, note) => {
  const newNote = await service.createNote(note);
  dispatch({
    type: CREATE_NOTE,
    newNote
  });
}
export const updateNote = async (dispatch, note) => {
  await service.updateNote(note);
  dispatch({
    type: UPDATE_NOTE,
    note
  });
}
export const deleteNote = async (dispatch, note) => {
  await service.deleteNote(note);
  dispatch({
    type: DELETE_NOTE,
    note
  })
}
export const findAllNotes = async (dispatch) => {
  const notes = await service.findAllNotes();
  dispatch({
    type: FIND_ALL_NOTES,
    notes
  });
}