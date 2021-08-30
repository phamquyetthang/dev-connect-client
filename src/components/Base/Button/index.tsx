import { FunctionComponent, useMemo } from 'react';
import { ButtonWrapper } from './style';
interface IProps {
  title: string;
  onClick: () => void;
  type?: 'submit' | 'button';
  disable?: boolean;
  className?: string;
  color?: string;
}
const Button: FunctionComponent<IProps> = ({
  title,
  onClick,
  type = 'button',
  disable = false,
  className,
  color,
}) => {
  const classStyle = useMemo(() => {
    let class_name = '';
    if (disable) {
      class_name += ' disable';
    }
    if (color) {
      class_name += ' ' + color;
    }
    return class_name;
  }, [disable, color]);
  return (
    <ButtonWrapper
      onClick={onClick}
      type={type}
      className={`${classStyle} ${className}`}
      disabled={disable}
    >
      <span>{title}</span>
    </ButtonWrapper>
  );
};

export default Button;
