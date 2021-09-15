import { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';
import Select, { OptionTypeBase } from 'react-select';
import { color } from 'src/lib/theme/mixin';
import styled from 'styled-components';
import { IFromProps } from '../@types/formTypes';

interface IComponentProps {
  error?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  title?: string;
  options?: OptionTypeBase[];
}
type IProps = IFromProps & IComponentProps;

const SelectFieldWrapper = styled.div`
  i {
    color: ${color('error')};
    padding-left: 4px;
    font-size: 80%;
  }
`;

const SelectField: FunctionComponent<IProps> = ({
  name,
  placeholder,
  control,
  options,
  rules,
  error,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <SelectFieldWrapper>
          <Select value={value} onChange={onChange} options={options} placeholder={placeholder} />
          {error && <i>{error}</i>}
        </SelectFieldWrapper>
      )}
      rules={rules}
    />
  );
};

export default SelectField;
