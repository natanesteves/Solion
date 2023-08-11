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
  const howItWorks = useRef(null);
  const whatWeDo = useRef(null);
  const categories = useRef(null);
  const history = useRef(null);

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
                Início
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToSection(propose)} to={"/#propose"}>
                Propósito
              </Link>
            </li>
         
            <li>
              <Link onClick={() => scrollToSection(whatWeDo)} to={"/#whatWeDo"}>
                O que fazemos?
              </Link>
            </li>
            <li>
              <Link
                onClick={() => scrollToSection(categories)}
                to={"/#categories"}
              >
                Categoria
              </Link>
            </li>
            
          </ul>
        </nav>
      </div>

      <div className="container">
        <div className="line"></div>
      </div>

      <h3 className="copyright">
        © Todos os direitos reservados a
      </h3>
    </footer>
  );
}
