import {
  CREATE_USER,
  DELETE_USER,
  FIND_USER,
  UPDATE_USER,
  FIND_ALL_USERS
} from "../../actions/user-actions";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_USER:
      return action.user
    case DELETE_USER:
      return state.filter(
          user => user._id !== action.user._id);
    case CREATE_USER:
      return [
        ...state,
        action.newUser
      ];
    case UPDATE_USER:
      return state.map(
          user => user._id === action.user._id ?
              action.user : user);

    case FIND_ALL_USERS:
      return action.users
    default:
      return state;
  }
}
export default userReducer;