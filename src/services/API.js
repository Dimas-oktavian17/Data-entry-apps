import axios from 'axios';

export default (url = import.meta.env.VITE_SOME_KEY) => {
  return axios.create({
    baseURL: url,
  })
}
