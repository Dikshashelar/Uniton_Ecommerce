import axios from "axios";

const Base_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2UwOWUxMmMxYzE4ZjAyNTVhMjFmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczNjc2NjkzNSwiZXhwIjoxNzM3MDI2MTM1fQ.BVyMwKr_FZYL4Ipt5VUSVSbFJaGWkHiPHP4kXgrKPf8";

export const publicRequest = axios.create({
  baseURL: Base_URL,
});

export const userRequest = axios.create({
  baseURL: Base_URL,
  headers: { token: `Bearer ${TOKEN} ` },
});
