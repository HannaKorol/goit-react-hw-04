import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"

const ImageGallery = ({images}) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id + image.created_at}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

