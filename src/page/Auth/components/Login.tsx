import { FunctionComponent, useCallback } from 'react';
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormReset,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import Button from 'src/components/Base/Button';
import CheckBox from 'src/components/Base/CheckBox';
import InputField from 'src/components/Base/Input';
import { EMAIL_REGEX } from 'src/lib/constants/regex';
import ROUTER_NAME from 'src/lib/constants/router';
import { AuthTransLateKeyType } from 'src/lib/translations/vn/auth';

interface IProps {
  handleLogin: () => void;
  control: Control;
  errors: FieldErrors;
  reset: UseFormReset<FieldValues>;
}

const LoginFrom: FunctionComponent<IProps> = ({
  handleLogin,
  control,
  errors,
  reset,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const word = useCallback(
    (title: AuthTransLateKeyType) => t(`authTranslate.${title}`),
    [t]
  );
  const goToSignUp = () => {
    history.push(ROUTER_NAME.auth.signUp);
    reset();
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>{word('loginTitle')}</h1>
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
        type="password"
        placeholder="Password"
        error={errors?.password?.message}
        rules={{
          required: { value: true, message: word('requiredFeild') },
        }}
      />
      <div className="auth_other">
        <CheckBox
          title={word('rememberMe')}
          name="remember"
          control={control}
          id="remember"
          checked={true}
        />
        <Link to={ROUTER_NAME.auth.forgot}>{word('forgot')}</Link>
      </div>
      <Button
        title={word('loginTitle')}
        onClick={() => null}
        type="submit"
        // disable={true}
      />
      <hr />
      <Button title={word('signUpTitle')} onClick={goToSignUp} color={'gray'} />
    </form>
  );
};

export default LoginFrom;
