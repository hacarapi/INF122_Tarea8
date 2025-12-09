import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import icono from "./logo.jpg";
import { Link } from "react-router-dom";

const navStyles = {
  navbar: {
    backgroundColor: "#0F5132",
    borderBottom: "4px solid #C1121F", // Rojo navideño
  },
  link: {
    color: "white",
    fontWeight: "600",
  },
  linkHover: {
    color: "#FFD700", // Dorado
  },
  dropdownItem: {
    fontWeight: "500",
  },
  logo: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "2px solid #C1121F", // rojo navideño
  },
};

// Hack para hover inline (solo para este componente)
const applyHover = (e) => (e.target.style.color = "#FFD700"); // dorado
const removeHover = (e) => (e.target.style.color = "white");

const NavBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="md" style={navStyles.navbar}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Link to="/" className="navbar-brand">
          <img style={navStyles.logo} src={icono} alt="Logo" />
        </Link>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link
              to="/"
              className="nav-link"
              style={navStyles.link}
              onMouseEnter={applyHover}
              onMouseLeave={removeHover}
            >
              Inicio
            </Link>

            <NavDropdown
              title={<span style={navStyles.link}>Productos</span>}
              id="collasible-nav-dropdown"
              menuVariant="light"
            >
              <Link
                to="/Adornos"
                className="dropdown-item"
                style={navStyles.dropdownItem}
              >
                Adornos
              </Link>
              <Link
                to="/Bolitas"
                className="dropdown-item"
                style={navStyles.dropdownItem}
              >
                Bolitas
              </Link>
              <Link
                to="/Arboles"
                className="dropdown-item"
                style={navStyles.dropdownItem}
              >
                Arboles
              </Link>
              <Link
                to="/Focos"
                className="dropdown-item"
                style={navStyles.dropdownItem}
              >
                Focos
              </Link>
            </NavDropdown>

            <Link
              className="nav-link"
              to="/preguntas"
              style={navStyles.link}
              onMouseEnter={applyHover}
              onMouseLeave={removeHover}
            >
              Preguntas
            </Link>

            <Link
              className="nav-link"
              to="/contactos"
              style={navStyles.link}
              onMouseEnter={applyHover}
              onMouseLeave={removeHover}
            >
              Contactanos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
