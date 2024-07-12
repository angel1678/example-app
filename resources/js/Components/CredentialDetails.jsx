// resources/js/Components/CredentialDetails.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import jsPDF from 'jspdf';
import '../../css/CredentialDetails.css';

const CredentialDetails = ({ title, name, issuedDate, skills, selectedImage }) => {
  const downloadPDF = () => {
    if(selectedImage){
      const doc = new jsPDF('landscape');
//      doc.landscape(true);
//      doc.getHorizontalCoordinateString(0, 0, 180, 160, 10, 10);
      doc.addImage(selectedImage, 'PNG', 10, 10, 280, 160);
//      const imgData = '/storage/avatars/emisor-logo.png'; // Ruta de la imagen que quieres descargar
      // Agregar imagen al PDF
//      doc.addImage(imgData, 'PNG', 10, 10, 180, 160); // Ajusta las posiciones y el tamaño según sea necesario  
      // Descargar el PDF
      doc.save('credential.pdf');
  
    }else{
      alert('No ha seleccionado ninguna imagen');
    }

  };

  return (
    <div className="credential-details-container">
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
        <hr />
        <p>Emitido el {issuedDate}</p>



        <div>
          {skills.map((skill, index) => (
            <span key={index} className="badge badge-secondary mr-2">
              {skill}
            </span>
          ))}
        </div>
        <Button variant="primary" className="issuer-link d-flex align-items-center" onClick={downloadPDF}>
        <FaFilePdf className="ml-2" /> PDF
          </Button>
      </div>
  );
}

export default CredentialDetails;