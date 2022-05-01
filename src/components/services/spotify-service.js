import axios from "axios";


const API_KEY = 'fc5e249422msh464b254939662a6p1f8b31jsn6ab158f2ec85'

export const spotifyCharts = async () => {
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/charts/',
    params: {type: 'regional', country: 'global', recurrence: 'daily', date: 'latest'},
    headers: {
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
      'X-RapidAPI-Key': API_KEY
    }}

  const response = await axios.request(options);
  return response.data;
}