// Components
import { OurTeam } from "../components/layout/OurTeam";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Doubts } from "../components/Doubts";
import AnimatedNumbers from "react-animated-numbers";
// Styles
import "../styles/pages/home.scss";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";

// Images
let pic1 =require("../assets/pngtree-thunder-and-bolt-lighting-flash-vector-png-image_4723241.jpg");

export function Home() {

  const [num, setNum] = useState(1000000);

  return (
    <main>
      <section className="presentation">
        <div className="container">
          <div className="descriptionPresentation">
            <h1>Missão visão e valores</h1>
            <p>
            Missão: Prestar um serviço e alta qualidade a nossos clientes, com o cumprimento dos devidos prazos e a entrega do que foi oferecido, em paralelo contribuir com o meio ambiente e satisfazer os clientes a partir de fontes renováveis e não poluidoras, alcançando um ambiente sustentável e ecológico, obtendo destaque e sucesso no mercado de trabalho.
Visão: Ser referência entre os melhores no segmento de atuação em sustentabilidade e geração de uma energia contribuinte para o meio ambiente.
Valores: Respeito, Comprometimento, Ética, Qualificação e Sustentabilidade.
            </p>
            <Button text="começe a Poupar" />
          </div>
          <div className="imgPresentation"></div>
        </div>
        <h1>Whats gerados</h1>
        <AnimatedNumbers
        includeComma
        animateToNumber={num}
        fontStyle={{ fontSize: 40, color:'white'}}
        locale="en-US"
        configs={[
          { mass: 1, tension: 500, friction: 100 },
          { mass: 1, tension: 580, friction: 100 },
          { mass: 1, tension: 580, friction: 100 },
          { mass: 1, tension: 580, friction: 100 },
          { mass: 1, tension: 560, friction: 100 },
          { mass: 1, tension: 510, friction: 180 },
        ]}
      ></AnimatedNumbers>
      </section>

     

      

      <section className="howItWorks" id="howItWorks">
        <div className="container">
          <div className="boxHowItWorks boxTitle">
            <h1 className="titleHowItWorks">Como Funciona?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              architecto excepturi
            </p>
          </div>
          <div className="boxHowItWorks">
            <img src="https://cdn4.vectorstock.com/i/1000x1000/86/98/under-construction-road-sign-vector-10568698.jpg" alt="" />
            <h1>Solar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              architecto excepturi
            </p>
          </div>
          <div className="boxHowItWorks">
            <img src="https://cdn4.vectorstock.com/i/1000x1000/86/98/under-construction-road-sign-vector-10568698.jpg" alt="" />
            <h1>Economia</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              architecto excepturi
            </p>
          </div>
          <div className="boxHowItWorks">
            <img src="https://cdn4.vectorstock.com/i/1000x1000/86/98/under-construction-road-sign-vector-10568698.jpg" alt="" />
            <h1>Liberdade</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              architecto excepturi
            </p>
          </div>
        </div>
      </section>

      <section className="doubts">
        <div className="container">
          <h1>Dúvidas</h1>
          <div className="content">
            <Doubts
              question="1Lorem ipsum dolor sit amet"
              answer=" 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi doloremque omnis ratione, possimus ullam ea quibusdam molestiae excepturi asperiores, alias, tenetur ab. Earum voluptatibus rem excepturi ipsa ad quam."
            />
            <Doubts
              question="1Lorem ipsum dolor sit amet"
              answer=" 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi doloremque omnis ratione, possimus ullam ea quibusdam molestiae excepturi asperiores, alias, tenetur ab. Earum voluptatibus rem excepturi ipsa ad quam."
            />
            <Doubts
              question="1Lorem ipsum dolor sit amet"
              answer=" 3Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi doloremque omnis ratione, possimus ullam ea quibusdam molestiae excepturi asperiores, alias, tenetur ab. Earum voluptatibus rem excepturi ipsa ad quam."
            />
          </div>
        </div>
      </section>

     

    
 <OurTeam />
      <section className="history" id="history">
        <div className="descHistory">
          <h1>História</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sed, amet molestias eaque voluptatibus, quos similique tempora autem
            accusamus aliquid possimus dolorem. Quam magnam ullam ea aperiam
            quas blanditiis sapiente?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sed, amet molestias eaque voluptatibus, quos similique tempora autem
            accusamus aliquid possimus dolorem. Quam magnam ullam ea aperiam
            quas blanditiis sapiente?
          </p>
        </div>
        <div className="imgHistory"></div>
      </section>

      <section className="whatWeDo" id="whatWeDo">
        <div className="title">
          <h1>O que fazemos?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>

        <div className="container">
          <div className="nftImg">
            <img src={pic1} alt="NFT" />
          </div>
          <div className="boxsInformation">
            <div className="boxInformation one">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Como fazemos?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="boxInformation two">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Como fazemos?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="boxInformation three">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Como fazemos?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="boxInformation four">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Como fazemos?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="boxInformation five">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Como fazemos?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="boxInformation six">
              <div className="boxIcon">
                <FiHeart />
              </div>
              <h1>Como fazemos?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
