import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  body {
    display: flex;
    justify-content: center;
    overflow-x: hidden;
  }
  #root{
    max-width:1200px;
    width:100%;
  }
`;

export default GlobalStyle;