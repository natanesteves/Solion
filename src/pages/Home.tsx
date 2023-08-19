// Components
import { OurTeam } from "../components/layout/OurTeam";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Doubts } from "../components/Doubts";
import AnimatedNumbers from "react-animated-numbers";
import YouTube, { YouTubeProps } from "react-youtube";
// Styles
import "../styles/pages/home.scss";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";

// Imagess
export function Home() {

  const [num, setNum] = useState(95);


const opts: YouTubeProps["opts"] = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
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
          
        </div><a>
       <Button text="Faça a sua Simulação Agora" /></a>
      </section>
 
      <div className="title">
          <section className="information">
            <div className="container">
              <h1 className="informationTitle">Assista o Video</h1>
      <YouTube videoId="ihFAXdu7n2E" opts={opts} />
      <a>
       <Button text="Faça a sua Simulação Agora" /></a>
      <h2><a>Conheça as vantagens de contratar nosso serviços</a></h2>
        </div>
      </section>
        </div>
 
 
 <OurTeam />

   

     

    


      <section className="presentation" id="preseantation">
        <div className="container">
          <div className="descriptionPresentation">
            <h1>Missão visão e valores</h1>
            <p>
            Missão: Prestar um serviço e alta qualidade a nossos clientes, com o cumprimento dos devidos prazos e a entrega do que foi oferecido, em paralelo contribuir com o meio ambiente e satisfazer os clientes a partir de fontes renováveis e não poluidoras, alcançando um ambiente sustentável e ecológico, obtendo destaque e sucesso no mercado de trabalho.
Visão: Ser referência entre os melhores no segmento de atuação em sustentabilidade e geração de uma energia contribuinte para o meio ambiente.
Valores: Respeito, Comprometimento, Ética, Qualificação e Sustentabilidade.
            </p>
            
          </div>
          <div className="imgPresentation"></div>
        </div>
        
      </section>

   
     

     
    </main>
  );
}
