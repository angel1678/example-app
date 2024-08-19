// Footer.jsx
import React from 'react';

const Footer = () => {
    return (
<footer className="bg-gray-900 text-white py-6">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="logo mb-4 md:mb-0">
            <img src="/storage/avatars/emisor-logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="links flex flex-col md:flex-row md:space-x-4">
            <a href="https://web.whatsapp.com/send?phone=593984155661&text=Hola%20vengo%20de%20la%20pagina%20web%20quiero%20informaci%C3%B3n%20de%20sus%20servicios%20%F0%9F%98%80" className="mb-2 md:mb-0 text-white">Ayuda</a>
            <a href="https://moranconsultores.com/diplomados/110-diplomado-obsequio-webinar.html" className="mb-2 md:mb-0 text-white">Becas Ex Alumnos</a>
            <a href="https://moranconsultores.com/diplomados/110-diplomado-obsequio-webinar.html" className="text-white">Diplomado Obsequio</a>
        </div>
    </div>
</footer>
    );
};

export default Footer;