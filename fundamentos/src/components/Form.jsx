import { nanoid } from "nanoid";
import React, { useEffect } from "react" ;

const Form = () => {
  const [fruta, setFruta] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [listafrutas, setListaFrutas] = React.useState([]);
  const [id, setId] = React.useState ('');
  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [error, setError] = React.useState(null);

  const guardarFrutas = (e) => {
    e.preventDefault();

    if (!fruta.trim()) {
      setError("Digite la fruta");
      return;
    }

    if (!descripcion.trim()) {
      setError("Digite la descripcion");
      return
    }

    setListaFrutas([
      ...listafrutas,
      {
        id: nanoid(),
        nombreFruta: fruta,
        nombreDescripcion: descripcion,
      },
    ]);

    e.target.reset();
    setFruta("");
    setDescripcion("");
    setError(null); 
  };

const editar = item => {
  setFruta(item.nombreFruta);
  setDescripcion(item.nombreDescripcion);
  setModoEdicion(true);
  setId(item.id);
}

const editarFrutas = e => {
  e.preventDefault();

  if (!fruta.trim()) {
    setError("Digite la fruta");
    return;
  }

  if (!descripcion.trim()) {
    setError("Digite la descripcion");
    return
  }

  const arrayEditado= listafrutas.map(
    item => item.id ===id ? {id:id,nombreFruta:fruta,nombreDescripcion:descripcion}: item
  )

  setListaFrutas(arrayEditado);
  setFruta('');
  setDescripcion('');
  setId('');
  setModoEdicion(false);
  setError(null);
}

const eliminaritem = id => {
  const aux = listafrutas.filter(item => item.id !== id)
  setListaFrutas(aux)
};

const cancelar = () => {
  setModoEdicion(false);
  setFruta('');
  setId('');
  setDescripcion('');
  setError(null);
}

return (
    <div>
      <h1 className="text-center">CRUB</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Listado de frutas</h4>
          <br />
          <ul className="list-group">
            {listafrutas.map((item) => (
              <li className="list-group-item" key={item.id}>
                <spam className="lead">
                  {item.nombreFruta} <br /> {item.nombreDescripcion}
                </spam>
                <button className="btn btn-danger btn-sm float-end mx-2" onClick={ ()=> eliminaritem(item.id) }>
                  Eliminar
                </button>
                <button className="btn btn-warning btn-sm float-end" onClick={()=>editar(item)}>
                  Editar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {
              modoEdicion ? 'Editar fruta' : 'Agregar frutas'
            }
          </h4>
          <form onSubmit={modoEdicion ? editarFrutas: guardarFrutas}>
            {
              error ? <span className="text-danger">{error}</span> : null
            }
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Ingrese Su Fruta"
              onChange={(e) => setFruta(e.target.value)}
              value={fruta}
            />
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Ingrese Descripcion"
              onChange={(e) => setDescripcion(e.target.value)}
              value={ descripcion}
            />

            {
              modoEdicion ?
              (
                <>
                  <button 
                    className="btn btn-warning btn-block" 
                    type="submit">
                      Editar
                  </button>
                  <button 
                    className="btn btn-dark btn-block" 
                    type="submit"
                    onClick={() => cancelar()}>
                     Cancelar
                  </button>
                </>
              )
              :
              <button className="btn btn-primary btn-block" type="submit">
              Agregar
              </button>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
