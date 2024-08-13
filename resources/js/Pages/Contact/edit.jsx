import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect } from "react";
import { Transition } from "@headlessui/react";
import axios from 'axios';
import { format, parseISO, isValid } from "date-fns";
const Edit = ({ auth, contact }) => {
    //console.log(contact);
    const initialValues = {
        name: '',//contact.name,
        phone: '',//contact.phone,
        avatar: null,
        email: '',//contact.email,
        description: '',//contact.description,
        visibility: '',//contact.visibility,
        detallename: '',//contact.detallename,
        skills: '',//contact.skills,
        emitida_en: '',//contact.emitida_en, 
        emitida_en2: '',//contact.emitida_en, 
        prescribe_el: '',//contact.prescribe_el,
    };
    //console.log(contact.emitida_en); 
    const { data, errors, setData, post, recentlySuccessful } = useForm({
        initialValues,
    });
    useEffect(() => {
        setData({
            name: contact.name || '',
            phone: contact.phone || '',
            avatar: null,
            email: contact.email || '',
            description: contact.description || '',
            visibility: contact.visibility || '',
            detallename: contact.detallename || '',
            skills: contact.skills || '',
            //emitida_en: contact.emitida_en || '',
            emitida_en: contact.emitida_en ? parseISO(contact.emitida_en) : null,
            emitida_en2: contact.emitida_en2 ? parseISO(contact.emitida_en2) : null,
            // emitida_en: typeof contact.emitida_en === 'string' 
            // ? parseISO(contact.emitida_en) 
            // : null,
            prescribe_el: contact.prescribe_el || '',
        });
    }, [contact]);
    const submit = (e) => {
        e.preventDefault();
        post(route("contact.update", contact));
        //console.log(data);
    };

    const handleDateChange2 = (date) => {
        console.log('handleDateChange2');
        console.log(date);
        console.log(contact.emitida_en2);
        setData({
            ...data,
//            emitida_en: date,
//            emitida_en: date ? date.toISOString().split('T')[0] : '',
            emitida_en2: typeof date === 'string' 
            ? parseISO(date) 
            : date,
        });
    };
    const handleDateChange = (date) => {
        console.log('handleDateChange');
        console.log(date);
        console.log(contact.emitida_en);
        setData({
            ...data,
//            emitida_en: date,
//            emitida_en: date ? date.toISOString().split('T')[0] : '',
            emitida_en: typeof date === 'string' 
            ? parseISO(date) 
            : date,
        });
    };

    const handleChange = (e) => {
        const { name, value, options } = e.target;
        if (name === "skills") {
            const selectedSkills = Array.from(options)
                .filter((option) => option.selected)
                .map((option) => option.value);
            setData({
                ...data,
                [name]: selectedSkills,
            });
        } else if (name === "emitida_en") {
            //console.log(data.emitida_en);
            /*console.log(parseISO(data.emitida_en));*/
            /*setData({
                ...data,
                emitida_en: value ? value.toISOString().split('T')[0] : null,
            });*/
        } 
        else {
            setData({
                ...data,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(route("contacts.update", contact.id), data);
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

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
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
                                        value={data.name || ""}
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
                                        value={data.phone || ""}
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
                                        value={data.email || ""}
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
                                        //value={data.avatar || ""}
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
                                        value={data.description || ""}
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

                                <div>
                                    <InputLabel
                                        htmlFor="detallename"
                                        value="detallename"
                                    />

                                    <TextInput
                                        id="detallename"
                                        type="text"
                                        name="detallename"
                                        placeholder="John Doe"
                                        value={data.detallename || ""}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "detallename",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.detallename}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="skills">
                                        Habilidades/Conocimientos
                                    </label>
                                    <select
                                        id="skills"
                                        name="skills"
                                        multiple
                                        value={data.skills}
                                        onChange={handleChange}
                                    >
                                        <option value="Analisis Crítico">
                                            Análisis Crítico
                                        </option>
                                        <option value="Gerencia">
                                            Gerencia
                                        </option>
                                        <option value="Administración">
                                            Administración
                                        </option>
                                    </select>
                                </div>


                                <div>
                <label>Emitida en</label>

                {/* <DatePicker
                    selected={data.emitida_en}
                    onChange={handleDateChange}
                    placeholderText="Selecciona una fecha"
                />        */}

                            <DatePicker
    selected={data.emitida_en ? new Date(data.emitida_en) : null}
    onChange={handleDateChange}
    dateFormat="yyyy-MM-dd"
    placeholderText="Selecciona una fecha"
/>    

            </div>

            <div>
                <label>Emitida en2</label>

                {/* <DatePicker
                    selected={data.emitida_en}
                    onChange={handleDateChange}
                    placeholderText="Selecciona una fecha"
                />        */}

                            <DatePicker
    selected={data.emitida_en2 ? new Date(data.emitida_en2) : null}
    onChange={handleDateChange2}
    dateFormat="yyyy-MM-dd"
    placeholderText="Selecciona una fecha"
/>    

            </div>

                                {/* <div>
                                    <label>Emitida en</label>
                                    <DatePicker
    selected={data.emitida_en ? isValid(parseISO(data.emitida_en)) ? parseISO(data.emitida_en) : null : null}
    onChange={handleDateChange}
    dateFormat="yyyy-MM-dd"
    placeholderText="Selecciona una fecha"
    required
/>
                                    {errors.emitida_en && <p>{errors.emitida_en}</p>}
                                </div> */}

            <div>
                                    <InputLabel
                                        htmlFor="prescribe_el"
                                        value="Nombre"
                                    />

                                    <TextInput
                                        id="prescribe_el"
                                        type="text"
                                        name="prescribe_el"
                                        placeholder="Ingresa una fecha o 'No caduca"
                                        value={data.prescribe_el || ""}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "prescribe_el",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.prescribe_el}
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
