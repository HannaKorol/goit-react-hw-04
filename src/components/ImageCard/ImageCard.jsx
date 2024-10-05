import React from "react";
import s from "./ImageCard.module.css"


const ImageCard = ({image}) => {
  return (
    <div className={s.photo}>
      <img src={image.urls.small} alt="unsplash images" />
    </div>
  );
};

export default ImageCard;
