import React from 'react';

const Gallery = () => {
    const images = [
        '/images/gallery1.jpg',
        '/images/gallery2.jpg',
        '/images/gallery3.jpg',
        '/images/gallery4.jpg',
        '/images/gallery5.jpg',
        '/images/gallery6.jpg',
    ];

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Galería</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden">
                        <img src={src} alt={`Gallery ${index}`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;