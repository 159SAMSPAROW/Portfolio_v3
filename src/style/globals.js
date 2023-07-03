import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Mono';
    src: url('../../fonts/RobotoMono-VariableFont_wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }



  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Roboto Mono', sans-serif;
    font-size: 1.6rem;
    color: #000;
    cursor: default;
    
    
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: 'Roboto Mono', sans-serif; 
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;