import React from 'react';
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const TagDiv = styled.span`
  display: inline-block;
  border: 1px solid #707070;
  border-radius: 20px;
  padding: 2px 5px;
  margin: 0 10px 4px ;
  color: #D89550;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Tag = ({tag, history}) => {
  const handleTagClick = () => {
    history.push(`/tag/${tag}`)
  }
  return (
    <TagDiv onClick={handleTagClick}>
      #{tag}
    </TagDiv>
  );
}
 
export default withRouter(Tag);