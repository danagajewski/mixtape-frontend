import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const USER_API = `${API_BASE}/users`;

export const createUser = async (user) => {
  const response = await axios.post(USER_API, user);
  return response.data;
}

export const deleteUser = async (user) => {
  const response = await axios.delete(`${USER_API}/${user._id}`)
  return response.data;
}

export const updateUser = async (user) => {
  const response = await axios.put(`${USER_API}/${user._id}`, user);
  return response.data;
}

export const findUser = async (user) => {
  const response = await axios.get(`${USER_API}/${user}`);
  return response.data;
}