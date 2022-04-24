import axios from "axios";

// const API_BASE = "https://deezerdevs-deezer.p.rapidapi.com"
const API_KEY = '63f44e3813msh43e42f81f9f3fcbp148890jsnb9ae003b6781'

export const searchDeezer = async (searchQ) => {
  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: {q: searchQ},
    headers: {
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      'X-RapidAPI-Key': API_KEY
  }}

  const response = await axios.request(options);
  return response.data;
}


