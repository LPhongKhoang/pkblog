import http from "./httpService";

export const filterPosts = (filter) => {
  return http.post("/post/filter", filter);
};

export const getHotPosts = () => {
  return http.get("/post/hot");
};

export const getPostDetails = (slug) => {
  return http.get(`/post/details/${slug}`);
}
