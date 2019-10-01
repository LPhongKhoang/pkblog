import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  margin: auto;
  height: ${props => props.height || "50px"};
  width: ${props => props.width || "50px"};
  overflow: hidden;
  border-radius: 50%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
`;

const Image = ({ width, height, src, alt, onClick }) => {
  return (
    <ImgContainer width={width} height={height}>
      <Img src={src} alt={alt} onClick={onClick} />
    </ImgContainer>
  );
};

export default Image;
