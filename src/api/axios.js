import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // 👈 chỉ cần định nghĩa 1 lần
});
export default api;
