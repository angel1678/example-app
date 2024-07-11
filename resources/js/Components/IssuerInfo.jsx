// resources/js/Components/IssuerInfo.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../../css/IssuerInfo.css';

const IssuerInfo = () => {
  return (
    <Card className="mt-4 issuer-info-card">
      <Card.Body>
        <Card.Title className="text-center">Más información sobre el emisor</Card.Title>
        <div className="d-flex align-items-center justify-content-center my-3">
          <img src="/path/to/emisor-logo.png" alt="Issuer Logo" className="mr-2" width="50" height="50" />
          <span>InconGroup Academy</span>
        </div>
        <div className="text-center">
          <Button variant="link" href="https://emisor-website.com" target="_blank" className="issuer-link">
            Visita el sitio web del emisor <FaExternalLinkAlt />
          </Button>
        </div>
        <hr />
        <div className="issuer-info-footer">
          <div className="issuer-info-label">Más credenciales del emisor</div>
          <Button variant="link" href="/todas-las-credenciales" className="issuer-info-link">
            Ver todas las credenciales →
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default IssuerInfo;