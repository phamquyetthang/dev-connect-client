import { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';
import Select, { OptionTypeBase } from 'react-select';
import { IFromProps } from '../@types/formTypes';
import { SelectFieldWrapper } from './style';

interface IComponentProps {
  error?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  title?: string;
  options?: OptionTypeBase[];
  isMulti?: boolean;
  closeMenuOnSelect?: boolean;
}
type IProps = IFromProps & IComponentProps;

const SelectField: FunctionComponent<IProps> = ({
  name,
  placeholder,
  control,
  options,
  rules,
  error,
  className,
  title,
  isMulti = false,
  closeMenuOnSelect = true,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <SelectFieldWrapper className={className}>
          {!!title && <label>{title}</label>}
          <Select
            value={value}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            isMulti={isMulti}
            closeMenuOnSelect={closeMenuOnSelect}
            styles={{ option: (styles) => ({ ...styles, color: '#000' }) }}
          />
          {error && <i>{error}</i>}
        </SelectFieldWrapper>
      )}
      rules={rules}
    />
  );
};

export default SelectField;

interface ISelectFieldNormalProps {
  value: OptionTypeBase;
  onChange(value: OptionTypeBase): void;
}
export const SelectFieldNormal: FunctionComponent<
  IProps & ISelectFieldNormalProps
> = ({
  value,
  name,
  onChange,
  placeholder,
  options,
  error,
  className,
  title,
  isMulti = false,
  closeMenuOnSelect = true,
}) => {
  return (
    <SelectFieldWrapper className={className}>
      {!!title && <label>{title}</label>}
      <Select
        name={name}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        isMulti={isMulti}
        closeMenuOnSelect={closeMenuOnSelect}
        styles={{
          option: (styles) => ({ ...styles, color: '#000' }),
        }}
      />
      {error && <i>{error}</i>}
    </SelectFieldWrapper>
  );
};
