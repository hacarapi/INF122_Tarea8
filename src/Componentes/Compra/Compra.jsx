import React, { useState } from "react";
import "./Compra.css";

const Compra = () => {
  const [ciudad, setCiudad] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const handleAceptar = (e) => {
    e.preventDefault();
    alert(
      `Venta registrada:\nCiudad: ${ciudad}\nObservaciones: ${observaciones}`
    );
  };

  const handleCancelar = () => {
    setCiudad("");
    setObservaciones("");
  };

  return (
    <div className="container mt-5 formulario-compra">
      <h2 className="titulo-venta">Venta de Portátiles</h2>
      <form className="mt-4" onSubmit={handleAceptar}>
        <div className="mb-3">
          <label className="form-label">Nombre Completo del Cliente</label>
          <input
            type="text"
            className="form-control"
            value="PEDRO SANDOVAL"
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Producto</label>
          <input
            type="text"
            className="form-control"
            value="Laptop Dell NB Inspiron"
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Precio (Bs.)</label>
          <input type="text" className="form-control" value="7000" readOnly />
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha de venta</label>
          <input
            type="text"
            className="form-control"
            value="06/11/2025"
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ciudad</label>
          <input
            type="text"
            className="form-control"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
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
