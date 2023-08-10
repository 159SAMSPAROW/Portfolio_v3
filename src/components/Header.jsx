import {
  Logo,
  SectionHeading,
  Div1,
  Div2,
  Div3,
  Div4,
  Name,
  HeadingLink,
  SocialIcons,
  ProfileImg,
  ProfileContainer,
  StyledSpan,
  StyledScrollLink,
} from "../style/header";
import { BrowserRouter as Router } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { useRef, useEffect } from "react";

const Header = () => {
  const ProfileText = useRef(null);

  useEffect(() => {
    // call the typeEffect function on the span element inside Div4
    typeEffect(ProfileText.current.querySelector("span"), 75);
  }, []); // only run once on mount

  function typeEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";

    setTimeout(function () {
      let i = 0;
      let timer = setInterval(function () {
        if (i < text.length) {
          if (text.charAt(i) === "<") {
            element.insertAdjacentHTML(
              "beforeend",
              text.substring(i, text.indexOf(">", i) + 1)
            );
            i = text.indexOf(">", i) + 1;
          } else {
            element.append(text.charAt(i));
            i++;
          }
        } else {
          clearInterval(timer);
        }
      }, speed);
    }, 1600); // Ajoute un délai de 1600ms avant le début de l'animation
  }

  return (
    <Router>
      <SectionHeading>
        <Div1>
          <Logo src="/images/logo_sd_sticker.png" />
          <Name class="badge-base LI-profile-badge" data-locale="fr_FR" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="sami-demir-b55a30140" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://fr.linkedin.com/in/sami-demir-b55a30140?trk=profile-badge" target="blank">Sami DEMIR</a></Name>
        </Div1>
        <Div2>
          <HeadingLink>
            <StyledScrollLink to="project" smooth={true} duration={500}>
              Projets
            </StyledScrollLink>
          </HeadingLink>

          <HeadingLink>
            <StyledScrollLink to="about" smooth={true} duration={500}>
              À Propos
            </StyledScrollLink>
          </HeadingLink>
        </Div2>
        <Div3>
          <SocialIcons href="https://github.com/159SAMSPAROW">
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://www.linkedin.com/in/sami-demir-b55a30140/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </Div3>
        
      </SectionHeading>
      <ProfileContainer>
        <ProfileImg src="/images/Profil_Img_cv.jpg" alt="Photo de Sami" />
        <Div4 ref={ProfileText}>
          <StyledSpan>HELLO WORLD !</StyledSpan>
        </Div4>
      </ProfileContainer>
     
              
    </Router>
  );
};

export default Header;
