import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/drpet-apis/",
});

export default api;
