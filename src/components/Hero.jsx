import { useEffect, useRef, useState } from "react";
import {
  SectionHero,
  Div1,
  Div2,
  Div3,
  NavLink,
  H2,
  Span,
  P,
} from "../style/hero";

const Hero = () => {
  const div1Element = useRef(null);
  const div2Element = useRef(null);
  const [isVisibleDiv1, setIsVisibleDiv1] = useState(false);
  const [isVisibleDiv2, setIsVisibleDiv2] = useState(false);

  useEffect(() => {
    const currentDiv1Element = div1Element.current;
    const currentDiv2Element = div2Element.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
      <Div1
        ref={div1Element}
        style={{
          opacity: isVisibleDiv1 ? 1 : 0,
          transition: "opacity 1s",
          transitionDelay: "2.5s",
        }}
      >
        Under construction : Portfolio being refactored
        <H2>
          <br />
          Bonjour, Ayant été admis au sein de la 2itechAcademy à
          Sophia-Antipolis, Je suis actuellement à la recherche d' une
          entreprise pour suivre une alternance en
          <br />
          <NavLink
            href="https://www.2itechacademy.com/concepteur-developpeur-dapplications/"
            target="_blank"
            rel="noopener noreferrer" // Ajouté pour des raisons de sécurité
          >
            Conception développement d'applications <br />
            (Cliquez pour voir le programme).
          </NavLink>
        </H2>
      </Div1>

      <Div2
        ref={div2Element}
        style={{
          opacity: isVisibleDiv2 ? 1 : 0,
          transition: "opacity 1s",
          transitionDelay: "1s",
        }}
      >
        <Span>💻 Domaine : DEVELOPPEMENT CONCEPTION D' APPLICATIONS</Span>
        <Span>🗓 Début : à partir de Septembre 2023</Span>
        <Span>⌛️ Durée : 24 mois</Span>
        <Span>
          📚 Rythme : 3 semaines en entreprise et 1 semaine en formation
        </Span>
        <Span>
          📍Mobilité : Antibes, Sophia-Antipolis, Nice et sa métropole (Permis
          B, véhiculé)
        </Span>
      </Div2>
      <Div3 id="about">
        <P>
          J'ai passé la majeure partie de ma carrière professionnelle dans le
          secteur de la restauration.
          <br /> <br />
          Cependant, un jour, une prise de conscience s'est imposée à moi. J'ai
          réalisé que je voulais accomplir quelque chose de plus significatif
          dans ma vie professionnelle.
          <br /> <br />
          J'ai donc eu cette révélation : pour le reste de ma carrière, je
          devais trouver une voie qui raviverait ma passion et aprés moulte
          recherche et réflexion Boum !
          <br /> <br />
          J' ai decouvert qu' apprendre a coder était en fait possible sans
          avoir étudié dans une écoles d' IT.
          <br /> <br />
          Doté d'une motivation à toute épreuve, je me suis donc lancé dans la
          formation Développeur Web d'OpenClassrooms et, au fur et à mesure,
          j'ai tellement pris de plaisir à apprendre à coder que cette voie est
          devenue une évidence. Voir des interfaces prendre vie et créer des
          fonctions qui fonctionnent, c'est vraiment cool.
          <br /> <br />
          Et pour poursuivre mon apprentissage et devenir Développeur j' ai
          besoin de vous ! <br /> <br /> Mon engagement sera sans faille !
        </P>
      </Div3>
    </SectionHero>
  );
};

export default Hero;
