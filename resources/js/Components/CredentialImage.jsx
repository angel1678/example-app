// resources/js/Components/CredentialImage.jsx
import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const CredentialImage = ({ imageUrl }) => {
  const [selectedImage, setSelectedImage] = useState(imageUrl);

  return (
    <Row className="my-4">
      <Col xs={4} className="text-center">
        <Image
          src={imageUrl}
          thumbnail
          onClick={() => setSelectedImage(imageUrl)}
          style={{ cursor: 'pointer' }}
        />
      </Col>
      <Col xs={8} className="text-center">
        <Image src={selectedImage} fluid />
      </Col>
    </Row>
  );
};

export default CredentialImage;