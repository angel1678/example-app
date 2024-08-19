// resources/js/Components/ImageGalleryComponent.jsx
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../../css/ImageGalleryComponent.css'; // Importa tu archivo CSS personalizado

const ImageGalleryComponent = ({ images, onImageSelect }) => {
  const galleryImages = images.map((image) => ({
    original: `/storage/${image}`,
    thumbnail: `/storage/${image}`,
  }));
  const handleImageClick = (event) => {
    onImageSelect(event.target.src);
  };
  return (
    <div className="py-4 image-gallery-wrapper">
      <ImageGallery
        items={galleryImages}
        thumbnailPosition="left" // Esto moverá las miniaturas a la izquierda
        showNav={false} // Esto ocultará las flechas de navegación
        showFullscreenButton={false} // Esto ocultará el botón de pantalla completa
        showPlayButton={false} // Esto ocultará el botón de reproducción
        showBullets={false} // Esto ocultará los puntitos
        showIndex={false} // Esto ocultará los índices
        onClick={handleImageClick}
      />
    </div>
  );
};

export default ImageGalleryComponent;