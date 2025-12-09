import React, { useState } from "react";

const Venta = () => {
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Vendiste ${cantidad} unidad(es) de ${producto} por $${precio}`);
    // Después de vender, vamos de regreso a la página de compras
    window.location.href = "/compra";
  };

  return (
    <div className="container mt-5">
      <h2>Formulario de Venta</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="producto" className="form-label">
            Producto:
          </label>
          <input
            type="text"
            id="producto"
            className="form-control"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cantidad" className="form-label">
            Cantidad:
          </label>
          <input
            type="number"
            id="cantidad"
            className="form-control"
            value={cantidad}
            min="1"
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="precio" className="form-label">
            Precio:
          </label>
          <input
            type="number"
            id="precio"
            className="form-control"
            value={precio}
            min="0"
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Vender
        </button>
      </form>
    </div>
  );
};

export default Venta;
