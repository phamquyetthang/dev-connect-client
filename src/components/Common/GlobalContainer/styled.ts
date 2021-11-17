import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';
export const GlobalContainerWrapper = styled.div`
  display: grid;
  position: relative;
  margin: 0;
  padding: 0;
  height: 100vh;
  grid-template-areas:
    'header header header'
    'sidebar container container'
    'sidebar container container';
  /* header {
    grid-area: header;
  } */
  /* nav {
    grid-area: sidebar;
    height: 100%;
  } */
  .container {
    grid-area: container;
    width: calc(100vw - 56px);
    position: relative;
    overflow-y: auto;
  }

  svg {
    height: 14px;
    width: 14px;
  }
`;

export const MainLoading = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 200;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  .loader {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #7269ef;
    border-radius: 50%;
    width: 36px;
    height: 35px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SnackBar = styled.div`
  position: fixed;
  bottom: 1em;
  .snack {
    width: 250px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    border-radius: 8px;
    color: white;
    margin-top: 0.5em;

    svg {
      cursor: pointer;
    }

    .status {
      display: flex;
      flex-direction: row;
      align-items: center;

      svg {
        margin-right: 8px;
        padding: 2px;
        border: 1px solid white;
        border-radius: 50%;
        fill: white;
      }
    }

    &.error {
      background-color: #e63e6d;
    }

    &.warning {
      background-color: #ffb830;
    }

    &.info {
      background-color: #b5ffd9;
      color: #000;
      svg {
        fill: #000;
        border-color: #000;
      }
    }

    &.success {
      background-color: #3db2ff;
    }
  }
`;

export const ErrorModalWrapper = styled.div`
  .modal {
    .modal__header {
      background-color: ${color('error')};
    }
  }
`;
