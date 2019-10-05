import http from "./httpService";

export const getHotTopics = () => {
  return http.get("/topic/hot");
}