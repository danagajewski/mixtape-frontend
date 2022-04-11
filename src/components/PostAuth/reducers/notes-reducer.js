import {CREATE_NOTE, DELETE_NOTE, FIND_ALL_NOTES, UPDATE_NOTE}
  from "../../actions/notes-actions";

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_NOTES:
      return action.notes;
    case DELETE_NOTE:
      return state.filter(
          note => note._id !== action.note._id);
    case CREATE_NOTE:
      return [
        ...state,
        action.newNote
      ];
    case UPDATE_NOTE:
      return state.map(
          note => note._id === action.note._id ?
              action.note : note);
    default:
      return state;
  }
}
export default notesReducer;