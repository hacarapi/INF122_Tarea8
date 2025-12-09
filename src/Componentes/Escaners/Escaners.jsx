/*import React from "react";
import { Link } from "react-router-dom";
import "./Escaners.css";
//El nombre Escaners puede ser diferente
export default function Escaners() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 formato1">
            <div class="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7260-2.jpg"
                class="card-img-top"
                alt="Waterfall"
              />
              <div class="card-body">
                <h5 class="card-title">Escaner Fujitsu</h5>
                <p class="card-text">Modelo: FI-7260</p>
                <Link to="/venta" data-mdb-ripple-init class="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato1">
            <div class="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7280-2.jpg"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />

              <div class="card-body">
                <h5 class="card-title">Escaner Fujitsu</h5>
                <p class="card-text">Modelo: FI-7800</p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato1">
            <div class="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/FI7600-2.jpg"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Escaner Fujitsu</h5>
                <p class="card-text">Modelo: FI-7600</p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="/" data-mdb-ripple-init class="btn btn-warning">
        Volver a la pagina Principal
      </a>
    </div>
  );
}
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DepBootStrapCarr from "react-bootstrap/Carousel";
import "./Escaners.css";

export default function Escaners() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Escáneres Disponibles</h2>

      <DepBootStrapCarr activeIndex={index} onSelect={handleSelect}>
        {/* Imagen 1 */}
        <DepBootStrapCarr.Item>
          <img
            className="w-75 h-50 d-inline-block img-fluid rounded"
            src="https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7260-2.jpg"
            alt="Escáner Fujitsu FI-7260"
          />
          <DepBootStrapCarr.Caption>
            <h5>Escáner Fujitsu FI-7260</h5>
            <p>Alta resolución</p>
            <Link to="/comprar" className="btn btn-primary">
              Comprar
            </Link>
          </DepBootStrapCarr.Caption>
        </DepBootStrapCarr.Item>

        {/* Imagen 2 */}
        <DepBootStrapCarr.Item>
          <img
            className="w-75 h-50 d-inline-block img-fluid rounded"
            src="https://intecsa.com.bo/wp-content/uploads/2024/07/ESCANER-FUJITSU-FI-7280-2.jpg"
            alt="Escáner Fujitsu FI-7280"
          />
          <DepBootStrapCarr.Caption>
            <h5>Escáner Fujitsu FI-7280</h5>
            <p>Escaneo rápido</p>
            <Link to="/comprar" className="btn btn-primary">
              Comprar
            </Link>
          </DepBootStrapCarr.Caption>
        </DepBootStrapCarr.Item>

        {/* Imagen 3 */}
        <DepBootStrapCarr.Item>
          <img
            className="w-75 h-50 d-inline-block img-fluid rounded"
            src="https://intecsa.com.bo/wp-content/uploads/2024/07/FI7600-2.jpg"
            alt="Escáner Fujitsu FI-7600"
          />
          <DepBootStrapCarr.Caption>
            <h5>Escáner Fujitsu FI-7600</h5>
            <p>Compacto y eficiente</p>
            <Link to="/comprar" className="btn btn-primary">
              Comprar
            </Link>
          </DepBootStrapCarr.Caption>
        </DepBootStrapCarr.Item>

        {/* Imagen 4 */}
        <DepBootStrapCarr.Item>
          <img
            className="w-75 h-50 d-inline-block img-fluid rounded"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Document_scanner.jpg"
            alt="Document Scanner"
          />
          <DepBootStrapCarr.Caption>
            <h5>Document Scanner</h5>
            <p>Profesional ADF</p>
            <Link to="/comprar" className="btn btn-primary">
              Comprar
            </Link>
          </DepBootStrapCarr.Caption>
        </DepBootStrapCarr.Item>

        {/* Imagen 5 */}
        <DepBootStrapCarr.Item>
          <img
            className="w-75 h-50 d-inline-block img-fluid rounded"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Fujitsu_Scanner.jpg"
            alt="Fujitsu Scanner"
          />
          <DepBootStrapCarr.Caption>
            <h5>Escáner Fujitsu Alta Velocidad</h5>
            <p>Ideal para oficinas</p>
            <Link to="/comprar" className="btn btn-primary">
              Comprar
            </Link>
          </DepBootStrapCarr.Caption>
        </DepBootStrapCarr.Item>
      </DepBootStrapCarr>

      <div className="mt-4">
        <Link to="/" className="btn btn-warning">
          Volver a la página Principal
        </Link>
      </div>
    </div>
  );
}
