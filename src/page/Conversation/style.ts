import styled from 'styled-components';

export const ConversationsWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100%;
  overflow: hidden;
  text-align: left;
  .cs-emoji-list {
    position: absolute;
    right: 8px;
    bottom: 5.2em;
  }
`;

export const UserChatListWrapper = styled.div`
  background-color: #303841;
  color: #a6b0cf;
  padding: 1em;
  .cs-search-bar {
    padding: 0.8em;
    background-color: #36414a;
    color: #9aa1b9;
    display: flex;
    align-items: center;
    line-height: 1;
    border-radius: 8px;
    input {
      background-color: #36414a;
      color: #9aa1b9;
      border: hidden;
      outline: none;
      margin-left: 0.5em;
    }
    input:focus {
      outline: none;
    }
  }
  svg {
    width: 16px;
  }
  .cs-list-user {
    margin-top: 2em;
    overflow-y: hidden;
    height: 85%;
    .cs-one-user {
      display: flex;
      flex-direction: row;
      cursor: pointer;
      padding: 0.5em;
      align-items: center;
      margin-bottom: 1em;
      margin-right: 1em;
      border-radius: 8px;
      .cs-avt {
        margin-right: 1em;
      }
      p {
        margin: 0;
        margin-top: 0.6em;
        font-size: 14px;
      }
      h5 {
        margin: 0;
        font-size: 15px;
      }
      &.selected {
        background-color: #36414a;
      }
      &:hover {
        background-color: #36414a;
      }
    }
  }
  .cs-list-user:hover {
    overflow-y: auto;
  }
`;
export const ChatContainerWrapper = styled.div`
  background-color: #262e35;
  display: flex;
  flex-direction: column;
  color: #a6b0cf;
  justify-content: space-between;
  overflow: hidden;
  .cs-chat-box-head {
    // flex: 1;
    border-bottom: 1px solid #36404a;
    display: flex;
    flex-direction: row;
    padding: 0.8em;
    justify-content: space-between;
    div:first-child {
      display: flex;
      align-items: center;
      h5 {
        margin: 0 1em;
        font-size: 15px;
      }
      .cs-avt-status {
        position: relative;
      }
    }
    .cs-chat-icons-tool {
      display: flex;
      align-items: center;
      i {
        margin: 0 1em;
        cursor: pointer;
      }
      i:hover {
        color: white;
      }
    }
  }
  .cs-chat-box-contain {
    // height: 80vh;
    flex: 10;
    overflow: hidden;
    padding: 1em;
    display: flex;
    flex-direction: column-reverse;
    margin-right: 6px;
    // margin-right: 4px;
    .cs-message {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      // width: 60vw;
      i {
        font-size: 65%;
      }
      .cs-avt {
        margin: 0 1em;
      }
      div:nth-child(2) {
        p {
          background-color: #36414a;
          color: #eff2f7;
          padding: 0.5em;
          border-radius: 8px;
          margin: 0;
          margin-top: 4px;
        }
        max-width: 30vw;
      }
    }
    .cs-m-end {
      flex-direction: row-reverse;
      justify-content: flex-start;
      text-align: right;
      p {
        text-align: left;
      }
    }
    .cs-hidden-avt {
      // display: none;
      background-color: initial;
      span {
        display: none;
      }
      img {
        display: none;
      }
    }
  }
  .cs-chat-box-contain:hover {
    overflow-y: auto;
    margin-right: 0;
  }
  .cs-chat-box-type {
    align-items: flex-end;
    // flex: 1;
    border-top: 1px solid #36404a;
    height: 50px;
    div:first-child {
      padding: 1em;
      background-color: #36404a;
      border-radius: 8px;
    }
    textarea {
      outline: none;
      background-color: initial;
      border: hidden;
      color: #a6b0cf;
      resize: none;
      width: 50vw;
    }
    .cs-chat-icons-tool {
      margin: 0;
      button {
        background-color: initial;
        cursor: pointer;
        color: white;
        font-size: 110%;
        text-align: center;
        padding: 0.8em;
        border-radius: 8px;
        outline: none;
        border: hidden;

        i {
          margin: 0;
        }
      }
      button:hover {
        background-color: #36414a;
      }
    }
  }
`;
