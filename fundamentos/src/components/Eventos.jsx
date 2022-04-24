import React from 'react'

const Eventos = () => {
    const [texto, setText] = React.useState('Texto Inicial');
    const eventoClick = () => {
        const aux = 'Texto Inicial';
        if (texto == aux){
            setText ('Cambiando el texto...');
            return
        }
        setText(aux);
    }
  return (
    <>
        <h2>{texto}</h2>
        <button onClick={eventoClick}>Click!</button>
    </>
  )
}

export default Eventos