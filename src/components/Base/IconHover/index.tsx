import { FunctionComponent, ReactNode } from 'react';
import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';

const IconHoverWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    fill: white;
    background-color: ${color('background1')};
  }
  svg {
    fill: ${color('text1')};
    width: 18px;
    height: 18px;
  }
`;

interface IProps {
  children: ReactNode;
}

const IconHover: FunctionComponent<IProps> = ({ children }) => {
  return <IconHoverWrapper>{children}</IconHoverWrapper>;
};

export default IconHover;
