import React from 'react'

const Post = ({match}) => {
  return (
    <div style={{padding: "50px"}}>
      Post details {match.params.slug}
    </div>
  );
}
 
export default Post;