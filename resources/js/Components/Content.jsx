import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { FaLink, FaTrophy, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp, FaEllipsisH } from 'react-icons/fa';

const Content = (contact) => {
  return (
    <Container>
      <Row className="my-4">
        <Col className="text-center">
          <Image src={`/storage/${contact.avatar}`} thumbnail />
          <Image src={`/storage/${contact.avatar}`} thumbnail className="ml-3" />
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6} className="text-center">
          <Button variant="link" href="https://tu-sitio-web.com">
            <FaLink /> Visita Nuestro Sitio
          </Button>
          <div>Nombre del Certificado</div>
        </Col>
        <Col md={6}>
          <Card className="text-center">
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
        </Col>
      </Row>
    </Container>
  );
};

export default Content;