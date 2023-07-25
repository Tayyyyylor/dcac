import React from 'react';
import "./Bio.css"
import { useEffect, useRef, useState } from 'react';

function Bio() {
 
  const [textVisible, setTextVisible] = useState(false);
  const bioRef = useRef(null);

  useEffect(() => {
    const textElement = bioRef.current;
    const text = ` "Savoir vraiment communiquer avec ses semblables, c'est se sentir plus vivant, c'est affirmer son existence de manière plus prononcée." `
    let index = 0;

    const typeWriter = () => {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, Math.random() * 10 + 15);
      }
    }

    typeWriter();
  }, []);


  const toggleText = () => {
    setTextVisible(!textVisible);
  };

  return (
    
    <article className="bio-container">
      <h2 className="title-bio">Avant-Propos</h2>
      <section className="citation-container">
        <p className="citation-bio" ref={bioRef} /> 
        <div className={textVisible ? 'show' : 'hide'}>
          <p className='text-bio'>Plus que d&quotavoir la fille ou d&quotavoir le job, je dévie mon regard sur &quotJe crée un lien suffisamment fort pour créer une mémoire durable et que les personnes rencontrées se souviennent de moi et sur du long terme&quot</p>
<p className='text-bio'>
            
A partir de ce principe, ja&quotctive des connexions plus grandes, dirigées vers une sensibilité plus accrue, parce que tournées vers l&quotHumain*. Ces connexions pourraient m&quotaider à obtenir quelque chose de différent, d&quotinédit et peut être de plus passionnant.
</p>
<p className='text-bio'>
La première phrase qui démontrera votre intérêt véritable pour votre interlocutrice / teur est celle-ci : &quot Comment allez-vous ?  &quotCette phrase interrogative a le but sincère de vous enquérir de l&quotétat interne de la personne devant vous. 
</p>

<p className='text-bio'>
            
&quotSavoir vraiment communiquer avec ses semblables, c&quotest se sentir plus vivant, c&quotest affirmer son existence de manière plus prononcée.&quot
</p>
          <p className='text-bio'>

          * Selon le dictionnaire Larousse, l&quotune des définitions de &quotêtre humanisé&quot : 

          &quotDevenir plus compréhensif, plus attentif aux autres. : Un homme dur qui s&quotest humanisé avec l&quotâge.&quot</p>
        </div>
      </section>
      <button className='button-bio' onClick={toggleText}>{textVisible ? "Retour" : "Voir Plus"}</button>
      </article>
    
      
  )
}

export default Bio