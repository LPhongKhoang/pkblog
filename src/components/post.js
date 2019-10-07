import React from "react";
import { getPostDetails } from "../api/postService";
import { HeaderPost } from "./short-post";
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';

class Post extends React.Component {
  state = {
    post: null,
    loading: true
  };

  async componentDidMount() {
    const slug = this.props.match.params.slug;
    const post = await getPostDetails(slug);
    this.setState({ post, loading: false });
  }

  componentDidUpdate() {
    hljs.initHighlightingOnLoad();
  }

  render() {
    const { post, loading } = this.state;
    return (
      <div className="post-details">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <HeaderPost post={post} />
            <div className="mt-5 post-content"
              dangerouslySetInnerHTML={{__html: post.content}} 
            />
          </>
        )}
      </div>
    );
  }
}

export default Post;
