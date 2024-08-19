// Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="logo">
                    <img src="/storage/avatars/emisor-logo.png" alt="Logo" className="h-10" />
                </div>
                <div className="auth-links flex">
                    <a href="/login" className="mr-4 text-gray-800">Login</a>
                    <a href="/register" className="text-gray-800">Registro</a>
                </div>
            </div>
        </header>
    );
};

export default Header;