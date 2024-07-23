import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import {
    FaEllipsisH,
    FaFacebook,
    FaLink,
    FaLinkedin,
    FaTrophy,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";
import ImageGalleryComponent from "@/Components/ImageGalleryComponent";
import TopNavbar from "@/Components/Navbar";
import CredentialDetails from "@/Components/CredentialDetails";
import IssuerInfo from "@/Components/IssuerInfo";
import Footer from "@/Components/Footer";
import ShareCredentials from "@/Components/ShareCredentials";
import '../../../css/onepage.css';

const Edit = ({ auth, contact }) => {
    console.log(contact);
    const initialValues = {
        name: contact.name,
        phone: contact.phone,
        avatar: null,
        email: contact.email,
        description: contact.description,
        visibility: contact.visibility,
        skills: contact.skills,
    };
    const { data, errors, setData, post, recentlySuccessful } = useForm({
        initialValues,
    });
    const skills = typeof contact.skills === 'string' ? JSON.parse(contact.skills) : contact.skills;

    useEffect(() => {
        setData({
            name: contact.name,
            phone: contact.phone,
            avatar: null,
            email: contact.email,
            description: contact.description,
            visibility: contact.visibility,
            skills: contact.skills,
        });
    }, [contact]);

    const images = [contact.avatar, "image2.jpg", contact.avatar]; // Agrega las imágenes que quieras

    const submit = (e) => {
        e.preventDefault();
        post(route("contact.update", contact));
        //console.log(data);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Actualizar Contacto
                    </h2>
                    <Link href={route("contact.index")}>Contactos</Link>
                </div>
            }
        >
            <Head title="Dashboard" />
            <ImageGalleryComponent images={images} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Row className="my-4">
                                <Col md={8}>
                                    <CredentialDetails
                                        title="Diplomado en Alta Gerencia Hospitalaria"
                                        name={contact.name}
                                        issuedDate="8 de abril de 2024"
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
                                            "8 de abril de 2024"
                                            <p>Emitido el {contact.name}</p>
                                        </Col>
                                        <Col md={6}>
                                            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                                PRESCRIBE EL
                                            </h2>
                                            "No caduca"
                                            <p>Emitido el {contact.name}</p>
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
        </AuthenticatedLayout>
    );
};

export default Edit;
