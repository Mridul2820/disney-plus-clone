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

        @media only screen and (min-width: 768px) {
            font-size: 16px;
        }

        @media only screen and (min-width: 480px) and (max-width: 768px) {
            font-size: 15px;
        }
    
        @media only screen and (max-width: 479px) {
            font-size: 14px;
        }
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        color: #f9f9f9;
        text-decoration: none;
    }

    h4 {
        margin: 24px 0;
    }
`

export default GlobalStyle;
