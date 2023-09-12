// Components
import { OurTeam } from "../components/layout/OurTeam";
import { OurTeam2 } from "../components/layout/OurTeam2";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Doubts } from "../components/Doubts";
import AnimatedNumbers from "react-animated-numbers";
import YouTube, { YouTubeProps } from "react-youtube";
// Styles
import "../styles/pages/home.scss";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";
import { BoxTeam } from "../components/BoxTeam";

// Imagess
export function Home() {
  const a5 = require("../assets/icons/18.png")
  const [num, setNum] = useState(95);


const opts: YouTubeProps["opts"] = {
  height: "590",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    
  },
};

  return (
    <main>


<section className="propose" id="propose">
        <div className="container">
        <div className="imgPropose"></div>
          <div className="descriptionPropose">
            
            
        {/* <AnimatedNumbers
        includeComma
        animateToNumber={num}
        fontStyle={{ fontSize: 50, color:'#fccc4c',fontFamily:"Trajan Pro"}}
        locale="en-US"
        configs={[
          
          { mass: 1, tension: 660, friction: 180 },
          { mass: 1, tension: 510, friction: 180 },
        ]}
      ></AnimatedNumbers><h1>% </h1> */}
      
          
          </div>
          
        </div><a href="https://forms.office.com/r/5B0MSARs8f ">
       <Button text="Faça a sua Simulação Agora" /></a>
      </section>
 
      <div className="title">
          <section className="information">
            <div className="container">
              <h1 className="informationTitle">Assista o Video</h1>
      <YouTube videoId="LOUyLqW-Cu8" opts={opts} />
      <a href="https://forms.office.com/r/5B0MSARs8f ">
       <Button text={"Faça a sua Simulação Agora"} /></a>
      
        </div>
      </section>
        </div>
 
 <section className="asuamae" id="asuamae">
 <div className="title">
  <div className="container">
  <h2 ><a>Conheça as vantagens de contratar nosso serviços</a></h2></div></div>
 <OurTeam />
 
 </section>
 
 <section className="asuamae2" id="asuamae2">
<h2 className="preguica"><a>A Solion tem soluções especificas para você</a></h2>
 <OurTeam2 />
 </section>

      <section className="presentation" id="preseantation">
        
        
        <h1 className="preguica2"><a>Quem Somos</a></h1>
        <div className="container">
         <div className="descriptionPresentation">
            
            
            
<h1>Missão</h1>
            <p>
             Prestar um serviço e alta qualidade a nossos clientes, com o cumprimento dos devidos prazos e a entrega do que foi oferecido, em paralelo contribuir com o meio ambiente e satisfazer os clientes a partir de fontes renováveis e não poluidoras, alcançando um ambiente sustentável e ecológico, obtendo destaque e sucesso no mercado de trabalho.
</p>
<h1>Visão</h1>
<p>
            Ser referência entre os melhores no segmento de atuação em sustentabilidade e geração de uma energia contribuinte para o meio ambiente.
</p>
<h1>Valores</h1>
<p>
Respeito, Comprometimento, Ética, Qualificação e Sustentabilidade.
</p>          </div>
          <div className="imgPresentation"></div>
        </div>
        
      </section>

   
     

     
    </main>
  );
}
