import { FunctionComponent, memo } from 'react';
import { Controller } from 'react-hook-form';
import { IFromProps } from '../@types/formTypes';
import { TextAreaContain, TextAreaWrapper } from './styled';

interface IComponentProps {
  error?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  title?: string;
}
type IProps = IFromProps & IComponentProps;

const TextArea: FunctionComponent<IProps> = memo(
  ({
    name,
    control,
    rules,
    defaultValue = '',
    error,
    placeholder,
    className,
    title,
  }) => {
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <TextAreaContain className={className}>
            {!!title && <label>{title}</label>}
            <TextAreaWrapper
              {...field}
              // name={field.name}
              placeholder={placeholder}
              // onChange={field.onChange}
            />
            {error && <i>{error}</i>}
          </TextAreaContain>
        )}
      />
    );
  }
);

export default TextArea;