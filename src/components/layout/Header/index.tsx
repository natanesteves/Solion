// Icons
import { SiInstagram, SiTiktok, SiDiscord, SiTwitter } from "react-icons/si";

// React
import { useState, useRef } from "react";

// React Router Dom
import { Link } from "react-router-dom";

// Styles
import "./styles.scss";

// Icon
import { FiMenu, FiX } from "react-icons/fi";


export function Header() {
  const header = useRef(null);
  const propose = useRef(null);
  const videos = useRef(null);
  const whatWeDo = useRef(null);
  const preseantation = useRef(null);
  const history = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  function handleMenuIsOpen() {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(true);
    }
  }

  return (
    <header id="header">
      <div className="container">
        <div className="logo"></div>
        
        <button
          className={`menuButton ${menuIsOpen ? "active" : ""}`}
          onClick={handleMenuIsOpen}
        >
          {menuIsOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div className="container">
        <nav className="desktop">
          <ul>
            <li onClick={handleMenuIsOpen}>
              <Link onClick={() => scrollToSection(header)} to={"/"}>
               Home
              </Link>
            </li>
            <li onClick={handleMenuIsOpen}>
              <Link onClick={() => scrollToSection(propose)} to={"/#propose"}>
                Vantagens
              </Link>
            </li><li onClick={handleMenuIsOpen}>
              <Link onClick={() => scrollToSection(preseantation)} to={"/#preseantation"}>
               Projetos
              </Link>
            </li>
            
            <li onClick={handleMenuIsOpen}>
              <Link onClick={() => scrollToSection(videos)} to={"/videos"}>
                Nossos Serviços
              </Link>
            </li>
            
            
          </ul>
        </nav>
        {menuIsOpen && (
          <nav className={`mobile ${menuIsOpen ? "isMenu" : ""}`}>
            <ul>
              <li onClick={handleMenuIsOpen}>
                <Link onClick={() => scrollToSection(header)} to={"/"}>
                  Home
                </Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link onClick={() => scrollToSection(propose)} to={"/#propose"}>
                  Vantagens
                </Link>
              </li>
              
              <li onClick={handleMenuIsOpen}>
                <Link
                  onClick={() => scrollToSection(whatWeDo)}
                  to={"/#preseantation"}
                >
                 Projetos
                </Link>
              </li>
              <li onClick={handleMenuIsOpen}>
                <Link onClick={() => scrollToSection(videos)} to={"/#videos"}>
                  Nossos Serviços
                </Link>
              </li>

              
             
            </ul>
          </nav>
        )}
      </div>

      <div className="container">
        
      </div>
    </header>
  );
}
