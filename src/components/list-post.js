import React from "react";
import queryString from "query-string";
import Button from "./common/button";
import ShortPost from "./short-post";

// fake post
const post = {
  _id: "2",
  topics: [{ _id: "1", name: "NodeJS" }, { _id: "2", name: "ReactJS" }],
  title: "What is Directives in Angular?",
  shortDes:
    "If you are new to React, you must have noticed the term props all across the tutorials and the code snippets that you come across. So what exactly are props and how do you use them correctly? Props is short for Properties. In React, props can be passed to a component, and they should not be changed within a component",
  createDate: "28 Aug, 2019",
  viewTime: 54,
  tags: ["angular", "directive", "front end", "javascript"],
  estimateReadingTime: 10, // minutes
  content: "123 cde"
};

const ListPost = ({ location, match }) => {
  const queryParam = queryString.parse(location.search);
  const tag = (queryParam && queryParam.tag) || "empty";
  const type = match.params.type || "all";
  const id = match.params.id || "none";
  return (
    <div className="list-post">
      <ShortPost post={post} />
      <ShortPost post={post} />
      <ShortPost post={post} />
      <ShortPost post={post} />
      <ShortPost post={post} />
      <div style={{ margin: "auto", width: "200px" }}>
        <Button>{"<<"}</Button>
        <Button>>></Button>
      </div>
    </div>
  );
};

export default ListPost;
