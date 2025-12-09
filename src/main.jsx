import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
/*Importa el archivo CSS de Bootstrap Aplicando los estilos globalmente*/
import "bootstrap/dist/css/bootstrap.min.css";
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
