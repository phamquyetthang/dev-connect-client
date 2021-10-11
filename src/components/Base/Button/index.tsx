import { FunctionComponent, ReactNode, useMemo } from 'react';
import { ButtonWrapper } from './style';
interface IProps {
  title: string;
  onClick: () => void;
  type?: 'submit' | 'button';
  disable?: boolean;
  className?: string;
  color?: string;
  loading?: boolean;
  leftIcon?: ReactNode;
}
const Button: FunctionComponent<IProps> = ({
  title,
  onClick,
  type = 'button',
  disable = false,
  className,
  color,
  loading,
  leftIcon,
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
      className={`${classStyle} ${className}${loading ? ' btn-loading' : ''}${leftIcon ? ' btn-icon' : ''}`}
      disabled={disable}
    >
      {leftIcon || null}
      <span>{title}</span>
    </ButtonWrapper>
  );
};

export default Button;
