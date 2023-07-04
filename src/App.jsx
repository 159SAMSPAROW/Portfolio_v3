import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero"
import Acomplishements from "./components/Acomplishements";
import Project from "./components/Project";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Arrête la vidéo après 1.6 secondes
    setTimeout(() => {
      video.pause();
    }, 2000);
  }, []);

  return (
    <>
      
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        id="myVideo"
        style={{
          position: "fixed",
          right: "0",
          bottom: "0",
          minWidth: "100%",
          minHeight: "100%",
          zIndex: "-1",
          opacity:0.9,
        }}
      >
       <source src="/Video/BackgroundVid2.mp4" type="video/mp4" />
      </video>
      <Header />
      <Hero />
      <Project/>
      <Acomplishements />
    </>
  );
}

export default App;
