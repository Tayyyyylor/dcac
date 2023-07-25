import React from 'react';
import "./Logo.css"
import { useState, useLayoutEffect, useRef } from "react"

function Logo() {

  const [isVisible, setIsVisible] = useState(false);

  const isMobile = window.innerWidth < 900;


  const elementRef = useRef(null);
 

  useLayoutEffect(() => {
    if (isVisible) {
      elementRef.current.classList.add("main-title-visible");
      setIsVisible(false); 
    }
  }, [isVisible]);


  return (
    <>
      {isMobile ? (
        <a href="/">
    <img className="img-logo" src="../../assets/TRANSPARENT.png" alt=""/>
        </a>
  ) : (
            <div >
              <a href="/" className="logo-container">
                
    <img className="img-logo" src="../../assets/TRANSPARENT.png" alt=""/>
    <h1 ref={elementRef} className="main-title"> De <span className="color-letter-title">c</span>oeur à <span className="color-letter-title">c</span>oeur</h1>
</a>
            </div>
  )}
    
    
    </>
  );
}

export default Logo