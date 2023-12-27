import axios from "axios";
import { useAuthStore } from '@/stores/auth'
import router from "@/router";


const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

const getHeaders = () => {
  const headers: any = {};

  const store = useAuthStore()
  
  instance.defaults.headers.Authorization = `Bearer ${store.token}`

  return headers;
}

export const HttpGet = (url: string, options?: any) => {
  const optionsDefault = {
    headers: getHeaders(),
  }
  options = Object.assign({}, optionsDefault, (options || {}))
  return instance.get(url, options);
}

export const HttpPost = (url: string, params: any = {}) => {
  return instance.post(url, params, { headers: getHeaders() })
}

export const redirectTo = (url: string) => {
  router.push(url)
}