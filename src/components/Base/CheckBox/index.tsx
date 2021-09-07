import { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';
import { IFromProps } from '../@types/formTypes';
import { CheckBoxWrapper } from './style';
interface ICheckBoxProps {
  title: string;
  id: string;
  name: string;
  checked: boolean;
}
type IProps = ICheckBoxProps & IFromProps;

const CheckBox: FunctionComponent<IProps> = ({
  control,
  defaultValue,
  rules,
  title,
  id,
  name,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <CheckBoxWrapper>
          <input
            type="checkbox"
            id={`checkbox_${id}`}
            checked={value}
            onChange={() => onChange(!value)}
          />
          <label htmlFor={`checkbox_${id}`}>{title}</label>
        </CheckBoxWrapper>
      )}
    />
  );
};

export default CheckBox;
