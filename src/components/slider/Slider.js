import React from 'react';

import { useState, useEffect, useRef, useMemo, useLayoutEffect } from 'react';
import "./Slider.css";


function Slider() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isVisible, setIsVisible] = useState(false);


  const photosData = useMemo(() => [
    { src: "/assets/francis-singe.png", title:"Conseil en langage verbal - Non verbal - Écrit", description:"PAR FRANCIS DECKER"},
    { src: "/assets/francis-conf.png", title:"Conseil en langage verbal - Non verbal - Écrit", description:"PAR FRANCIS DECKER"},
    { src: "/assets/francis-griffe.png", title:"Conseil en langage verbal - Non verbal - Écrit", description:"PAR FRANCIS DECKER"},
    { src: "/assets/francis-nonverbal.png", title:"Conseil en langage verbal - Non verbal - Écrit", description:"PAR FRANCIS DECKER"},
    { src: "/assets/photo_atelier.png", title:"Conseil en langage verbal - Non verbal - Écrit", description:"PAR FRANCIS DECKER"},
  ], []) 
  const intervalRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (isVisible) {
      textRef.current.classList.add("text-slider-visible");
      setIsVisible(false); 
    }
  }, [isVisible]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (currentPhoto === photosData.length - 1) {
        setCurrentPhoto(0);
      } else {
        setCurrentPhoto(currentPhoto + 1);
      }
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentPhoto, photosData.length]);

  useEffect(() => {
    imgRef.current.src = photosData[currentPhoto].src;
  }, [currentPhoto, photosData]);

  return (
    <div id="slider">
      <img src={photosData[currentPhoto].src} alt="img slider" ref={imgRef} className="img-slider"/>

        <div ref={textRef} className='text-slider-container'>
        <img className="img-logo-slider" src="/assets/TRANSPARENT.png" alt=""/>
      <h2 className='title-header' ref={imgRef}>{photosData[currentPhoto].title }</h2>

      <p  className='p-slider'>{photosData[currentPhoto].description}</p>
      </div>

    </div>
  );
}

export default Slider;
