// resources/js/Pages/PublicContact/Show.jsx

import React from 'react';
import { Head, Link } from '@inertiajs/react';

const Show = ({ contact }) => {
    return (
        <div className="container mx-auto p-4">
            <Head title={contact.name} />
            <div className="bg-white shadow-md rounded p-6">
                <h2 className="text-2xl font-bold mb-4">{contact.name}</h2>
                <p><strong>Phone:</strong> {contact.phone}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Description:</strong> {contact.description}</p>
                {/* Add other fields as necessary */}
                <Link href="/" className="text-blue-500">Back to home</Link>
            </div>
        </div>
    );
};

export default Show;
