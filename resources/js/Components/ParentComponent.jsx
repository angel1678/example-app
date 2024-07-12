import React, { useState } from 'react';
import ImageGalleryComponent from './ImageGalleryComponent';
import CredentialDetails from './CredentialDetails';

const ParentComponent = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <ImageGalleryComponent onImageSelect={handleImageSelect} />
      <CredentialDetails selectedImage={selectedImage} />
    </div>
  );
};

export default ParentComponent;