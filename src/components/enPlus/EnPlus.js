import "./EnPlus.css"
import React from 'react';
import conference from "../../assets/conference.png"
import domicileDemandeur from "../../assets/domiciledemandeur.png"
import faceaface from "../../assets/faceaface.png"
import domicile from "../../assets/maison2.png"
import podcast from "../../assets/podcast.png"
import visio from "../../assets/visio.png"






function EnPlus() {
  return (
      <section className="en-plus-container">
          <div className="lieux-container">
              <h2 className="title-en-plus">Lieu(x) d&rsquo;exercice</h2>
              <div className="container-img-text">
                  <img className="picto-enplus" src={domicile} alt="" />
              <p>A mon domicile</p>
              </div>
              <div className="container-img-text">
              <img  className="picto-enplus" src={domicileDemandeur} alt="" />
                  <p>Au domicile du demandeur si accord</p>
              </div>
                  <div className="container-img-text">
              <img  className="picto-enplus" src={conference} alt="" />
                  <p>En salle</p>
                  </div>
                  
          </div>
          <div className="moyens-container">
              <h2 className="title-en-plus">Moyen(s)</h2>
              <div className="container-img-text">
              <img  className="picto-enplus" src={faceaface} alt="" />
                  <p>En face à face physique</p>
              </div>
              <div className="container-img-text">
              <img className="picto-enplus" src={visio} alt="" />
                  <p>En visio</p>
              </div>
              <div className="container-img-text">
              <img className="picto-enplus" src={podcast} alt="" />
                  <p>Podcast</p>
                  </div>
                  
          </div>
</section>  )
}

export default EnPlus