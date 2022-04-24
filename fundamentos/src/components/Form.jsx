import { nanoid } from "nanoid";
import React from "react";

const Form = () => {
  const [fruta, setFruta] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [listafrutas, setListaFrutas] = React.useState([]);
  const [id, setId] = React.useState ('');

  const guardarFrutas = (e) => {
    e.preventDefault();

    if (!fruta.trim()) {
      alert("Digite la fruta");
      return;
    }

    if (!descripcion.trim()) {
      alert("Digite la descripcion");
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
  };

const editar = item => {
  setFruta(item.nombreFruta);
  setDescripcion(item.nombreDescripcion);
}

const eliminaritem = id => {
  const aux = listafrutas.filter(item => item.id !== id)
  setListaFrutas(aux)
};

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
          <h4 className="text-center"></h4>
          <form onSubmit={guardarFrutas}>
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
            <button className="btn btn-primary btn-block" type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
