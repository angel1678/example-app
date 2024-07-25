import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React from "react";

const Create = ({ auth }) => {
    const initialValues = {
        name: "",
        phone: "",
        avatar: null,
        email: "",
        description: "",
        visibility: "",
        detallename: "",
        skills: [],
        emitida_en: null, 
        prescribe_el: "",
    };
    //const [startDate, setStartDate] = useState(new Date());
    const { data, errors, setData, post } = useForm({
        initialValues,
    });
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("contact.store"));

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
            setData({
                ...data,
                emitida_en: value ? value.toISOString().split('T')[0] : null,
            });
        }
        else {
            setData({
                ...data,
                [name]: value,

            });
        }
    };

    const handleDateChange = (date) => {
        console.log(date);
        setData({
            ...data,
            emitida_en: date,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar el formulario
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Crear Contacto
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
                                        name=""
                                        id=""
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
                                        value="Nombre"
                                    />

                                    <TextInput
                                        id="detallename"
                                        type="text"
                                        name="detallename"
                                        placeholder="Por haber aprobado las 200 horas del Diplomado"
                                        value={data.detallename}
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
                                            Analisis Crítico
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
                <DatePicker
                    selected={data.emitida_en}
                    onChange={handleDateChange}
                    dateFormat="dd 'de' MMMM 'de' yyyy"
                    placeholderText="Selecciona una fecha"
                />
            </div>

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
                                        value={data.prescribe_el}
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
                                        Crear Contacto
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

export default Create;
