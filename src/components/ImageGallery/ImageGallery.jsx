import { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"
import ImageModal from "../ImageModal/ImageModal";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (imageUrl) => {
    selectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const hundleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
     <div>
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id} onClick={() => handleImageClick(image.urls.large)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
      {selectedImage && (<ImageModal isOpen={isModalOpen} onRequestClose={hundleCloseModal} imageUrl={selectedImage}/> 
      )}
  </div> 
  );
};

export default ImageGallery;

