import React from 'react';
import { Link } from "react-router-dom";
import IconText from './common/icon-text';
import Tag from "./common/tag";
import {shortDate} from "../utils/format-date";

import styled from "styled-components";


const Container = styled.div`
  min-width: 300px;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dedede;
  margin-bottom: 2rem;
`;
const TitleLink = styled(Link)`
  font-size: 2rem;
  font-weight: 800;
  color: #000;
  &:hover {
    color: #d89550;
  }
`

const styles = {
  float: { display: "float", overflow: "hidden"},
  floatLeft: { float: "left"},
  floatRight: { float: "right"}
}

const ShortPost = ({post}) => {
  return (
    <Container>
      <div>
        <TitleLink to={`/post/${post.slug}`}>{post.title}</TitleLink>
      </div>

      <div style={styles.float}>
        <div style={styles.floatLeft}>
          <IconText icon="clock-o" text={`${post.estimateReadingTime + " min read"}`} />
        </div>
        <div style={styles.floatRight}>
          <IconText icon="calendar" text={shortDate(post.createDate)} />
        </div>
      </div>

      <p className="mt-3 mb-5">
        {post.shortDes}
        <span className="ml-2">
          <Link to={`/post/${post.slug}`} style={{fontWeight: "bold"}}>[...]</Link>
        </span> 
      </p>

      <div>
        {post.tags.map((tag, idx) => (
          <Tag key={idx} tag={tag} />
        ))}
      </div>
    </Container>
  );
}


 
export default ShortPost;