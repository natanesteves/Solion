import { BoxTeam2 } from "../../BoxTeam2";
import "./styles.scss";

export function OurTeam2() {
const a1 = require("../../../assets/icons/26.png")
const a2 = require("../../../assets/icons/23.png")
const a3 = require("../../../assets/icons/24.png")
const a4 = require("../../../assets/icons/25.png")

  return (
    <section className="ourTeam">
      <div className="container">
       

        <div className="contentOurTeam">
          <BoxTeam2
         
            imgLink={a1}
            name="Residencial"
            office=""
            
          />
          <BoxTeam2
            imgLink={a2}
            name="Comércio"
            office=""
           
          />
          <BoxTeam2
            imgLink={a3}
            name="Agro"
            office=""
            
          />
           <BoxTeam2
            imgLink={a4}
            name="Off Grid"
            office=""
            
          />
         
        </div>
      </div>
    </section>
  );
}
