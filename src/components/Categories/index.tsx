import { BoxCategories } from "../BoxCategories";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles.scss";

export function Categories() {

  const a1 = require("../../assets/icons/7.png")
const a2 = require("../../assets/icons/7.png")
const a3 = require("../../assets/icons/4.png")
const a4 = require("../../assets/icons/1.png")
  const breakPoints = {
    200: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
    1600: { items: 4 },
    1700: { items: 5 },

  };

  return (
    <section className="categories" id="categories">
      <div className="container">
        <h1>Categorias</h1>

        <h2>Categoria 1</h2>
      </div>

      <OwlCarousel
        className="owl-theme"
        items={4}
     
        margin={5}
        stagePadding={5}
        responsive={breakPoints}
      >
        <BoxCategories
          imgLink={a1}
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
          imgLink={a2}
          name="Nome da NFT o mais curto possível"
          link="https://github.com/Hildebrando-Viana-Matos"
        />
        <BoxCategories
        imgLink={a3}
        name="Nome da NFT o mais curto possível"
        link="https://github.com/Hildebrando-Viana-Matos"
      />
         <BoxCategories
        imgLink={a4}
        name="Nome da NFT o mais curto possível"
        link="https://github.com/Hildebrando-Viana-Matos"
      />
      </OwlCarousel>
    </section>
  );
}
