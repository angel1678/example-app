// resources/js/Components/CredentialDetails.jsx
import React from 'react';

const CredentialDetails = ({ title, name, issuedDate, skills }) => (
  <div>
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