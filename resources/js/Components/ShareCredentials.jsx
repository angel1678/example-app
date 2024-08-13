// resources/js/Components/ShareCredentials.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaTrophy, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp, FaEllipsisH } from 'react-icons/fa';
import NavLink from './NavLink';

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
<div className="flex gap-2 justify-center">
        <a target='_blank' href="https://ec.linkedin.com/" >
        <div className="px-[0.75rem] py-[0.375rem] border-solid border-[1.5px] border-[#0d6efd]  rounded-md hover:bg-blue-500 hover:text-white"> 
        <FaLinkedin />
        </div>
        </a>

        {/* <Button variant="outline-primary" className="mr-2">
          <FaLinkedin />
        </Button> */}
        <Button variant="outline-primary" >
          <FaFacebook />
        </Button>
        <Button variant="outline-primary" >
          <FaTwitter />
        </Button>
        <Button variant="outline-primary" >
          <FaWhatsapp />
        </Button>
        <Button variant="outline-primary">
          <FaEllipsisH />
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ShareCredentials;