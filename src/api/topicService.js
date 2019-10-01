// import http from "./httpService";

export const getHotTopics = () => {
  // fake 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const topics = [
        { 
          _id: "1",
          menus: [
            {_id: "2", name: "Back end"},
          ],
          name: "NodeJs",
          count: 10
        },
        { 
          _id: "2",
          menus: [
            {_id: "1", name: "Front end"},
          ],
          name: "Reacts",
          count: 9
        },
        { 
          _id: "3",
          menus: [
            {_id: "1", name: "Front end"},
          ],
          name: "Angular",
          count: 7
        },
        { 
          _id: "4",
          menus: [
            {_id: "1", name: "Front end"},
          ],
          name: "VueJs",
          count: 5
        }

      ];
      resolve(topics);
    }, 1000);
  })
}