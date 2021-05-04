import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #fff;
    }

    body {
        font-family: 'Noto Sans JP', sans-serif;
        background-color: #040714;
    }
`

export default GlobalStyle;
