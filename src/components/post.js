import React from 'react'

const Post = ({match}) => {
  return (
    <div style={{padding: "50px"}}>
      Post details {match.params.title}
    </div>
  );
}
 
export default Post;