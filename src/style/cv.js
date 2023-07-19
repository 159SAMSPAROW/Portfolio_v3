import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

export const CvSection = styled.section`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  height: 100vh @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  color: #ffffff;

  @media (max-width: 760px) {
    width: 75%;
  }
`;

export const H2 = styled.h2`
  font-size: 5rem;
  line-height: 1.6;

  @media (max-width: 760px) {
    font-size: 1.9rem;
  }

  @media (max-width: 960px) {
    font-size: 1.5rem;
  }
`;

export const Img = styled.img`
  width: 600px;
  height: 800px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3); // Agrandit l'image de 30% lorsqu'elle est survolée
  }
`;
