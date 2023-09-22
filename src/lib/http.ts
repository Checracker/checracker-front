import axios from "axios";

const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "/"
      : process.env.NEXT_PUBLIC_API_URL || "/",
  withCredentials: true,
});

export const setToken = (token: string) => {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  http.defaults.headers.common.Authorization = undefined;
};

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default http;
