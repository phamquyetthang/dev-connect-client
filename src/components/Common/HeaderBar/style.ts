import styled from 'styled-components';
import { color } from 'src/lib/theme/mixin';

export const HeaderBarWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  height: 56px;
  border-bottom: 1px solid ${color('borderInput')};
  background-color: ${color('header')};

  .header__logo {
    .header_project_name {
      border: hidden;
      padding: 8px;
      border-radius: 4px;
    }
    .header__projects {
      display: grid;
      row-gap: 8px;
      button {
        background-color: inherit;
        border: hidden;
        text-align: start;
        margin-left: 2px;
        color: ${color('text1')};
      }
      button:hover {
        margin-left: 0px;
        border-left: 2px solid pink;
      }
    }
  }

  .header_tool {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50%;
      width: 40px;
      margin-left: 1em;
      cursor: pointer;
    }
  }

  .profile-modal {
    display: none;
    flex-direction: column;
    position: absolute;
    right: 8px;
    top: 60px;
    width: 280px;
    border-radius: 8px;
    background-color: ${color('background2')};
    border: 1px solid ${color('border')};
    box-shadow: 0px 2px 6px 2px ${color('hoverShadow')};
    z-index: 1000;

    &.show {
      display: flex;
    }

    .header_status {
      display: grid;
      grid-template-areas:
        'avt name'
        'avt status';
      grid-template-columns: 40px 1fr;
      column-gap: 12px;
      text-align: start;
      color: ${color('text1')};
      margin: 1em;
      img {
        grid-area: avt;
        width: 40px;
        border-radius: 4px;
      }
      h4 {
        grid-area: name;
        margin: 0;
        padding: 0;
      }
      span {
        grid-area: status;
      }
    }
    .copy_email {
      margin: 0 1em 1em;
    }
    .header_set {
      display: flex;
      flex-direction: column;
      border-top: 1px solid ${color('border')};
      border-bottom: 1px solid ${color('border')};
    }

    button {
      border: hidden;
      background-color: inherit;
      margin: 8px 1em;
      padding: 0;
      align-self: flex-start;
      cursor: pointer;
      color: ${color('text1')};
    }
  }
`;
