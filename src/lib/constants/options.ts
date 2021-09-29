export enum REQUEST_TYPE {
  JSON = 'json',
  FROM_DATA = 'formData',
  X_WWW_FORM_URLENCODED = 'xWwwFormUrlencoded',
}

export interface IRequestTypeOption {
  value: REQUEST_TYPE;
  label: string;
}

export const REQUEST_TYPE_OPTIONS: IRequestTypeOption[] = [
  {
    value: REQUEST_TYPE.JSON,
    label: 'JSON',
  },
  {
    value: REQUEST_TYPE.FROM_DATA,
    label: 'Form-data',
  },
  {
    value: REQUEST_TYPE.X_WWW_FORM_URLENCODED,
    label: 'x-www-form-urlencoded',
  },
];

export interface IResponseTypeOption {
  value: 'json' | 'text' | 'key_value';
  label: string;
}
export const RESPONSE_TYPE_OPTIONS: IResponseTypeOption[] = [
  {
    value: 'json',
    label: 'JSON',
  },
  {
    value: 'text',
    label: 'Free text',
  },
  {
    value: 'key_value',
    label: 'Key - Value',
  },
];
