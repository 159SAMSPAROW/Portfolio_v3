import styled from "styled-components";

export const SectionHero = styled.section`
display: flex;
flex-direction: column;
justify-content: center;  
width: 80%;
margin: 12%;
`;
export const Div1 = styled.div`
width: 50%;
margin: 1%;
color: #FFFFFF;

@media (max-width: 760px) {
  width: 75%;
}
`;

export const Div2 = styled.div`
width: 60%;
margin: 7% 0 2% 0;
font-size: 2.5rem;
color: #FFFFFF;

@media (max-width: 760px) {
  text-align: center;
  width :90%;
  margin-top: 25%;
}
`;

export const NavLink = styled.a`
color: #FFFF00;
font-weight: ;
margin-left: 10px;
`;

export const H2 = styled.h2`
font-size: 2.5rem;
line-height:1.6;

@media (max-width: 760px) {
  font-size: 1.9rem; 
}

@media (max-width: 960px) {
  font-size: 2rem;
}
`
export const Span = styled.span`
  display: block;
  margin-bottom: 2rem;
  font-size: 2.2rem; 

  @media (max-width: 760px) {
    1.7rem
  }
`;
