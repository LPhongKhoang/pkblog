import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 4000,
  headers: { "X-Custom-Header": "foobar" },
});

// instance axios interceptors
instance.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (error) => {
    const isExpectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!isExpectedError) {
      // logger.log(error);
      // toast.error("An unexpected error occurred");
      console.error("Unexpected error occurred");
    }

    return Promise.reject(error);
  }
);

// // axios config defaults base api_url
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// // axios interceptors
// axios.interceptors.response.use(
//   res => Promise.resolve(res.data),
//   error => {
//     const isExpectedError =
//       error.response &&
//       error.response.status >= 400 &&
//       error.response.status < 500;
//     if (!isExpectedError) {
//       // logger.log(error);
//       // toast.error("An unexpected error occurred");
//       console.error("Unexpected error occurred");
//     }

//     return Promise.reject(error);
//   }
// );

// export Interface
export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  patch: instance.patch,
  delete: instance.delete,
};
