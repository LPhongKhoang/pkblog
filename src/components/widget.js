import React from "react";
import { SearchBox, LightBox } from "./common/smooth-box";
import { Link } from "react-router-dom";
import ListGroup from "./common/list-group";
import { getHotTopics } from "../api/topicService";
import { getHotPosts } from "../api/postService";

import styled from "styled-components";

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #d89550;
  margin-bottom: 10px;
`;

const TopicLink = styled(Link)`
  font-size: 18px;
  color: #707070;
  text-decoration: none;
  &:hover {
    color: #c5c5c5;
    text-decoration: none;
  }
`;


class Widget extends React.Component {
  state = {
    hotTopics: [],
    hotPosts: [],
    searchTag: ""
  };

  handleSearchTagChange = e => {
    this.setState({ searchTag: e.target.value });
  };

  handleEnterSearch = e => {
    if(e.keyCode === 13) {
      // "Enter" is pressed
      const searchTag = this.state.searchTag;
      if(searchTag.trim()==="") return;
      console.log("Get post by search tag: ", searchTag);
    }
  };

  async componentDidMount() {
    try {
      const hotTopics = await getHotTopics();
      const hotPosts = await getHotPosts();
      this.setState({ hotTopics, hotPosts });
    } catch (ex) {}
  }

  render() {
    const { hotTopics, hotPosts, searchTag } = this.state;
    return (
      <div className="widget">
        <SearchBox className="search-box">
          <input
            style={{ padding: "0.75rem 0", width: "100%", border: "none" }}
            placeholder="Search..."
            name="searchTag"
            value={searchTag}
            onChange={this.handleSearchTagChange}
            onKeyUp={this.handleEnterSearch}
          />
        </SearchBox>

        <LightBox style={{ marginTop: "80px", marginBottom: "40px" }}>
          <Title>Hot topics</Title>
          <ListGroup
            data={hotTopics}
            styleItem={{ align: "left", gap: "15px"}}
            style={{paddingTop: "10px"}}
            renderItem = {t => (
              <TopicLink to={`/topic/${t._id}`}>{t.name}</TopicLink>
            )}
          />

        </LightBox>

        <LightBox>
          <Title>Hot posts</Title>
          <ListGroup
            data={hotPosts}
            styleItem={{ align: "left", gap: "15px"}}
            style={{paddingTop: "10px"}}
            renderItem = {p => (
              <Link to={`/post/${p._id}`}>{p.title}</Link>
            )}
          />
        </LightBox>
      </div>
    );
  }
}

export default Widget;
