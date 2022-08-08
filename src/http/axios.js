import axios from "axios"
const baseUrl = 'http://localhost:8080';

export const getReq = async (api) => {
  const data = await axios.get(baseUrl + api);
  return data.data
}

export const postReq = async (api, body) => {
  const data = await axios.post(baseUrl + api, body);
  return data.data
}