import React from "react";
import s from "./ImageCard.module.css"


const ImageCard = ({image, onClick}) => {
  return (
    <div onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
