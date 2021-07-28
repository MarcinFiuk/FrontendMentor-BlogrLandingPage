import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size:16px;
}

html{
    font-size:0.625rem
}

body{
    font-family: 'Ubuntu', sans-serif;
    max-width:1440px;
    margin: 0 auto;
    overflowX: hidden;
}
`;
