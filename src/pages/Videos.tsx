// Styles
import "../styles/pages/videos.scss";
import YouTube, { YouTubeProps } from "react-youtube";
import React from 'react'
import Carousel from 'better-react-carousel'

let pic1 =require("../assets/foto1.jpeg");
let pic2 =require("../assets/foto2.jpeg");
let pic3 =require("../assets/foto10.jpeg");
let pic4 =require("../assets/foto4.jpeg");
let pic5 =require("../assets/foto5.jpeg");
let pic6 =require("../assets/foto6.jpeg");
let pic7 =require("../assets/foto7.jpeg");
let pic8 =require("../assets/foto8.jpeg");
let pic9 =require("../assets/foto9.jpeg");
let pic10 =require("../assets/foto11.jpeg");
let pic11=require("../assets/foto12.jpeg");
let pic12 =require("../assets/foto13.jpeg");
let pic13=require("../assets/foto14.jpeg");



const opts: YouTubeProps["opts"] = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

export function Videos() {
  return (
    <>
      <main>
        <div className="title">
          <section className="information">
          <h1 className="informationTitle">Instalações</h1>
            <div className="container">
             
            
             <div className="vi"></div> <YouTube videoId="ihFAXdu7n2E" opts={opts} />
             <div className="vi"><YouTube videoId="JSMCxcPk-AM" opts={opts} /></div>
             <div className="vi"><YouTube videoId="xoqJ2JNJvBA" opts={opts} /></div>
            </div>
            <h1 className="informationTitle">Fotos das Instalações</h1>
            
            <Carousel cols={3} rows={1} gap={2} loop>
      <Carousel.Item>
        <img width="500px" height="350px" src={pic1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="500px" height="350px" src={pic2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="500px" height="350px" src={pic3} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="500px" height="350px" src={pic4} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="500px" height="350px" src={pic5} />
      </Carousel.Item>
   
      <Carousel.Item>
        <img width="500px" height="350px" src={pic7} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="500px" height="350px" src={pic8} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="500px" height="350px" src={pic9} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="500px" height="350px" src={pic10} />
      </Carousel.Item>
   
      <Carousel.Item>
        <img width="500px" height="450px" src={pic12} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="400px" height="350px" src={pic13} />
      </Carousel.Item>

      {/* ... */}
    </Carousel>
          </section>
        </div>
      </main>
    </>
  );
}