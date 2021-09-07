import { FunctionComponent, useMemo } from 'react';
import { ButtonWrapper } from './style';
interface IProps {
  title: string;
  onClick: () => void;
  type?: 'submit' | 'button';
  disable?: boolean;
  className?: string;
  color?: string;
  loading?: boolean;
}
const Button: FunctionComponent<IProps> = ({
  title,
  onClick,
  type = 'button',
  disable = false,
  className,
  color,
  loading,
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
      className={`${classStyle} ${className}${loading ? ' btn-loading' : ''}`}
      disabled={disable}
    >
      <span>{title}</span>
    </ButtonWrapper>
  );
};

export default Button;
