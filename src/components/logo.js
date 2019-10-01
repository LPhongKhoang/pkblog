import React from "react";

import Image from "./common/image";

import styled from "styled-components";
import me from "../images/me.jpg";

const Title = styled.p`
  font-size: 30px;
  font-weight: bolder;
  margin-top: 8px;
  margin-bottom: 0px;
  color: #fff;
`;

const Slogan = styled.p`
  font-size: 16px;
  font-style: italic;
  color: #c4bfbf;
`;

const Logo = () => {
  const handleGoHome = () => {
    window.location = "/";
  };

  return (
    <div style={{ margin: "auto", width: "250px", textAlign: "center" }}>
      <Image
        height="120px"
        width="120px"
        alt="me.jpg"
        src={me}
        onClick={handleGoHome}
      />
      <Title>Phóng Khoáng</Title>
      <Slogan>Happy Programming</Slogan>
    </div>
  );
};

export default Logo;
