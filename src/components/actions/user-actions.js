import * as service from '../services/user-service';

export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const FIND_USER = 'FIND_USER'

export const createUser = async (dispatch, user) => {
  const newUser = await service.createUser(user);
  dispatch({
    type: CREATE_USER,
    newUser
  });
}
export const updateUser = async (dispatch, user) => {
  await service.updateUser(user);
  dispatch({
    type: UPDATE_USER,
    user
  });
}
export const deleteUser = async (dispatch, user) => {
  await service.deleteUser(user);
  dispatch({
    type: DELETE_USER,
    user
  });
}

export const findUser = async (dispatch, user) => {
  await service.findUser(user);
  dispatch({
    type: FIND_USER,
    user
  });
}
