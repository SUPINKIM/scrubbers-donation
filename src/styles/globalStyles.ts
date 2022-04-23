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
    font-family: 'Noto Sans KR', 'Roboto', sans-serif;
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
    border-radius: 8px;
}

p, div, span, button {
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

input {
    outline: none;
}
`;

export default GlobalStyles;
