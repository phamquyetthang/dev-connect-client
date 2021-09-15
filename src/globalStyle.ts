import styled, { createGlobalStyle } from 'styled-components';
import { color } from './lib/theme/mixin';

const GlobalStyle = createGlobalStyle`

    body{
        background-color: ${color('background1')};
        font-family: sans-serif;
        text-align: center;
        overflow: hidden;
        padding: 0;
        margin: 0;
    }

    .errorText{
        color: ${color('error')};
        font-size: 14px;
        font-style: italic;
        text-align: center;
    }
    .flex {
        display: flex;
    }

    .flex-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .row{
        display: flex;
        flex-direction: row;
        select{
            width: 100px;
        }
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

export const ContainerWrapper = styled.article`
  margin: 0 6em;
`;

export default GlobalStyle;
