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

const Edit = ({ auth, contact }) => {
    console.log(contact);
    const initialValues = {
        name: contact.name,
        phone: contact.phone,
        avatar: null,
        email: contact.email,
        description: contact.description,
        visibility: contact.visibility,
    };
    const { data, errors, setData, post, recentlySuccessful } = useForm({
        initialValues,
    });
    useEffect(() => {
        setData({
            name: contact.name,
            phone: contact.phone,
            avatar: null,
            email: contact.email,
            description: contact.description,
            visibility: contact.visibility,
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
                                        skills={[
                                            "Analisis Crítico",
                                            "Gerencia",
                                            "Administración",
                                        ]}
                                    />
                                </Col>
                                <Col md={4}>
                                    <ShareCredentials />
                                    <IssuerInfo />
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col md={8} className="text-center">
                                    <Button
                                        variant="link"
                                        href="https://tu-sitio-web.com"
                                    >
                                        <FaLink /> Visita Nuestro Sitio
                                    </Button>
                                    <div>Nombre del Certificado</div>
                                </Col>
                                <Col md={4}>
                                    <Card className="text-center">
                                        <Card.Body>
                                            <Card.Title>
                                                <FaTrophy /> Compartir
                                                Credenciales
                                            </Card.Title>
                                            <Card.Text>
                                                Muestra esta credencial en tu
                                                red social
                                            </Card.Text>
                                            <Button
                                                variant="outline-primary"
                                                className="mr-2"
                                            >
                                                <FaLinkedin />
                                            </Button>
                                            <Button
                                                variant="outline-primary"
                                                className="mr-2"
                                            >
                                                <FaFacebook />
                                            </Button>
                                            <Button
                                                variant="outline-primary"
                                                className="mr-2"
                                            >
                                                <FaTwitter />
                                            </Button>
                                            <Button
                                                variant="outline-primary"
                                                className="mr-2"
                                            >
                                                <FaWhatsapp />
                                            </Button>
                                            <Button variant="outline-primary">
                                                <FaEllipsisH />
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <form onSubmit={submit}>
                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-green-600 text-center">
                                        Usuario Actualizado.
                                    </p>
                                </Transition>

                                <div>
                                    <InputLabel htmlFor="name" value="Nombre" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="phone"
                                        value="Telefono"
                                    />

                                    <TextInput
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        placeholder="555-555-5555"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.phone}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="avatar"
                                        value="Avatar"
                                    />

                                    <TextInput
                                        id="avatar"
                                        type="file"
                                        name="avatar"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("avatar", e.target.files[0])
                                        }
                                    />

                                    <InputError
                                        message={errors.avatar}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="description"
                                        value="Description"
                                    />

                                    <TextInput
                                        id="description"
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="visibility"
                                        value="visibility"
                                    />
                                    <select
                                        name="visibility"
                                        id="visibility"
                                        defaultValue={contact.visibility}
                                        onChange={(e) =>
                                            setData(
                                                "visibility",
                                                e.target.value
                                            )
                                        }
                                        className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    >
                                        <option value="public">Public</option>
                                        <option value="private">Private</option>
                                    </select>
                                    <InputError
                                        message={errors.visibility}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <PrimaryButton>
                                        Actualizar Contacto
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
