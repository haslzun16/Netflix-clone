import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  
});

export default instance;

// https://api.themoviedb.org/3/movie/550?api_key=427803d62cfb2fb3701e3f521d14d09c
