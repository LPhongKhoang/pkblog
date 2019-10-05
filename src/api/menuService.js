import http from "./httpService";

export const getMenus = () => {
  return http.get("/menu");
}