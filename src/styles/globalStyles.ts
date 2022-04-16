import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,body {
    width: 100vw;
    height: 100vh;
}

#root {
    width: 100%;
    height: 100%;
}

ol, ul, li {
    list-style: none;
}

img {
    display: block;
    width: 100%;
    height: 100%;
}

input {
    outline: none;
}
`;

export default GlobalStyles;
