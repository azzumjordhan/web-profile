import axios from "axios";
// import Router from "next/router";
// import { localStorageMixins } from "@/mixins/localStorage.mixin";

const instance = axios.create({
  baseURL: process.env.HOST,
  headers: {
    Accept: "*/*",
  },
});

instance.interceptors.request.use;

export default instance;
