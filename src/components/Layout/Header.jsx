import React from "react";
import { useRef } from "react";
import "../../App.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo-white-footer.png";

export default function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="nav-header">
      <a href="#" class="footer-logo">
        <img src={logo} alt="Logo Dr. Thiago" className="nav-logo" />
      </a>
      <nav className="navbar" ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Sobre mim</a>
        <a href="/#">Nosso espaço</a>
        <a href="/#">Tratamentos</a>
        <a href="/#">Contato</a>
        <a href="/#">Agendar Consulta</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
