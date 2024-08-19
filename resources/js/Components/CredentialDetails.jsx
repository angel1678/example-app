// resources/js/Components/CredentialDetails.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import jsPDF from 'jspdf';
import '../../css/CredentialDetails.css';

const CredentialDetails = ({ title, name, horas, issuedDate, skills, selectedImage }) => {
  const getInitials = (fullName) => {
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0] || '';
    const secondName = nameParts[1] || '';
    const initials = `${firstName.charAt(0)}${secondName.charAt(0)}`.toUpperCase();
    return initials;
};

const initials = getInitials(name);

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

<button
    type="button" onClick={downloadPDF} 
    className="text-gray-900 
    hover:bg-gray-200 
    focus:ring-4 
    focus:outline-none 
    focus:ring-gray-300 
    font-medium 
    rounded-lg 
    text-sm 
    px-4 
    py-2.5 
    my-2
    text-center 
    inline-flex 
    items-center 
    me-2 
    dark:bg-gray-600 
    dark:hover:bg-gray-700 
    dark:focus:ring-gray-800"
>
    <FaFilePdf className="w-3.5 h-3.5 me-2" aria-hidden="true" />
    PDF
</button>

{/* <button type="button" onClick={downloadPDF} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
<FaFilePdf className="ml-2" /> PDF2
</button>


        <Button variant="primary" className="issuer-link d-flex align-items-center" onClick={downloadPDF}>
        <FaFilePdf className="ml-2" /> PDF3
          </Button> */}
        {/* <p>{name}</p> */}
        <div className="recipient flex items-center space-x-4">
            {/* Avatar */}
            <div className="wrapper with-border" style={{ width: '40px', height: '40px' }}>
                <div className="avatar bg-blue-700 flex justify-center items-center rounded-full" style={{ backgroundColor: '#4200FF' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 40 40" focusable="false">
                        <text
                            fontFamily="Roboto"
                            fontSize="14px"
                            fontWeight="500"
                            letterSpacing="1"
                            dominantBaseline="central"
                            textAnchor="middle"
                            x="50%"
                            y="50%"
                            style={{ fill: '#FFFFFF' }}
                        >
                            {initials}
                        </text>
                    </svg>
                </div>
            </div>

            {/* Information */}
            <div className="info">
                <h2 className="name text-lg font-semibold">{name}</h2>
            </div>
        </div>
        <hr />
        <p>Por haber aprobado las {horas} del Diplomado</p>



        <div>
          {skills.map((skill, index) => (
            <span key={index} className="badge badge-secondary mr-2">
              {skill}
            </span>
          ))}
        </div>

      </div>
  );
}

export default CredentialDetails;