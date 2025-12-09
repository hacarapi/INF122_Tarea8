/*import React, { useState } from "react";
import DepBootStrapCarr from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

// Imágenes navideñas provisionales
const Img1 =
  "https://images.unsplash.com/photo-1607082349566-18784f0b4f33?q=80&w=1200";
const Img2 =
  "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=1200";
const Img3 =
  "https://images.unsplash.com/photo-1513791055932-70379f3d2ae7?q=80&w=1200";
const Img4 =
  "https://images.unsplash.com/photo-1671021175231-9a98b375d35a?q=80&w=1200";

// Estilos navideños en JS
const styles = {
  container: {
    backgroundColor: "#0B3D2E", // verde oscuro navideño
    padding: "40px 0",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)", // brillo dorado
  },
  image: {
    borderRadius: "15px",
    border: "4px solid #C1121F", // rojo navideño
  },
  button: {
    backgroundColor: "#C1121F",
    border: "none",
    fontWeight: "bold",
    fontSize: "18px",
    padding: "10px 25px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(255, 215, 0, 0.6)",
  },
  snowText: {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textShadow: "0 0 10px #FFD700", // dorado
    animation: "snow 1.5s infinite alternate",
    pointerEvents: "none",
  },
};

function Carrusel() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleLaptopClick = () => {
    window.open("https://tusitio.com/laptops", "_blank");
  };

  return (
    <div style={styles.container}>
      <DepBootStrapCarr activeIndex={index} onSelect={handleSelect}>
       
        <DepBootStrapCarr.Item>
          <div className="text-center position-relative">
            <span style={styles.snowText}>🎄 Adornos Navideñas🎄</span>
            <img
              className="w-75 img-fluid"
              style={styles.image}
              src={Img1}
              alt="Escáner"
            />
            <br />
            <button
              style={styles.button}
              className="mt-3"
              onClick={() => navigate("/compra")}
            >
              Comprar 🎁
            </button>
          </div>
        </DepBootStrapCarr.Item>

       
        <DepBootStrapCarr.Item>
          <div className="text-center position-relative">
            <span style={styles.snowText}>🎅 Focos Navideños 🎅</span>
            <img
              className="w-75 img-fluid"
              style={styles.image}
              src={Img2}
              alt="Laptop"
              onClick={handleLaptopClick}
            />
            <button
              style={styles.button}
              className="mt-3"
              onClick={() => navigate("/compra")}
            >
              Comprar
            </button>
          </div>
        </DepBootStrapCarr.Item>

       
        <DepBootStrapCarr.Item>
          <div className="text-center position-relative">
            <span style={styles.snowText}>❄ Arboles navideños ❄</span>
            <img
              className="w-75 img-fluid"
              style={styles.image}
              src={Img3}
              alt="PC"
            />
            <button
              style={styles.button}
              className="mt-3"
              onClick={() => navigate("/compra")}
            >
              Comprar
            </button>
          </div>
        </DepBootStrapCarr.Item>

     
        <DepBootStrapCarr.Item>
          <div className="text-center position-relative">
            <span style={styles.snowText}>🎁 Regalos Perfectos 🎁</span>
            <img
              className="w-75 img-fluid"
              style={styles.image}
              src={Img4}
              alt="Impresora"
            />
            <button
              style={styles.button}
              className="mt-3"
              onClick={() => navigate("/compra")}
            >
              Comprar 🎁
            </button>
          </div>
        </DepBootStrapCarr.Item>
      </DepBootStrapCarr>
    </div>
  );
}

export default Carrusel;
*/

import React, { useState } from "react";
import DepBootStrapCarr from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

// Importar imágenes locales
import ArbolesImg from "./arboles.jpg";
import AdornosImg from "./adornos.jpg";
import BolitasImg from "./bolitas.jpg";
import FocosImg from "./focos.jpg";

// Estilos navideños en JS
const styles = {
  container: {
    backgroundColor: "#C1121F", // rojo navideño
    padding: "40px 0",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)", // brillo dorado
  },
  image: {
    borderRadius: "15px",
    border: "4px solid #FFD700", // dorado navideño
  },
  button: {
    backgroundColor: "#FFD700",
    border: "none",
    fontWeight: "bold",
    fontSize: "18px",
    padding: "10px 25px",
    borderRadius: "8px",
    color: "#C1121F",
    boxShadow: "0 0 10px rgba(255, 215, 0, 0.6)",
  },
  snowText: {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textShadow: "0 0 10px #FFD700", // dorado
    pointerEvents: "none",
  },
};

function Carrusel() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <div style={styles.container}>
      <DepBootStrapCarr activeIndex={index} onSelect={handleSelect}>
        {/* SLIDE 1 - Árboles */}
        <DepBootStrapCarr.Item>
          <div className="text-center position-relative">
            <span style={styles.snowText}>❄ Árboles Navideños ❄</span>
            <img
              className="w-75 img-fluid"
              style={styles.image}
              src={ArbolesImg}
              alt="Árboles"
            />
            <br />
            <button
              style={styles.button}
              className="mt-3"
              onClick={() => navigate("/compra")}
            >
              Comprar 🎁
            </button>
          </div>
        </DepBootStrapCarr.Item>

        {/* SLIDE 2 - Adornos */}
        <DepBootStrapCarr.Item>
          <div className="text-center position-relative">
            <span style={styles.snowText}>🎄 Adornos Navideños 🎄</span>
            <img
              className="w-75 img-fluid"
              style={styles.image}
              src={AdornosImg}
              alt="Adornos"
            />
            <br />
            <button
              style={styles.button}
              className="mt-3"
              onClick={() => navigate("/compra")}
            >
              Comprar 🎁
            </button>
          </div>
        </DepBootStrapCarr.Item>

        {/* SLIDE 3 - Bolitas */}
        <DepBootStrapCarr.Item>
          <div className="text-center position-relative">
            <span style={styles.snowText}>✨ Bolitas Navideñas ✨</span>
            <img
              className="w-75 img-fluid"
              style={styles.image}
              src={BolitasImg}
              alt="Bolitas"
            />
            <br />
            <button
              style={styles.button}
              className="mt-3"
              onClick={() => navigate("/compra")}
            >
              Comprar 🎁
            </button>
          </div>
        </DepBootStrapCarr.Item>

        {/* SLIDE 4 - Focos */}
        <DepBootStrapCarr.Item>
          <div className="text-center position-relative">
            <span style={styles.snowText}>💡 Focos Navideños 💡</span>
            <img
              className="w-75 img-fluid"
              style={styles.image}
              src={FocosImg}
              alt="Focos"
            />
            <br />
            <button
              style={styles.button}
              className="mt-3"
              onClick={() => navigate("/compra")}
            >
              Comprar 🎁
            </button>
          </div>
        </DepBootStrapCarr.Item>
      </DepBootStrapCarr>
    </div>
  );
}

export default Carrusel;
