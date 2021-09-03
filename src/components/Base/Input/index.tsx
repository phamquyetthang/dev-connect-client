import { FunctionComponent, memo } from 'react';
import { Controller } from 'react-hook-form';
import { InputContain, InputWrapper } from './styled';
import { IFromProps } from '../@types/formTypes';

interface IComponentProps {
  error?: string;
  placeholder?: string;
  className?: string;
  type?: string;
}
type IProps = IFromProps & IComponentProps;

const InputField: FunctionComponent<IProps> = memo(
  ({
    name,
    control,
    rules,
    defaultValue = "",
    error,
    placeholder,
    className,
    type,
  }) => {
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <InputContain className={className}>
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
