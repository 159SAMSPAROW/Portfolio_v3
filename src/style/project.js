import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const SectionProject = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ProjectTitle = styled.h2`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  margin: 2%;
  font-size: 3.5rem;
  color: #ffffff;
`;
export const NavLink = styled.a`
  color: #ffffff;
  margin-left: 20px;
  text-decoration: underline;
`;
export const Div1 = styled.div``;

export const Div2 = styled.div``;

export const ProjectDescription = styled.p`
  width: 45%;
  font-size: 2rem;
  color: #ffff00;
  line-height: 1.5;
  margin: 2%;

  @media (max-width: 760px) {
    width: 75%;
  }
`;
export const ProjectImage = styled.div`
  width: 70%;
  margin-left: 10%;

  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const StyledCarousel = styled(Carousel)`
  width: 80%;
  margin-left: 11%;

  @media (max-width: 760px) {
    margin-top: 50px;
  }
  
  .control-dots .dot {
    background: transparent;
  }

  @media (max-width: 760px) {
    .control-dots .dot {
      display: none;
    }
  }
`;
