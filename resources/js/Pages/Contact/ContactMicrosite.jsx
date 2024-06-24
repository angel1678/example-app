import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactMicrosite = ({ match }) => {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await axios.get(`/api/contact/${match.params.id}`);
                setContact(response.data);
            } catch (error) {
                console.error("There was an error fetching the contact!", error);
            }
        };

        fetchContact();
    }, [match.params.id]);

    if (!contact) return <div>Loading...</div>;

    return (
        <div className="contact-card">
            <img src={`/storage/${contact.avatar}`} alt={`Avatar of ${contact.name}`} />
            <h1>{contact.name}</h1>
            <p>{contact.description}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <div className="share-buttons">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer">Share on LinkedIn</a>
                <a href={`https://twitter.com/share?url=${window.location.href}&text=${contact.name}`} target="_blank" rel="noopener noreferrer">Share on Twitter</a>
                <a href={`https://wa.me/?text=${window.location.href}`} target="_blank" rel="noopener noreferrer">Share on WhatsApp</a>
            </div>
        </div>
    );
};

export default ContactMicrosite;
