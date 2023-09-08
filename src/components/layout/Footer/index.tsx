// React
import { useRef } from "react";

// Icons
import { SiInstagram, SiTiktok, SiDiscord, SiTwitter } from "react-icons/si";

// React Router Dom
import { Link } from "react-router-dom";

// Styles
import "./styles.scss";

var OpenSea = require("../../../assets/icons/opensea_white.png");

export function Footer() {
  const header = useRef(null);
  const propose = useRef(null);
  const transparency = useRef(null);
  const preseantation = useRef(null);
  const videos = useRef(null);
  const asuamae = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="container">
        
        <div className="socials">
          <a href="" className="boxSocials">
            <SiInstagram />
          </a>
         
          <a href="" className="boxSocials">
            <SiTwitter />
          </a>
          
        </div>
      </div>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link onClick={() => scrollToSection(header)} to={"/"}>
               Home
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection(asuamae)} to={"/#asuamae"}>
                Vantagens
              </Link>
            </li>
         
            <li>
              <Link onClick={() => scrollToSection(preseantation)} to={"/#preseantation"}>
              Quem Somos
              </Link>
            </li>
            <li >
              <Link onClick={() => scrollToSection(videos)} to={"/videos"}>
               Nosso Serviços
              </Link>
            </li>
            <li >
              <Link onClick={() => scrollToSection(transparency)} to={"/transparency"}>
               Trabalhe Conosco
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <div className="line"></div>
      </div>

    
    </footer>
  );
}
