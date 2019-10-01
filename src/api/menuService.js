// import http from "./httpService";

export const getMenus = () => {
  // fake 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const menus = [
        {_id: "1", name: "Front end"},
        {_id: "2", name: "Back end"},
        {_id: "3", name: "Tip Javascript"},
        {_id: "4", name: "Me"},
      ];
      resolve(menus);
    }, 500);
  })
}