import { createGlobalStyle } from 'styled-components';
import { color } from './lib/theme/mixin';

const GlobalStyle = createGlobalStyle`

    body{
        background-color: ${color('background1')};
        font-family: sans-serif;
        text-align: center;
        overflow: hidden;
    }

    .flex {
        display: flex;
    }

    .m1{
        margin: 8px;
    }

    .mh1{
        margin-left: 8px;
        margin-right: 8px;
    }

    .mv1 {
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .mt1 {
        margin-top: 8px;
    }
`;

export default GlobalStyle;
