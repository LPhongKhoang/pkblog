import axios from "axios";

// axios config defaults base api_url
axios.defaults.baseURL=process.env.REACT_APP_API_URL

// axios interceptors
axios.interceptors.response.use(null, error => {
  const isExpectedError = error.response && error.response.status >= 400
    && error.response.status < 500;
  if(!isExpectedError) {
    logger.log(error);
    toast.error("An unexpected error occurred");
  }

  return Promise.reject(error);
});

// export Interface
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setTokenToHeaders
}