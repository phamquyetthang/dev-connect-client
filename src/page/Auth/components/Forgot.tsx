import { FunctionComponent, useCallback } from 'react';
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormReset,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Button from 'src/components/Base/Button';
import InputField from 'src/components/Base/Input';
import { EMAIL_REGEX } from 'src/lib/constants/regex';
import ROUTER_NAME from 'src/lib/constants/router';
import { AuthTransLateKeyType } from 'src/lib/translations/vn/auth';

interface IProps {
  handleForgot: () => void;
  control: Control<any>;
  errors: FieldErrors;
  reset: UseFormReset<FieldValues>;
  isDisableSubmit: boolean;
  loading: boolean;
  errorApi: string;
}

const ForgotForm: FunctionComponent<IProps> = ({
  handleForgot,
  control,
  errors,
  reset,
  isDisableSubmit,
  loading,
  errorApi,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const word = useCallback(
    (title: AuthTransLateKeyType) => t(`authTranslate.${title}`),
    [t]
  );
  const goToLogin = () => {
    history.push(ROUTER_NAME.auth.login);
    reset();
  };
  return (
    <form onSubmit={handleForgot}>
      <h1>{word('forgot')}</h1>
      <InputField
        name="email"
        control={control}
        placeholder="Email"
        error={errors?.email?.message}
        rules={{
          required: { value: true, message: word('requiredFeild') },
          pattern: {
            value: EMAIL_REGEX,
            message: word('invalid'),
          },
        }}
      />
      <Button
        title={word('getNewPass')}
        onClick={() => null}
        type="submit"
        disable={isDisableSubmit || loading}
        loading={loading}
      />
      <hr />
      <Button title={word('loginTitle')} onClick={goToLogin} color={'gray'} />
      {!!errorApi && (
        <span className="errorText">Thất bại : {errorApi}</span>
      )}
    </form>
  );
};

export default ForgotForm;
