import React from "react";
import Image from "../components/common/image";

import imgFb from "../images/fb.png";
import imgGithub from "../images/github.png";
import imgYoutube from "../images/youtube.png";

const images = [
  { data: imgFb, link: "https://facebook.com" },
  { data: imgGithub, link: "https://github.com" },
  { data: imgYoutube, link: "https://youtube.com" }
];

const SocialMedia = () => {
  const handleClick = link => {
    window.open(link, "_blank");
  };
  return (
    <div style={{textAlign: "center", marginBottom: "50px", marginTop: "50px"}}>
      <h6 style={{color: "#fff", marginBottom: "15px"}}>Connect with me</h6>
      <div style={{ display: "flex", width:"200px", margin: "auto" }}>
        {images.map((img, idx) => (
          <Image
            key={idx}
            height="30px"
            width="30px"
            alt={img.link}
            src={img.data}
            onClick={() => handleClick(img.link)}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
