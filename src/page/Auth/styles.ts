import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const AuthWrapper = styled.article`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${color('background1')};

  .auth_change {
    position: absolute;
    right: 1em;
    top: 1em;
    display: flex;
    flex-direction: row;
  }

  form {
    width: 20vw;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    background-color: ${color('background2')};
    padding: 3em;
    border-radius: 16px;

    .auth_other {
      display: flex;
      font-size: 14px;
      line-height: 1;
      justify-content: space-between;

      a {
        color: ${color('text1')};
      }
    }

    h1 {
      color: ${color('text1')};
      margin-top: 0;
    }

    hr {
      width: 100%;
      margin: 32px 0;
    }

    button{
      width: 50%;
      align-self: center;
      border-radius: 24px;
    }
  }
`;
