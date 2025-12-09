import React, { useState } from "react";
/*Importa el componente Carousel de la librería react-bootstrap y le asignamos un nombre local*/
import DepBootStrapCarr from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom"; // para redirigir

function Carrusel() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // URLs externas para las imágenes
  const urlLaptop = "https://tusitio.com/imagenes/laptop.jpg"; // reemplaza por tu URL
  const urlEscaner = "https://tusitio.com/imagenes/escaner.jpg";
  const urlPC = "https://tusitio.com/imagenes/pc.jpg";

  // Función al presionar la laptop
  const handleLaptopClick = () => {
    navigate("/Portatiles"); // redirige a la ruta de laptops
    // O abrir URL externa:
    // window.open("https://tusitio.com/laptops", "_blank");
  };

  return (
    <DepBootStrapCarr activeIndex={index} onSelect={handleSelect}>
      <DepBootStrapCarr.Item>
        <img
          className="w-75 h-50 d-inline-block img-fluid rounded"
          src={urlLaptop}
          alt="Laptop"
          style={{ cursor: "pointer" }}
          onClick={handleLaptopClick}
        />
      </DepBootStrapCarr.Item>

      <DepBootStrapCarr.Item>
        <img
          className="w-75 h-50 d-inline-block img-fluid rounded"
          src={urlEscaner}
          alt="Escaner"
        />
      </DepBootStrapCarr.Item>

      <DepBootStrapCarr.Item>
        <img
          className="w-75 h-50 d-inline-block img-fluid rounded"
          src={urlPC}
          alt="PC de escritorio"
        />
      </DepBootStrapCarr.Item>
    </DepBootStrapCarr>
  );
}

export default Carrusel;
