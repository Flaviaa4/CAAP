import axios from "axios";

const API = axios.create({
  baseURL: "https://caap-1.onrender.com/api",
});

export const getWeather = (city) => API.get(`/weather?city=${city}`);
export const getAdvisory = (city) => API.get(`/advisory?city=${city}`);
