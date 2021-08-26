import {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
  UnpackNestedValue,
} from 'react-hook-form';

export type IFromProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
  shouldUnregister?: boolean;
  defaultValue?: UnpackNestedValue<FieldPathValue<TFieldValues, TName>>;
  control?: Control<TFieldValues>;
};
