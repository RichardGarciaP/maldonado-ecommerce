import axios from "axios";

export const FAKE_STORE_API = axios.create({
  baseURL: "https://fakestoreapi.com",
});
