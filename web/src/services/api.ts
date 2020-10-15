import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3355",
});

export default api;
