// resources/js/Pages/PublicContact/Show.jsx

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";
import { Transition } from "@headlessui/react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import {
    FaLink,
    FaTrophy,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaWhatsapp,
    FaEllipsisH,
} from "react-icons/fa";
import ImageGalleryComponent from "@/Components/ImageGalleryComponent";
import ShareCredentials from "@/Components/ShareCredentials";
import IssuerInfo from "@/Components/IssuerInfo";
import CredentialDetails from "@/Components/CredentialDetails";


const Show = ({ contact }) => {
    const skills = typeof contact.skills === 'string' ? JSON.parse(contact.skills) : contact.skills;

    const images = [contact.avatar, contact.avatar]; // Agrega las imágenes que quieras
    //const formattedDate = format(contact.emitida_en, "d 'de' MMMM 'de' yyyy", { locale: es });
    console.log(contact.emitida_en);
    const prescribeDate = new Date(contact.emitida_en);
    console.log(prescribeDate);
    const formattedDate = format(prescribeDate, "d 'de' MMMM 'de' yyyy", { locale: es });

return (
<div>   
        <Head title="Dashboard" />
        <ImageGalleryComponent images={images} />
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <Row className="my-4">
                            <Col md={8}>
                                <CredentialDetails
                                    title={contact.detallename}
                                    name={contact.name}
                                    issuedDate={contact.emitida_en}
                                    skills={contact.skills}
                                    selectedImage={`/storage/${contact.avatar}`} // Pasa la URL de la imagen seleccionada
                                />
                                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                    Habilidades / conocimientos
                                </h2>
                                <div className="skills-container">

                                    {skills.map((skill, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className="skill-button"


                                        >
                                            {skill}
                                        </button>
                                    ))}
                                </div>

                                <Row className="my-4">
                                    <Col md={6}>
                                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                            EMITIDA EN
                                        </h2>
                                        <p>{formattedDate}</p>
                                    </Col>
                                    <Col md={6}>
                                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                            PRESCRIBE EL
                                        </h2>
                                        <p>{contact.prescribe_el}</p>
                                    </Col>
                                </Row>




                            </Col>
                            <Col md={4}>
                                <ShareCredentials />
                                <IssuerInfo />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Show;
