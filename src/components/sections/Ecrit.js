
import React from 'react';
import "./Section.css"
import { useState, useRef, useLayoutEffect } from "react";


function Ecrit() {
        const [textVisible, setTextVisible] = useState(false);

        const toggleText = () => {
                setTextVisible(!textVisible);
              };
              const [isVisible, setIsVisible] = useState(false);
              const textRef = useRef(null);
              const text2Ref = useRef(null);
              const text3Ref = useRef(null);
              const text4Ref = useRef(null);
              const text5Ref = useRef(null);
              const titleRef = useRef(null);
              const imgRef = useRef(null);
            
           
            
            
              useLayoutEffect(() => {
                if (isVisible) {
                  textRef.current.classList.add("text-article-visible");
                  text2Ref.current.classList.add("text-article-visible-left");
                  text3Ref.current.classList.add("text-article-visible");
                  text4Ref.current.classList.add("text-article-visible-left");
                  text5Ref.current.classList.add("text-article-visible");
                  titleRef.current.classList.add("title-fadeIn");
                  imgRef.current.classList.add("img-fadeIn");
                  setIsVisible(false);
                }
              }, [isVisible]);
  return (
    <article id="id-ecrit" className='article-container'>
    <section className='title-text-container'>

        <h2 ref={titleRef} className='title-article'>Langage Écrit</h2>

          <div ref={imgRef} className="banniere-article img-ecrit"><p className='text-article-test'>L&quotécriture est un moyen extraordinaire de partager notre voix et nos pensées d&quotune
manière réfléchie et durable. C&quotest comme si nos mots prenaient vie sur la page,
transmettant nos idées et nos émotions avec une profondeur et une clarté
uniques.</p>
</div>

        <div className={textVisible ? 'show' : 'hide'}>


        <p ref={textRef} className='text-article'>L&quotécriture est un moyen extraordinaire de partager notre voix et nos pensées d&quotune
manière réfléchie et durable. C&quotest comme si nos mots prenaient vie sur la page,
transmettant nos idées et nos émotions avec une profondeur et une clarté
uniques.</p>

        <br/>

        <p ref={text2Ref} className='text-article'>Je crois en la puissance de l&quotécriture pour t&quotaider à te développer et à prendre le
contrôle de tes premières impressions. L&quotécriture te permet de structurer tes
idées, de les affiner et de les communiquer avec conviction.</p>

        <br/>

        <p ref={text3Ref} className='text-article'>Je suis là pour t&quotaccompagner dans cet art de l&quotécriture. Ensemble, nous allons
explorer différentes techniques pour que tu puisses exprimer tes idées avec
confiance et clarté. Que ce soit à travers une lettre de motivation percutante ou
une correspondance amoureuse captivante, nous allons travailler sur l&quotécriture
comme un moyen de créer une connexion profonde et authentique.</p>

        <br/>

        <p ref={text4Ref} className='text-article'>Chez Coeur à Coeur, mon objectif est que tu te sentes soutenu et encouragé dans
ton développement personnel par le biais de l&quotécriture. En utilisant le langage écrit,
nous allons créer un espace où tu pourras t&quotépanouir, où tes mots auront un
impact significatif.</p>

        <br/>

        <p ref={text5Ref} className='text-article'>Prêt à explorer le potentiel de l&quotécriture pour te guider vers le succès et la confiance
en toi ? Je serai là à chaque étape, mon ami, pour t&quotinspirer, te guider et t&quotencourager
à utiliser les mots écrits comme un outil puissant pour te développer et te connecter
avec les autres de manière profonde et authentique.</p>
        </div>
        <button onClick={toggleText} className="button-article">{textVisible ? "Retour" : "Voir Plus"}</button>

        <img src='' className='img-article' alt=''/>
    </section>
</article>
  )
}

export default Ecrit