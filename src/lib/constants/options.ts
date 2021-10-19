import { DATA_TYPES, METHOD_API } from '.';

export type SELECT_OPTION = {
  value: string;
  label: string;
};

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

export const METHOD_OPTIONS: SELECT_OPTION[] = [
  {
    value: METHOD_API.GET,
    label: METHOD_API.GET,
  },
  {
    value: METHOD_API.POST,
    label: METHOD_API.POST,
  },
  {
    value: METHOD_API.PUT,
    label: METHOD_API.PUT,
  },
  {
    value: METHOD_API.DELETE,
    label: METHOD_API.DELETE,
  },
  {
    value: METHOD_API.PATCH,
    label: METHOD_API.PATCH,
  },
  {
    value: METHOD_API.CONNECT,
    label: METHOD_API.CONNECT,
  },

  {
    value: METHOD_API.HEAD,
    label: METHOD_API.HEAD,
  },
  {
    value: METHOD_API.OPTIONS,
    label: METHOD_API.OPTIONS,
  },

  {
    value: METHOD_API.TRACE,
    label: METHOD_API.TRACE,
  },
];

export const DATA_TYPES_OPTION: SELECT_OPTION[] = Object.values(DATA_TYPES).map(
  (item) => ({
    label: item,
    value: item,
  })
);
