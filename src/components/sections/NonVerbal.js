
import React from 'react'
import { useState, useRef, useLayoutEffect } from "react"
import "./Section.css"

function NonVerbal() {


        const [textVisible, setTextVisible] = useState(false);

        const toggleText = () => {
          setTextVisible(!textVisible);          
              };

              const [isVisible, setIsVisible] = useState(false);
              const text2Ref = useRef(null);
              const text3Ref = useRef(null);
              const text4Ref = useRef(null);
              const text5Ref = useRef(null);
              const titleRef = useRef(null);
              const imgRef = useRef(null);
       
            
              useLayoutEffect(() => {
                if (isVisible) {
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
    <article  id="id-non-verbal" className='article-container'>
    <section className='title-text-container'>

        <h2 ref={titleRef}className='title-article'>Langage Non-verbal</h2>

          <div ref={imgRef} className="banniere-article img-non-verbal"><p className='text-article-test'>Le langage non-verbal est incroyablement puissant. C&rsquoest une forme de
communication qui va bien au-delà des mots. C&rsquoest ce qui se manifeste à traversz
nos gestes, nos expressions faciales et même notre posture. C&rsquoest comme si
notre corps avait sa propre voix, capable de transmettre des émotions, des
intentions et des attitudes sans prononcer le moindre mot.</p>
</div>

        <div className={textVisible ? 'show' : 'hide'}
         >

        <p ref={text2Ref} className='text-article'>Quand on y pense, c&rsquoest assez fascinant. Nos expressions faciales peuvent révéler
tellement d&rsquoémotions, que ce soit la joie, la tristesse, la surprise ou même la colère.
Nos gestes et notre posture en disent long sur notre confiance en nous, notre
ouverture d&rsquoesprit ou même notre timidité. Même notre regard peut raconter une
histoire, qu&rsquoil s&rsquoagisse d&rsquoun regard intense pour montrer de l&rsquointérêt, ou d&rsquoun regard
            détourné pour exprimer de la gêne.</p>
          
        <br/>

      
        <p ref={text3Ref} className='text-article'>En tant que coach, je suis convaincu que le langage non-verbal est essentiel pour
aider les personnes qui manquent de confiance en elles. Comprendre et maîtriser
ces signaux invisibles peut vraiment faire la différence. Je veux t&rsquoaider à prendre
conscience de ton propre langage corporel, à ajuster tes signaux non verbaux et à
projeter une image de confiance et de positivité.</p>

<br/>


        <p ref={text4Ref} className='text-article'>Imagine ça : grâce à quelques ajustements simples dans ta posture, dans ton
expression faciale, tu peux renforcer ton estime de toi et créer une atmosphère
positive lors de ton prochain entretien d&rsquoembauche ou rendez-vous amoureux. Ça
peut sembler incroyable, mais c&rsquoest vrai. Et c&rsquoest exactement ce que je propose chez
Coeur à Coeur. Je veux t&rsquoaider à décoder les signaux non verbaux des autres,
mais aussi à ajuster les tiens pour créer des connexions authentiques avec les
autres. Je veux que tu te sentes écouté, compris et capable de t&rsquoépanouir dans
toutes tes interactions.</p>
<br/>

        <p ref={text5Ref} className='text-article'>Alors, prêt à explorer ensemble le merveilleux monde du langage non-verbal ? Je
suis là pour toi, mon ami. On va y arriver, et ça va être génial !</p>
        
        </div>

        <button onClick={toggleText} className="button-article">
          {textVisible ? "Retour" : "Voir Plus"}
        </button>

    </section>
</article>
  )
}

export default NonVerbal