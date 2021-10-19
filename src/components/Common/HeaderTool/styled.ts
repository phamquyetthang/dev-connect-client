import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

export const HeaderToolWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  column-gap: 24px;
  padding: 12px;
  align-items: center;

  .filter_bar {
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    /* justify-content: center; */
    input {
      margin: 0;
      padding-left: 36px;
    }

    &__search_icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 12px;
      width: 22px;
      height: 22px;
    }

    &__search {
      width: 50vw;
    }

    &__filter {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 12px;
      height: 35px;
      margin-left: -90px;
      border: hidden;
      border-radius: 4px;
      background-color: ${color('button2')};
      color: ${color('textBtn2')};

      svg {
        width: 16px;
        height: 16px;
        margin-right: 4px;
        fill: ${color('textBtn2')};
      }
    }
  }
`;
