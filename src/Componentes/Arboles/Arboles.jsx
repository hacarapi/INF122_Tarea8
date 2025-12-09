import React, { useState } from "react";
import { Link } from "react-router-dom";
import DepBootStrapCarr from "react-bootstrap/Carousel";
import "./Arboles.css";

export default function Arboles() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const styles = {
    image: {
      borderRadius: "15px",
      border: "4px solid #0B6623",
      boxShadow: "0 0 15px rgba(255, 223, 0, 0.5)",
    },
    button: {
      backgroundColor: "#0B6623",
      border: "none",
      fontWeight: "bold",
      fontSize: "18px",
      padding: "10px 25px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(255, 223, 0, 0.6)",
    },
    caption: {
      marginTop: "15px",
      fontWeight: "bold",
      color: "#0B6623",
    },
  };

  // URLs de árboles navideños
  const arboles = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2LCcv_0MgAOPLkMqbVyrsZzPU5M4H76roQ&s",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWO348X8DiHgGlQ9MnUDodObWCjPGxYzO-Ww&s",
      alt: "Árbol Navideño 2",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBcZEyUpYnqlicpsqDBq1YMEmyRsZeARzqg&s",
      alt: "Árbol Navideño 3",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 style={{ textAlign: "center", color: "#0B6623" }}>
        Árboles Navideños
      </h2>
      <DepBootStrapCarr
        activeIndex={index}
        onSelect={handleSelect}
        className="mt-3"
      >
        {arboles.map((arbol, idx) => (
          <DepBootStrapCarr.Item key={idx}>
            <img
              className="d-block w-100"
              src={arbol.img}
              alt={arbol.alt}
              style={styles.image}
            />
            <DepBootStrapCarr.Caption style={styles.caption}>
              {arbol.alt}
            </DepBootStrapCarr.Caption>
          </DepBootStrapCarr.Item>
        ))}
      </DepBootStrapCarr>

      <div className="text-center mt-4">
        <Link to="/" style={styles.button}>
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
