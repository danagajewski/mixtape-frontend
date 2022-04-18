import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const NOTES_API = `${API_BASE}/notes`;

export const createNote = async (note) => {
  const response = await axios.post(NOTES_API, note);
  return response.data;
}

export const findAllNotes = async () => {
  const response = await axios.get(NOTES_API);
  return response.data;
}

export const deleteNote = async (note) => {
  const response = await axios.delete(`${NOTES_API}/${note._id}`)
  return response.data;
}

export const updateNote = async (note) => {
  const response = await axios.put(`${NOTES_API}/${note._id}`, note);
  return response.data;
}
