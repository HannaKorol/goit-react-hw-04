import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"
import ImageModal from "../ImageModal/ImageModal";

const ImageGallery = ({ image, onImageClick }) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image.largeUrl)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

