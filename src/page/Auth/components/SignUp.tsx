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
  handleSignUp: () => void;
  control: Control<any>;
  errors: FieldErrors;
  reset: UseFormReset<FieldValues>;
  isDisableSubmit: boolean;
  errorApi: string;
  loading: boolean;
}

const SignUpFrom: FunctionComponent<IProps> = ({
  handleSignUp,
  control,
  errors,
  reset,
  isDisableSubmit,
  errorApi,
  loading,
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
    <form onSubmit={handleSignUp}>
      <h1>{word('signUpTitle')}</h1>
      <InputField
        name="first_name"
        control={control}
        placeholder="First Name"
        error={errors?.first_name?.message}
        rules={{
          required: { value: true, message: word('requiredFeild') },
        }}
      />
      <InputField
        name="last_name"
        control={control}
        placeholder="Last Name"
        error={errors?.last_name?.message}
        rules={{
          required: { value: true, message: word('requiredFeild') },
        }}
      />
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
      <InputField
        name="password"
        control={control}
        placeholder="Password"
        type="password"
        error={errors?.password?.message}
        rules={{
          required: { value: true, message: word('requiredFeild') },
        }}
      />
      <Button
        title={word('signUpTitle')}
        onClick={() => null}
        type="submit"
        loading={loading}
        disable={isDisableSubmit || loading}
      />
      <hr />
      <Button title={word('loginTitle')} onClick={goToLogin} color={'gray'} />
      {!!errorApi && (
        <span className="errorText">Đăng ký thất bại : {errorApi}</span>
      )}
    </form>
  );
};

export default SignUpFrom;
