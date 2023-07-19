import styled from "styled-components";

export const SectionHero = styled.section`
z-index: 1
display: flex;
flex-direction: column;
justify-content: center;  
width: 80%;
margin: 12%;

@media (max-width: 760px) {
  width: 50%;
}
`;
export const Div1 = styled.div`
  width: 70%;
  margin: 1%;
  color: #ffffff;

  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Div2 = styled.div`
  width: 60%;
  margin: 7% 0 2% 30%;
  color: #ffffff;

  @media (max-width: 760px) {
    text-align: center;
    width: 90%;
    margin-top: 25%;
  }
`;

export const Div3 = styled.div`
  width: 80%;
  margin: 7% 0 2% 2%;
  color: #ffffff;

  @media (max-width: 760px) {
    text-align: center;
    width: 90%;
    margin-top: 25%;
  }
`;

export const NavLink = styled.a`
  color: #ffff00;
  margin-left: 10px;
`;

export const H2 = styled.h2`
  font-size: 2.2rem;
  line-height: 1.6;

  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
`;
export const Span = styled.span`
  display: block;
  margin-bottom: 2rem;
  font-size: 2.2rem;

  @media (max-width: 760px) {
    font-size: 1.6rem;
  }
`;

export const P = styled.p`
  display: block;
  margin-bottom: 2rem;
  font-size: 2.3rem;
  color: white;

  @media (max-width: 760px) {
    font-size: 1.7rem;
  }
`;
export const Img = styled.img`
  width: 85%;
`;
