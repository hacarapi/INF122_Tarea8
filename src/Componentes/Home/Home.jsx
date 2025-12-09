/*import React from "react";
import CarrucelDeImagenes from "./Carrusel/Carrusel";
import "./Home.css";
import { Link } from "react-router-dom";

// URLs públicas para los productos
const Escaners = "https://via.placeholder.com/400x300.png?text=Escaner";
const Portatiles = "https://via.placeholder.com/400x300.png?text=Laptop";
const Pc = "https://via.placeholder.com/400x300.png?text=PC";
const Impresoras = "https://via.placeholder.com/400x300.png?text=Impresora";

const Home = () => {
  return (
    <div className="fondo">
      <CarrucelDeImagenes />
      <div className="container fondo mt-4">
        <div className="row row-cols-2">
          <div className="col-md-6">
            <Link to="/Escaners" className="enlace">
              <img
                className="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={Escaners}
                alt="Escáner"
              />
              <h6>Escaners</h6>
            </Link>
          </div>

          <div className="col-md-6">
            <Link to="/Portatiles" className="enlace">
              <img
                className="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={Portatiles}
                alt="Portátiles"
              />
              <h6>Portatiles</h6>
            </Link>
          </div>

          <div className="col-md-6">
            <Link to="/Pcescritorio" className="enlace">
              <img
                className="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={Pc}
                alt="PC de escritorio"
              />
              <h6>Pc-Escritorio</h6>
            </Link>
          </div>

          <div className="col-md-6">
            <Link to="/Impresoras" className="enlace">
              <img
                className="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={Impresoras}
                alt="Impresora"
              />
              <h6>Impresoras</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
*/

import React from "react";
import CarrucelDeImagenes from "./Carrusel/Carrusel";
import "./Home.css";
import { Link } from "react-router-dom";

// Importar imágenes locales
import ArbolesImg from "./Imagenes/arboles_nav.jpg";
import AdornosImg from "./Imagenes/adornos_na.jpg";
import BolitasImg from "./Imagenes/bolas_na.jpg";
import FocosImg from "./Imagenes/focos_na.jpg";

const Home = () => {
  return (
    <div className="fondo">
      <CarrucelDeImagenes />

      <div className="container fondo mt-4">
        <div className="row row-cols-2">
          {/* Árboles */}
          <div className="col-md-6">
            <Link to="/Arboles" className="enlace">
              <img
                className="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={ArbolesImg}
                alt="Arboles"
              />
              <h6>Árboles</h6>
            </Link>
          </div>

          {/* Adornos */}
          <div className="col-md-6">
            <Link to="/Adornos" className="enlace">
              <img
                className="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={AdornosImg}
                alt="Adornos"
              />
              <h6>Adornos</h6>
            </Link>
          </div>

          {/* Bolitas */}
          <div className="col-md-6">
            <Link to="/Bolitas" className="enlace">
              <img
                className="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={BolitasImg}
                alt="Bolitas"
              />
              <h6>Bolitas</h6>
            </Link>
          </div>

          {/* Focos */}
          <div className="col-md-6">
            <Link to="/Focos" className="enlace">
              <img
                className="w-70 h-70 d-inline-block img-fluid img-home bd-placeholder-img"
                src={FocosImg}
                alt="Focos"
              />
              <h6>Focos</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
