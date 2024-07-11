import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useEffect } from 'react'
import { Transition } from '@headlessui/react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { FaLink, FaTrophy, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp, FaEllipsisH } from 'react-icons/fa';
import ImageGalleryComponent from '@/Components/ImageGalleryComponent';

const Show = ({auth, contact}) => {
    console.log(contact)
    const initialValues = {
        name: contact.name,
        phone: contact.phone,
        avatar: null,
        email: contact.email,
        description: contact.description,
        visibility: contact.visibility
    } 
    const {data, errors, setData, post, recentlySuccessful} = useForm({
        initialValues
    })
    const images = [contact.avatar, 'image3.jpg', contact.avatar]; // Agrega las imágenes que quieras

    useEffect(() => {
        setData({
            name: contact.name,
            phone: contact.phone,
            avatar: contact.avatar,
            email: contact.email,
            description: contact.description,
            visibility: contact.visibility
        });
    }, [contact]);
    const submit = (e) => {
        e.preventDefault();
        post(route('contact.update', contact))
        //console.log(data);
    }
    if (!contact) return <div>Loading...</div>;
  return (
    <AuthenticatedLayout
    user={auth.user}
    header={
    <div className="flex justify-between">
    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Actualizar Contacto</h2>
    <Link href={route('contact.index')} >Contactos</Link>
    </div>
    }
>
    <Head title="Dashboard" />
    <Container>
                <Row>
                    <Col>
                    <ImageGalleryComponent images={images} />
                    </Col>
                </Row>
                </Container>
    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">

                <Container>
                <Row>
                    <Col>
                    <ImageGalleryComponent images={images} />
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col md={6} className="text-center">
                    <Image
                        src={`/storage/${contact.thumbnail}`}
                        thumbnail
                        style={{ width: '100%', cursor: 'pointer' }}
                        onClick={() => {
                        // Si deseas mostrar la imagen grande al hacer clic en la miniatura
                        // puedes hacerlo aquí.
                        // setData('avatar', contact.thumbnail); // Esto es un ejemplo, ajusta según tus necesidades
                        }}
                    />
                    </Col>
                    <Col md={6} className="text-center">
                    <Image
                        src={`/storage/${contact.avatar}`}
                        thumbnail
                        style={{ width: '100%' }}
                    />
                    </Col>
                </Row>

                <Row className="my-4">
                    <Col md={6} className="text-center">
                    <button variant="link" href={contact.website_url}>
            <Link /> Visita Nuestro Sitio
          </button>
          <div>{contact.certificate_name}</div>
                    </Col>
                    <Col md={6}>
                    <Card className="text-center">
            <Card.Body>
              <Card.Title>
                <FaTrophy /> Compartir Credenciales
              </Card.Title>
              <Card.Text>
                Muestra esta credencial en tu red social
              </Card.Text>
              <Button variant="outline-primary" className="mr-2">
                <FaLinkedin />
              </Button>
              <Button variant="outline-primary" className="mr-2">
                <FaFacebook />
              </Button>
              <Button variant="outline-primary" className="mr-2">
                <FaTwitter />
              </Button>
              <Button variant="outline-primary" className="mr-2">
                <FaWhatsapp />
              </Button>
              <Button variant="outline-primary">
                <FaEllipsisH />
              </Button>
            </Card.Body>
          </Card>            
                    </Col>
                </Row>


                <Row>
                    <Col xs={6} md={4}>
                    <Image src={`/storage/${contact.avatar}`} rounded />
                    </Col>
                    <Col xs={6} md={4}>
                    <Image src={`/storage/${contact.avatar}`} roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                    <Image src={`/storage/${contact.avatar}`} thumbnail />
                    </Col>
                </Row>
                </Container>

                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>

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
                    <form onSubmit={submit}>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-green-600 text-center">Usuario Actualizado.</p>
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
                            onChange={(e) => setData('name', e.target.value)}
                        />

                        <InputError message={errors.name} className="mt-2" />
                        </div>    
                        <div>
                        <InputLabel htmlFor="phone" value="Telefono" />

                        <TextInput
                            id="phone"
                            type="text"
                            name="phone"
                            placeholder="555-555-5555"
                            value={data.phone}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('phone', e.target.value)}
                        />

                        <InputError message={errors.phone} className="mt-2" />
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
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                        </div>          
                        <div>
                        <InputLabel htmlFor="avatar" value="Avatar" />

                        <TextInput
                            id="avatar"
                            type="file"
                            name="avatar"
                            className="mt-1 block w-full"
                            onChange={(e) => setData('avatar', e.target.files[0])}
                        />

                        <InputError message={errors.avatar} className="mt-2" />
                        </div>  
                        <div>
                        <InputLabel htmlFor="description" value="Description" />

                        <TextInput
                            id="description"
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={data.description}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('description', e.target.value)}
                        />

                        <InputError message={errors.description} className="mt-2" />
                        </div>            
                        <div>
                        <InputLabel htmlFor="visibility" value="visibility" />
                            <select name="visibility" id="visibility" 
                            defaultValue={contact.visibility}
                            onChange={(e) => setData('visibility', e.target.value)}
                            className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        <InputError message={errors.visibility} className="mt-2" />
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
  )
}

export default Show