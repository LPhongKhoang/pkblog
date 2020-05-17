import React from "react";
import queryString from "query-string";
import _ from "lodash";
import Button from "./common/button";
import { filterPosts } from "../api/postService";

import ShortPost from "./short-post";

class ListPost extends React.Component {
  page = 1;
  state = {
    posts: [],
    maxPage: 0,
    loading: true,
  };

  async componentDidMount() {
    const {
      location,
      match: { params },
    } = this.props;

    const queryParam = queryString.parse(location.search);
    let page = _.toNumber(queryParam.page) || 1;
    if (page < 1) page = 1;

    this.page = page;
    const type = params.type;
    const slug = params.slug;

    let tag = "",
      searchText = "";
    if (type === "tag") {
      tag = slug;
    } else if (type === "searchText") {
      searchText = slug;
    }

    filterPosts({
      page,
      searchText,
      tag,
      type,
      slug,
    })
      .then(({ posts, maxPage }) => {
        this.setState({ posts, maxPage, loading: false });
      })
      .catch((err) => {
        console.error("Loading post fail: ", err);
        this.setState({ loading: false });
      });
  }

  checkNextPage(dir) {
    const nextPage = this.page + dir;
    if (nextPage < 1 || nextPage > 10) return false;
    this.page = nextPage;
    return true;
  }

  handlePageClick = (dir) => {
    if (this.checkNextPage(dir)) {
      this.props.history.push(`?page=${this.page}`);
    }
  };

  render() {
    const { posts, maxPage, loading } = this.state;
    return (
      <div className="list-post">
        {loading ? (
          <p>Loading...</p>
        ) : _.isEmpty(posts) ? (
          <h3>No posts was found!</h3>
        ) : (
          <>
            {posts.map((post, idx) => (
              <ShortPost key={idx} post={post} />
            ))}

            <div style={{ margin: "auto", width: "200px" }}>
              <Button
                onClick={() => this.handlePageClick(-1)}
                disabled={this.page === 1}
              >
                {"<<"}
              </Button>
              <Button
                onClick={() => this.handlePageClick(1)}
                disabled={this.page >= maxPage}
              >
                {">>"}
              </Button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ListPost;
