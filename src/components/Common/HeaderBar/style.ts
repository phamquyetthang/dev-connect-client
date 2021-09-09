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
  background-color: ${color('background2')};
  position: sticky;
  left: 0;
  right: 0;

  .header_tool {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50%;
      width: 40px;
      margin-left: 1em;
    }
  }

  .profile-modal {
    display: none;
    flex-direction: column;
    position: absolute;
    padding: 1em;
    right: 8px;
    top: 60px;
    width: 280px;
    border-radius: 8px;
    box-shadow: 0 0 0 1px rgba(29, 28, 29, 0.12),
      0 4px 12px 0 rgba(0, 0, 0, 0.12);

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
  }
`;
