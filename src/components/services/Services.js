
import React from 'react';

import "./Services.css"
import { useState, useLayoutEffect, useRef } from "react";
import EnPlus from "../enPlus/EnPlus";

function Services() {
        
        const [isVisible, setIsVisible] = useState(false);
        
        const isMobile = window.innerWidth < 1024;
        
        const serviceImg1Ref = useRef(null);
        const serviceText1Ref = useRef(null);
        const serviceImg2Ref = useRef(null);
        const serviceText2Ref = useRef(null);
        const serviceImg3Ref = useRef(null);
        const serviceText3Ref = useRef(null);
        
        const handleVisibilityServices = (visible) => {
                setIsVisible(visible);
        };
        
        useLayoutEffect(() => {
                if (isVisible) {
                        serviceImg1Ref.current.classList.add("img-services-slidein");
                        serviceText1Ref.current.classList.add("icon-text-text-slidein");
                        serviceImg2Ref.current.classList.add("img-services-slidein");
                        serviceText2Ref.current.classList.add("icon-text-text-slidein");
                        serviceImg3Ref.current.classList.add("img-services-slidein");
                        serviceText3Ref.current.classList.add("icon-text-text-slidein");
                        setIsVisible(false);
                }
        }, [isVisible]);
        
        return (
                <>
                {isMobile ? (
                        <article  id="id-services" className="services-container">
                        <h2 className="services-title">sphères abordées</h2>
                        
                        <div className="cards-container-services">
                        
                        <div className="icon-text-container">
                        <img src="/CoeurBlanc.png" alt="" className="img-services" />
                        <h2>Préparation au(x) rendez-vous amoureux</h2>                          
                        </div>
                        
                        <div className="icon-text-container">
                        <img src="/EntretienBlanc.png" alt="" className="img-services" />
                        <h2>Préparation dans l&rsquoobjectif d&rsquoun recrutement</h2>                          
                        </div>
                        
                        
                        <div className="icon-text-container">
                        <img src="/ReseauxBlanc.png" alt="" className="img-services" />
                        <h2>Préparation au(x) rendez-vous amoureux</h2>                          
                        </div>
                        
                        
                        </div>
                        </article> 
                        ) :  ( <article  id="id-services" className="services-container">
                        <h2 className="services-title">sphères abordées</h2>
                        <div className="cards-container-services">
                        
                        <div className="icon-text-container">
                        <img ref={serviceImg1Ref} src="/CoeurBlanc.png" alt="" className="img-services" />
                        <div>
                        <h2 className="title-services">Préparation au(x) rendez-vous amoureux</h2>                                          
                        <p ref={serviceText1Ref} className="icon-text-text">Avec mon coaching : Cela peut être le premier, le second <span className="color-text-services">rendez-vous amoureux...</span>  ou une discussion pouvant être un moment de bascule dans l&rsquoobjectif de préservation d&rsquoun couple ou d&rsquoun couple en devenir. </p> </div>
                        </div>
                        
                        <div className="icon-text-container">
                        <img ref={serviceImg2Ref} src="/EntretienBlanc.png" alt="" className="img-services" />
                        <div>
                        <h2 className="title-services">Préparation dans l&rsquoobjectif d&rsquoun recrutement</h2>                                          
                        
                        <p ref={serviceText2Ref} className="icon-text-text">&rsquo Avoir le job&rsquo est un idéal. Créer des liens solides lors d&rsquoune <span className="color-text-services">entrevue pour un recrutement</span> est tout aussi vital. Si l&rsquoopportunité vous échappe, le lien que vous aurez créé vous permettra d&rsquoêtre recontacté pour une / des opportunités aussi passionnantes.</p>
                        </div>
                        </div>
                        
                        
                        <div className="icon-text-container">
                        <img ref={serviceImg3Ref} src="/ReseauxBlanc.png" alt="" className="img-services" />
                        <div>
                        
                        
                        <h2 className="title-services">Préparation à l&rsquoart oratoire</h2>                                          
                        
                        <p ref={serviceText3Ref} className="icon-text-text"> <span className="color-text-services">L&rsquoart oratoire</span> peut être perçue comme l&rsquoextension des 2 premières sphères de communication précédentes. La différence est qu&rsquoelle s&rsquoeffectue à voix haute et devant un large public. L&rsquoobjectif reste le même : créer des liens avec ce public. Les champs d&rsquoapplication sont variés : Allocution chef(f)e d&rsquoentreprise, art oratoire par des étudiants devant un public. L&rsquoart oratoire s&rsquoadapte à l&rsquoart, via le théâtre, le cinéma et se transforme en monologue.</p></div>
                        </div>
                        </div>
                        <EnPlus />
                        <section className="desc-services-container">
                        <p className="text-desc-services">Parce que nous pouvons avoir un comportement réservé, versant dans la timidité, la vidéo s&rsquoavère un outil idéal et confortable pour transmettre un message. Cet outil sera utilisé dans la sphère d&rsquoune histoire sentimentale. Un entraînement face caméra sera effectué comme pour une entrevue sentimentale ou sur la thématique du recrutement : 10 séances maximum</p>
                        <p className="text-desc-services">Un test final validant les séances d&rsquoentraînement se fera avec une comédienne jouant le rôle de la personne dont vous êtes épris. Un comédien ou une comédienne se chargera de jouer le rôle du recruteur concernant l&rsquoentretien d&rsquoembauche. Un groupe de personnes sera aussi présent pour le test de l&rsquoallocution en public, également celui du monologue et de l&rsquoart oratoire.</p>
                        <p className="text-desc-services">Focus : Un échange avec la personne désignée est comme un combat bienveillant avec des mots, avec des gestes. Chaque mot prononcé, chaque petit geste est comme une touche en escrime dans le corps de l&rsquoautre. Lorsque des mots, des gestes choisis avec attention touchent à l&rsquoultime et prononcés ou démontrés au moment clé, l&rsquoeffet recherché est comme un impact en boxe. Par conséquent, vous laissez une empreinte dans le corps de votre interlocutrice.</p>
                        <p className="text-desc-services">Regard : La sphère abordée de l&rsquoentrevue sentimentale aura un aspect assumé : celui d&rsquoaccompagner les hommes à porter un regard bienveillant sur les femmes.</p>
                        <p className="text-desc-services">Public : Hommes à partir de 20 ans</p>
                        </section>
                        </article>
                        )}
                        
                        </>
                        )
                }
                
                export default Services