import { ChangeEvent, FunctionComponent, memo } from 'react';
import { Controller } from 'react-hook-form';
import { InputContain, InputWrapper } from './styled';
import { IFromProps } from '../@types/formTypes';

interface IComponentProps {
  error?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  title?: string;
}
type IProps = IFromProps & IComponentProps;

const InputField: FunctionComponent<IProps> = memo(
  ({
    name,
    control,
    rules,
    defaultValue = '',
    error,
    placeholder,
    className,
    type,
    title,
  }) => {
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <InputContain className={className}>
            {!!title && <label>{title}</label>}
            <InputWrapper
              {...field}
              // name={field.name}
              placeholder={placeholder}
              // onChange={field.onChange}
              type={type}
            />
            {error && <i>{error}</i>}
          </InputContain>
        )}
      />
    );
  }
);

export default InputField;

type IInputNormalProps = IComponentProps & {
  value: string;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const InputNormal: FunctionComponent<IInputNormalProps> = ({
  value,
  className,
  title,
  type,
  placeholder,
  error,
  name,
  onChange,
}) => {
  return (
    <div className={className}>
      {!!title && <label>{title}</label>}
      <InputWrapper
        value={value}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
      />
      {error && <i>{error}</i>}
    </div>
  );
};

export const InputBasic: FunctionComponent<IInputNormalProps> = ({
  value,
  className,
  type,
  placeholder,
  name,
  onChange,
}) => {
  return (
    <InputWrapper
      value={value}
      placeholder={placeholder}
      type={type}
      name={name}
      className={className}
      onChange={onChange}
    />
  );
};
