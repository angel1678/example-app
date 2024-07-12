// resources/js/Components/CredentialDetails.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../../css/CredentialDetails.css';

const CredentialDetails = ({ title, name, issuedDate, skills }) => (
  <div>
<div className="d-flex align-items-center justify-content-left my-3">
      <img
        src="/storage/avatars/emisor-logo.png"
        alt="Issuer Logo"
        className="mr-2"
        width="50"
        height="50"
      />
      <Button
        variant="link"
        href="https://emisor-website.com"
        target="_blank"
        className="issuer-link d-flex align-items-center"
      >
        InconGroup Academy
        <FaExternalLinkAlt className="ml-2" />
      </Button>
    </div>
    <h2>{title}</h2>
    <p>{name}</p>
    <p>Emitido el {issuedDate}</p>
    <div>
      {skills.map((skill, index) => (
        <span key={index} className="badge badge-secondary mr-2">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default CredentialDetails;