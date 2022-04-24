import { nanoid } from "nanoid";
import React, { useEffect } from "react" ;
import '../styles/Form.css';

const Form = () => {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [residencia, setResidencia] = React.useState("");
  const [empresa, setEmpresa] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [webLink,setWebLink] = React.useState ("");

  const [listaContactos, setListaContactos] = React.useState([]);

  const [id, setId] = React.useState ('');
  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [error, setError] = React.useState(null);

  const addContacto = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      setError("Introduce nombre!");
      return;
    }

    if (!apellido.trim()) {
      setError("Ingrece apellido!");
      return
    }

    if (!residencia.trim()) {
      setError("Ingrece residencia!");
      return
    }

     if (!email.trim()) {
      setError("Introduce email!");
      return
    }

    if (!phone.trim()) {
      setError("Introduce numero de contacto!");
      return
    }

    setListaContactos([
      ...listaContactos,
      {
        id: nanoid(),
        nombreCliente: nombre,
        apellidoCliente: apellido,
        residenciaCliente: residencia,
        empresaCliente: empresa,
        emailCliente: email,
        phoneCliente: phone,
        webSiteCliente: webLink,
      },
    ]);

    e.target.reset();
    setNombre("");
    setApellido("");
    setResidencia("");
    setEmpresa("");
    setEmail("");
    setPhone("");
    setWebLink("");

    setError(null); 
  };

const editar = item => {
  setNombre(item.nombreCliente);
  setApellido(item.apellidoCliente);
  setResidencia(item.residenciaCliente);
  setEmpresa(item.empresaCliente);
  setEmail(item.emailCliente);
  setPhone(item.phoneCliente);
  setWebLink(item.webSiteCliente);
  setModoEdicion(true);
  setId(item.id);
}

const editarContactos = e => {
  e.preventDefault();

  if (!nombre.trim()) {
    setError("Introduce nombre!");
    return;
  }

  if (!apellido.trim()) {
    setError("Ingrece apellido!");
    return
  }

  if (!residencia.trim()) {
    setError("Ingrece residencia!");
    return
  }

   if (!email.trim()) {
    setError("Introduce email!");
    return
  }

  if (!phone.trim()) {
    setError("Introduce numero de contacto!");
    return
  }

  const arrayEditado= listaContactos.map(
    item => item.id ===id ? {
      id:id,
      nombreCliente: nombre,
      apellidoCliente: apellido,
      residenciaCliente: residencia,
      empresaCliente: empresa,
      emailCliente: email,
      phoneCliente: phone,
      webSiteCliente: webLink
    }: item
  )

  setListaContactos(arrayEditado);
  setNombre('');
  setApellido('');
  setResidencia('');
  setEmpresa('');
  setEmail('');
  setPhone('');
  setWebLink('');

  setId('');
  setModoEdicion(false);
  setError(null);
}

const eliminaritem = id => {
  const aux = listaContactos.filter(item => item.id !== id)
  setListaContactos(aux)
  setModoEdicion(false);
  setNombre('');
  setApellido('');
  setResidencia('');
  setEmpresa('');
  setEmail('');
  setPhone('');
  setWebLink('');
  setId('');
  setError(null);
};

const cancelar = () => {
  setModoEdicion(false);
  setNombre('');
  setApellido('');
  setResidencia('');
  setEmpresa('');
  setEmail('');
  setPhone('');
  setWebLink('');
  setId('');
  setError(null);
}

return (
    <div>
      <h1 className="text-center">Agendis</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Contactos</h4>
          <br />
          <ul className="list-group">
            {listaContactos.map((item) => (
              <li className="list-group-item" key={item.id}>
                <spam className="lead">
                  Nombre: {item.nombreCliente} {item.apellidoCliente} <br />
                  Residencia: {item.residenciaCliente} <br />
                  Empresa: {item.empresaCliente} <br />
                  Email: {item.emailCliente} <br />
                  Phone: {item.phoneCliente} <br />
                  {item.webSiteCliente} <br />
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
              modoEdicion ? 'Editar contacto' : 'Nuevo contacto'
            }
          </h4>
          <form onSubmit={modoEdicion ? editarContactos: addContacto}>
            {
              error ? <span className="text-danger">{error}</span> : null
            }
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Apellido"
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
            />

            <input
              className="form-control mb-2"
              type="text"
              placeholder="Residencia"
              onChange={(e) => setResidencia(e.target.value)}
              value={residencia}
            />

            <input
              className="form-control mb-2"
              type="text"
              placeholder="Empresa"
              onChange={(e) => setEmpresa(e.target.value)}
              value={empresa}
            />

            <input
              className="form-control mb-2"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              className="form-control mb-2"
              type="text"
              placeholder="Numero de contacto"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />

            <input
              className="form-control mb-2"
              type="text"
              placeholder="Sitio Web"
              onChange={(e) => setWebLink(e.target.value)}
              value={webLink}
            />

            {
              modoEdicion ?
              (
                <>
                  <button 
                    className="btn btn-primary btn-block" 
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
