import { useEffect, useRef, useState } from 'react';
import { SectionHero, Div1, Div2, NavLink, H2, Span } from "../style/hero";

const Hero = () => {
  const div1Element = useRef(null);
const div2Element = useRef(null);
const [isVisibleDiv1, setIsVisibleDiv1] = useState(false);
const [isVisibleDiv2, setIsVisibleDiv2] = useState(false);

useEffect(() => {
  const currentDiv1Element = div1Element.current;
  const currentDiv2Element = div2Element.current;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.target === currentDiv1Element) {
        setIsVisibleDiv1(entry.isIntersecting);
      } else if (entry.target === currentDiv2Element) {
        setIsVisibleDiv2(entry.isIntersecting);
      }
    });
  });

  if (currentDiv1Element) {
    observer.observe(currentDiv1Element);
  }

  if (currentDiv2Element) {
    observer.observe(currentDiv2Element);
  }

  return () => {
    if (currentDiv1Element) {
      observer.unobserve(currentDiv1Element);
    }

    if (currentDiv2Element) {
      observer.unobserve(currentDiv2Element);
    }
  };
}, []);

  return (

    
    <SectionHero>
      <Div1 ref={div1Element} style={{ opacity: isVisibleDiv1 ? 1 : 0, transition: 'opacity 1s', transitionDelay: '2.5s' }}>
        <H2>
          Bonjour, Ayant été admis au sein de la 2itechAcademy à
          Sophia-Antipolis, Je suis actuellement à la recherche d' une
          entreprise pour suivre une alternance en
          <NavLink
            href="https://www.2itechacademy.com/concepteur-developpeur-dapplications/"
            target="_blank"
            rel="noopener noreferrer" // Ajouté pour des raisons de sécurité
          >
            Conception développement d'applications (Cliquez pour voir le
            programme).
          </NavLink>
        </H2>
        </Div1>
      
        <Div2 ref={div2Element} style={{ opacity: isVisibleDiv2 ? 1 : 0, transition: 'opacity 1s', transitionDelay: '1s'  }}>
      <Span>💻 Domaine : DEVELOPPEMENT CONCEPTION D' APPLICATIONS</Span>
   
        <Span>🗓 Début : à partir de Septembre 2023</Span>
       
        <Span>⌛️ Durée : 24 mois</Span>
   
        <Span>📚 Rythme : 3 semaines en entreprise et 1 semaine en formation</Span>
   
        <Span>📍Mobilité : Antibes, Sophia-Antipolis, Nice et sa métropole (Permis B,
        véhiculé)</Span>
      
       <Span> Sérieux et motivé, je suis déterminé à donner le meilleur de moi-même
        afin de répondre aux attentes de ma future entreprise.</Span>
      </Div2>
    </SectionHero>
  );
};

export default Hero;
