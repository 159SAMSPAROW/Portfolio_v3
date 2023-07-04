import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";


export const SectionHeading = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50%;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
export const Div1 = styled.div`
  display: flex;
  align-items: center;
  margin: 5%;

  @media (max-width: 960px) {
    margin: 3%;
  }

  @media (max-width: 760px) {
    margin: 1%;
  }
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 760px) {
    margin-top: 10%;
  }

  @media (max-width: 960px) {
    margin-right: 2%;
  }
`;

export const Div4 = styled.div`

  font-weight: bold;
  color: white;

  @media (max-width: 760px) {
    font-size: 18px;
    flex-wrap: wrap;
  }
`;

export const Name = styled.h1`
  color: #ffffff;
`;

export const Logo = styled.img`
  width: 140px;
  height: 120px;
`;
export const StyledScrollLink = styled(ScrollLink)`
  margin-left: 5%;
  font-size: 2.5rem;
  color: #FFFF00;
  transition: 0.4s ease;

  &:hover {
    color:#FF0000;
    opacity: 1;
    cursor: pointer;
  }
  @media (max-width: 760px) {
    padding: 0.5rem;
    font-size: 1.8rem;
  }
`;
export const HeadingLink = styled.div`
  width: 250px;

  @media (max-width: 760px) {
    width: 110px;
  }
`;
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media (max-width: 760px) {
    margin: 10%;
  }
`;
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; // Ajouté pour aligner les éléments verticalement
  width: 100%;
`;

export const ProfileImg = styled.img`
  width: 250px;
  height: 250px;
  margin-right: 2%;
  border-radius: 100px 15px 20px 60px;
  border: 5px solid #0023ff;
  box-shadow: 0 0 60px #0023ff;

  @media (max-width: 760px) {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 15px;
    box-shadow: 0 0 5px #0023ff;
  }
`;
export const StyledSpan = styled.span`
  font-size: 10rem;
  line-height: 2.6;


  @media (max-width: 760px) {
    font-size: 1.8rem;
  }
`;
