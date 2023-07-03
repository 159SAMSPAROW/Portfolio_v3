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

export const Div1 = styled.div``;

export const Div2 = styled.div``;

export const ProjectDescription = styled.p`
  width: 45%;
  font-size: 2rem;
  color: #ffff00;
  line-height: 1.5;
  margin: 2%;
`;
export const ProjectImage = styled.div`
  width: 70vw;
  margin-left: 10%;

  img {
    padding: 2.5rem;
  }
`;

export const StyledCarousel = styled(Carousel)`
  .control-dots .dot {
    background: #ffff00;
  }
`;
