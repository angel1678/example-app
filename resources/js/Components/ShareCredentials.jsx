// resources/js/Components/ShareCredentials.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaTrophy, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp, FaEllipsisH } from 'react-icons/fa';

const ShareCredentials = () => {
  return (
    <Card className="text-center mt-4">
      <Card.Body>
        <Card.Title>
          <FaTrophy /> Compartir Credenciales
        </Card.Title>
        <Card.Text>
          Muestra esta credencial en tu red social
        </Card.Text>
        <Button variant="outline-primary" className="mr-2">
          <FaLinkedin />
        </Button>
        <Button variant="outline-primary" className="mr-2">
          <FaFacebook />
        </Button>
        <Button variant="outline-primary" className="mr-2">
          <FaTwitter />
        </Button>
        <Button variant="outline-primary" className="mr-2">
          <FaWhatsapp />
        </Button>
        <Button variant="outline-primary">
          <FaEllipsisH />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShareCredentials;