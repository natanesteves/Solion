import { BoxTeam } from "../../BoxTeam";
import "./styles.scss";

export function OurTeam() {
const a1 = require("../../../assets/icons/2.png")
const a2 = require("../../../assets/icons/6.png")
const a3 = require("../../../assets/icons/9.png")
const a4 = require("../../../assets/icons/8.png")
const a5 = require("../../../assets/icons/3.png")
const a6 = require("../../../assets/icons/7.png")
const a7 = require("../../../assets/icons/10.png")

  return (
    <section className="ourTeam">
      <div className="container">
       

        <div className="contentOurTeam">
          <BoxTeam
         
            imgLink={a1}
            name="Economia de energia"
            office=""
            
          />
          <BoxTeam
            imgLink={a2}
            name="Baixa manutenção"
            office=""
           
          />
          <BoxTeam
            imgLink={a3}
            name="Energia sustentável"
            office=""
            
          />
           <BoxTeam
            imgLink={a4}
            name="Valorização do imóvel"
            office=""
            
          />
          <BoxTeam
            imgLink={a5}
            name="Incentivos fiscais"
            office=""
           
          />
          <BoxTeam
            imgLink={a6}
            name="Independência energética"
            office=""
            
          />
          <BoxTeam
            imgLink={a7}
            name="Rapidez de instalação"
            office=""
            
          />
         
        </div>
      </div>
    </section>
  );
}
