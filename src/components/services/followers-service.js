import axios from "axios";
const API_BASE = "http://localhost:4000/api"
const FOLLOWERS_API = `${API_BASE}/followers`;

export const findAllFollowers = async (profileId) => {
  const response = await axios.get(`${FOLLOWERS_API}/${profileId}`)
  return response.data;
}

export const unfollow = async (follower, followed) => {
  const follows = {follower: follower, followed: followed};
  console.log(follows)
  const response = await axios.post(FOLLOWERS_API+'/unfollow', follows);
  return response.data;
}

export const follow = async (follower, followed) => {
  const follows = {follower: follower, followed: followed};
  const response = await axios.post(FOLLOWERS_API, follows);
  return response.data;
}