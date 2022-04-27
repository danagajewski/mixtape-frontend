import axios from "axios";
const API_BASE = "http://localhost:4000/api"
const FOLLOWERS_API = `${API_BASE}/followers`;

export const findAllFollowers = async () => {
  const response = await axios.get(`${FOLLOWERS_API}`)
  return response.data;
}

export const unfollow = async (follower, followed) => {
  const follows = {follower: follower._id, followed: followed._id};
  const response = await axios.delete(FOLLOWERS_API, follows);
  return response.data;
}

export const follow = async (follower, followed) => {
  const follows = {follower: follower._id, followed: followed._id};
  const response = await axios.post(FOLLOWERS_API, follows);
  return response.data;
}