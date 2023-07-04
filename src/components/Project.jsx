import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
  SectionProject,
  NavLink,
  StyledCarousel,
} from "../style/project";
import { Div1 } from "../style/header";
import { projectImg } from "../constantes.js";

const Project = () => {
  return (
    <SectionProject id="project">
      <ProjectTitle>Cas d'étude Formation UX</ProjectTitle>
      <ProjectDescription>
        Ceci est le cas d'étude que j'ai réalisé dans le cadre de la formation
        UX Design Google Career Certificate sur Coursera.<br/><br/> J'ai choisi comme
        sujet la création d'une application mobile pour la sélection du menu de
        repas de mariage.<br/><br/> Je me suis concentré sur une problématique que je connais bien
        : comment satisfaire les préférences et contraintes alimentaires de tous
        les invités tout en réduisant le gaspillage alimentaire.<br/><br/> J'ai donc conçu
        une solution qui permet aux futurs mariés de composer un menu à leur
        goût, offrant plusieurs options d'entrées, de plats, de desserts et
        des options véganes.<br/><br/> L'application permet ensuite d'envoyer une
        invitation aux invités pour qu'ils puissent faire leur choix parmi les
        différentes propositions.
        <br/>
        <br/>
        J' ai commencé a coder cette application en apprenant par la même occasion react-native,
        voici le lien du Repo:
        <NavLink
            href="https://github.com/159SAMSPAROW/React-Native-_app_Weeding_Time"
            target="_blank"
            rel="noopener noreferrer" // Ajouté pour des raisons de sécurité
          >
            Link
          </NavLink>
      </ProjectDescription>

      <Div1>
        <ProjectImage>
          <StyledCarousel>
            {projectImg.map((image, index) => (
              <div key={index}>
                <img src={image.img} alt={`Project ${index + 1}`} />
              </div>
            ))}
          </StyledCarousel>
        </ProjectImage>
      </Div1>
    </SectionProject>
  );
};

export default Project;
