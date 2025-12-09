import React, { useState } from "react";
import "./Comprar.css";

const Compra = ({
  cliente = "Huber Acarapi Mamani",
  producto = "Adorno Navideño",
  precio = 50,
  fecha = new Date().toLocaleDateString(), // fecha actual
}) => {
  const [ciudad, setCiudad] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const handleAceptar = (e) => {
    e.preventDefault();
    alert(
      `Venta registrada:\nCliente: ${cliente}\nProducto: ${producto}\nPrecio: ${precio} Bs.\nFecha: ${fecha}\nCiudad: ${ciudad}\nObservaciones: ${observaciones}`
    );
    setCiudad("");
    setObservaciones("");
  };

  const handleCancelar = () => {
    setCiudad("");
    setObservaciones("");
  };

  return (
    <div className="container mt-5 formulario-compra">
      <h2 className="titulo-venta">Formulario de Compra</h2>
      <form className="mt-4" onSubmit={handleAceptar}>
        <div className="mb-3">
          <label className="form-label">Nombre del Cliente</label>
          <input
            type="text"
            className="form-control"
            value={cliente}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Producto</label>
          <input
            type="text"
            className="form-control"
            value={producto}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Precio (Bs.)</label>
          <input type="text" className="form-control" value={precio} readOnly />
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input type="text" className="form-control" value={fecha} readOnly />
        </div>

        <div className="mb-3">
          <label className="form-label">Ciudad</label>
          <input
            type="text"
            className="form-control"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            placeholder="Ingrese su ciudad"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Observaciones</label>
          <textarea
            className="form-control"
            rows="3"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            placeholder="Ingrese alguna observación"
          ></textarea>
        </div>

        <div className="d-flex justify-content-center gap-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancelar}
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-success">
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Compra;
