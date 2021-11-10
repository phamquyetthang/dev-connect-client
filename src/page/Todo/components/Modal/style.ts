import styled from "styled-components";

export const EditModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 60vh;
  margin: 0 300px;
  .input {
    padding: 8px;
    height: auto;
    input {
      padding: 8px;
      border-radius: 0;
      margin-top: 0.5em;
    }
    textarea {
      padding: 8px;
      border-radius: 0;
      margin-top: 0.5em;
    }
  }

  .datePicker {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    align-items: center;
    margin-top: 1em;
    .inputPicker {
      width: auto;
      display: flex;
      justify-content: end;
        input{
            height: 20px;
        }
    }
  }
`;

export const CreateModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 60vh;
  margin: 0 300px;
  .input {
    padding: 8px;
    height: auto;
    input {
      padding: 8px;
      border-radius: 0;
      margin-top: 0.5em;
    }
    textarea {
      padding: 8px;
      border-radius: 0;
      margin-top: 0.5em;
    }
  }

  .datePicker {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    align-items: center;
    margin-top: 1em;
    .inputPicker {
      width: auto;
      display: flex;
      justify-content: end;
        input{
            height: 20px;
        }
    }
  }
`;