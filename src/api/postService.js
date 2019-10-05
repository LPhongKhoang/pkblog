import http from "./httpService";
export const filterPosts = (filter) => {
  return http.post("/post/filter", filter);
};

export const getHotPosts = () => {
  return http.get("/post/hot");
};
