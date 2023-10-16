import React, { useState } from "react";
import Lista from "../lista.jsx";
import './persona.css';

const Persona = () => {

    const [persona, setPersona] = useState({ nombre: '', apellido: '', nacionalidad: '' });

    const handleChange = (evento) => {
        const { name, value } = evento.target;
        setPersona({ ...persona, [name]: value });
    };

    const handleSubmit = async (evento) => {
        evento.preventDefault();

        // Realiza una solicitud POST
        try {
            const response = await fetch('http://localhost:3000/lista/nuevo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(persona),
            });

            if (response.ok) {
                // Limpia el formulario después de un envío exitoso
                setPersona({ nombre: '', apellido: '', nacionalidad: '' });

              
            } else {
                // Manejo de errores
                console.log('Error al agregar personas');
            }
        } catch (error) {
            console.error('Error de red: ', error);
        }
    };

    return (
        <div className="AgregarPersona list-container">
            <h2>Agregar Persona Nueva</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={persona.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={persona.apellido}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="nacionalidad">Nacionalidad:</label>
                    <input
                        type="text"
                        id="nacionalidad"
                        name="nacionalidad"
                        value={persona.nacionalidad}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Agregar</button>
            </form>
            <Lista />
        </div>
    );
}

export default Persona;
