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
        color: ${color('text1')};
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
    button{
        cursor: pointer;
        
        &:active{
            opacity: 0.8;
        }
    }
      /* width */
    ::-webkit-scrollbar {
        width: 6px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: grey;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: grey;
    }
    .cs-avt {
  width: 50px;
  height: 50px;
  background-color: #454a74;
  color: #6f65c1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  line-height: 1;
}
.cs-avt-status {
  position: absolute;
  background-color: #06d6a0;
  right: 2px;
  bottom: 2px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
`;

export const ContainerWrapper = styled.article`
  margin: 0 6em;
`;

export default GlobalStyle;
