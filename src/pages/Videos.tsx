// Styles
import "../styles/pages/transparency.scss";
import YouTube, { YouTubeProps } from "react-youtube";
import React from 'react'
import Carousel from 'better-react-carousel'

let pic1 =require("../assets/WhatsApp Image 2023-07-27 at 15.44.27.jpeg");
let pic2 =require("../assets/WhatsApp Image 2023-07-27 at 15.44.28.jpeg");
let pic3 =require("../assets/nft.png");


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
            <div className="container">
              <h1 className="informationTitle">Instalações</h1>
            
              <YouTube videoId="ihFAXdu7n2E" opts={opts} />
              <YouTube videoId="JSMCxcPk-AM" opts={opts} />
              <YouTube videoId="xoqJ2JNJvBA" opts={opts} />
            </div>
            <h1 className="informationTitle">Fotos das Instalações</h1>
            <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="500px" height="300px" src={pic1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="500px" height="300px" src={pic2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="500px" height="300px" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
          </section>
        </div>
      </main>
    </>
  );
}