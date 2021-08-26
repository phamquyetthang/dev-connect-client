import { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';
import { InputContain, InputWrapper } from './styled';
import { IFromProps } from '../@types/formTypes';

interface IComponentProps {
  error?: string;
  placeholder?: string;
}
type IProps = IFromProps & IComponentProps;

const InputField: FunctionComponent<IProps> = ({
  name,
  control,
  rules,
  defaultValue,
  error,
  placeholder,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <InputContain>
          <InputWrapper {...field} placeholder={placeholder} />
          {error && <span>{error}</span>}
        </InputContain>
      )}
    />
  );
};

export default InputField;
