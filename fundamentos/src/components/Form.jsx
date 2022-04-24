import React from "react";

const Form = () => {
  const [fruta, setFruta] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [listafrutas, setListaFrutas] = React.useState([]);

  const guardarFrutas = (e) => {
    e.preventDefault();

    if (!fruta.trim()) {
      alert("Digite la fruta");
      return;
    }

    if (!descripcion.trim()) {
      alert("Digite la descripcion");
    }

    setListaFrutas([
      ...listafrutas,
      {
        nombreFruta: fruta,
        nombreDescripcion: descripcion,
      },
    ]);

    e.target.reset();
    setFruta("");
    setDescripcion("");
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
            {listafrutas.map((item, index) => (
              <li className="list-group-item" key={index}>
                <spam className="lead">
                  {item.nombreFruta} <br /> {item.nombreDescripcion}
                </spam>
                <button className="btn btn-danger btn-sm float-end mx-2">
                  Eliminar
                </button>
                <button className="btn btn-warning btn-sm float-end">
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
            />
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Ingrese Descripcion"
              onChange={(e) => setDescripcion(e.target.value)}
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
