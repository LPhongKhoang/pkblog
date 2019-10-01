// import http from "./httpService";

export const getNewPosts = () => {
  // fake
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        {
          _id: "1",
          topics: [{ _id: "2", name: "ReactJs" }],
          title: "What are different between state and props in ReactJS",
          shortDes: "abc",
          createDate: "30 Sep, 2019",
          viewTime: 102,
          tags: ["reactjs", "state", "props", "front end"],
          estimateReadingTime: 5, // minutes
          content: "abc cde"
        },
        {
          _id: "2",
          topics: [{ _id: "1", name: "NodeJS" }, { _id: "2", name: "ReactJS" }],
          title: "send http request from React app to NodeJS Rest API server",
          shortDes: "efc",
          createDate: "28 Aug, 2019",
          viewTime: 54,
          tags: ["reactjs", "http", "nodejs", "rest api"],
          estimateReadingTime: 10, // minutes
          content: "123 cde"
        }
      ];
      resolve(posts);
    }, 2);
  });
};

export const getHotPosts = () => {
  // fake
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        {
          _id: "1",
          topics: [{ _id: "2", name: "ReactJs" }],
          title: "How setState in ReactJS works?",
          shortDes: "abc",
          createDate: "30 Sep, 2019",
          viewTime: 102,
          tags: ["reactjs", "state", "async"],
          estimateReadingTime: 5, // minutes
          content: "abc cde"
        },
        {
          _id: "2",
          topics: [{ _id: "1", name: "NodeJS" }, { _id: "2", name: "ReactJS" }],
          title: "What is Directives in Angular?",
          shortDes:
            "If you are new to React, you must have noticed the term props all across the tutorials and the code snippets that you come across. So what exactly are props and how do you use them correctly? Props is short for Properties. In React, props can be passed to a component, and they should not be changed within a component",
          createDate: "28 Aug, 2019",
          viewTime: 54,
          tags: ["angular", "directive"],
          estimateReadingTime: 10, // minutes
          content: "123 cde"
        }
      ];
      resolve(posts);
    }, 2);
  });
};
