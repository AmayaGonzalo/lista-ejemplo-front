import React, { useState, useEffect} from "react";
import './lista.css'

const Lista = ({ updateLista }) => {

    const [personas, setPersonas] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:3000/lista')
    //     .then( resp => resp.json())
    //     .then(data=> setPersonas(data))
    //     .catch(error => {
    //         console.log('No se pudo obtener la lista de personas', error)
    //     });
    // }, [updateLista] );
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/lista');
                if (response.ok) {
                    const data = await response.json();
                    setPersonas(data);
                } else {
                    throw new Error('Error al obtener la lista de personas');
                }
            } catch (error) {
                console.error('Error de red: ', error);
            }
        };

        fetchData(); // Realiza una solicitud GET al cargar el componente

        // Agrega un efecto para actualizar la lista cuando updateLista cambie
        if (updateLista) {
            fetchData(); // Realiza una nueva solicitud GET cuando updateLista cambie
        }
    }, [updateLista]);


    return(
        <div className="list-container">

            <h1>Personas</h1>
            <div className="lista">
                <ul>
                    {personas.map((persona,index) => (
                        <li key={index}>{persona.nombre} - {persona.apellido} - {persona.nacionalidad}</li>
                    ))}
                </ul>   
            </div>    
        
        </div>
    )
}

export default Lista;