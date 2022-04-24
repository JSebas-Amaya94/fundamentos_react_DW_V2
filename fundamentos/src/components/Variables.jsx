import React from 'react';

const Variables = () => {
    const saludo = "hola mundo";
    const imagen = 'https://picsum.photos/300'
    const altDescription = "Esto es una imagen"
    return (
        <>
        <h1>{saludo}</h1>
        <img src = {imagen} alt = {altDescription}/>
        </>
    )
}

export default Variables