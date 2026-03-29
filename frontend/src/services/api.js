import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getWeather = (city) => API.get(`/weather?city=${city}`);
export const getAdvisory = (city) => API.get(`/advisory?city=${city}`);
