
import React from 'react';

import "./Section.css"
import { useState, useRef, useLayoutEffect } from "react";

function Verbal() {
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
        const text6Ref = useRef(null);
        const titleRef = useRef(null);
        const imgRef = useRef(null);
        
      
        
        useLayoutEffect(() => {
                if (isVisible) {
                        textRef.current.classList.add("text-article-visible");
                        text2Ref.current.classList.add("text-article-visible-left");
                        text3Ref.current.classList.add("text-article-visible");
                        text4Ref.current.classList.add("text-article-visible-left");
                        text5Ref.current.classList.add("text-article-visible");
                        text6Ref.current.classList.add("text-article-visible-left");
                        titleRef.current.classList.add("title-fadeIn");
                        imgRef.current.classList.add("img-fadeIn");
                        setIsVisible(false);
                }
        }, [isVisible]);
        return (
                <article  id="id-verbal" className='article-container-blue'>
                <section className='title-text-container'>
                
                <h2 ref={titleRef} className='title-article'>Langage Verbal</h2>
                
                <div ref={imgRef} className="banniere-article img-verbal"> <p className='text-article-test'>Le langage verbal est tout aussi essentiel que le langage non-verbal dans notre
                façon de communiquer. C&rsquoest ce que nous exprimons à travers nos mots, nos
                phrases et notre ton de voix. C&rsquoest notre façon de partager nos pensées, nos
                émotions et nos idées avec les autres.</p>
                </div>
                
                <div className={textVisible ? 'show' : 'hide'}>
                
                <p ref={textRef} className='text-article'>Le langage verbal est tout aussi essentiel que le langage non-verbal dans notre
                façon de communiquer. C&rsquoest ce que nous exprimons à travers nos mots, nos
                phrases et notre ton de voix. C&rsquoest notre façon de partager nos pensées, nos
                émotions et nos idées avec les autres.</p>
                
                <br/>
                
                <p ref={text2Ref} className='text-article'>La puissance des mots ne peut être sous-estimée. Ils ont le pouvoir de créer des
                liens profonds, de transmettre des encouragements chaleureux ou des critiques
                blessantes. Choisir les bons mots et les prononcer avec la bonne intention peut
                véritablement changer la donne dans nos interactions.</p>
                
                <br/>
                
                <p ref={text3Ref} className='text-article'>Je mets un point d&rsquohonneur à accorder une attention particulière au langage verbal.
                Je veux t&rsquoaider à trouver les mots justes pour exprimer qui tu es, ce que tu
                ressens et où tu veux aller dans la vie.</p>
                
                <br/>
                
                <p ref={text4Ref} className='text-article'>Il ne s&rsquoagit pas seulement de trouver les mots, mais aussi de comprendre comment
                les utiliser efficacement. Je veux t&rsquoaider à développer ton éloquence et ta clarté.
                Que ce soit pour te préparer à ton premier entretien d&rsquoembauche ou pour être à l&rsquoaise
                lors de ton prochain rendez-vous amoureux, je suis là pour te guider.</p>
                
                <br/>
                
                <p ref={text5Ref} className='text-article'>Chez Coeur à Coeur, je crois en l&rsquoimportance de la bienveillance et de la
                compréhension. Je suis là pour t&rsquoaider à te développer et à t&rsquoépanouir. Je veux
                que tu te sentes en confiance pour exprimer tes besoins, tes aspirations et tes
                émotions avec authenticité.</p>
                <br/>
                
                <p ref={text6Ref} className='text-article'>Alors, prêt à explorer ensemble la puissance des mots et du langage verbal ? Je
                suis là pour t&rsquoaccompagner, mon ami, afin que tu puisses trouver ta voix et te faire
                entendre dans toutes les situations. Nous allons travailler main dans la main pour
                que tu puisses atteindre tes objectifs avec confiance et conviction.</p>
                </div>
                <button onClick={toggleText} className="button-article">{textVisible ? "Retour" : "Voir Plus"}</button>
                </section>
                </article>
                )
        }
        
        export default Verbal