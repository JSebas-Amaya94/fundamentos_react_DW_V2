import React from 'react';

const Contador = () => {
    const [contador, setContador] = React.useState(0);
    const aumentar = () => setContador (contador + 1)
    const disminuir = () =>  setContador (contador - 1)
  return (
    <>
        <hr/>
        <h1>Contador</h1>
        <h2>El valor de la variable contador es: {contador}</h2>
        <h1>
          {
            contador < 0 ? "El contador es negativo" : "El contador es positivo"
          }
        </h1>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={disminuir}>Disminuir</button>
    </>
  )
}

export default Contador