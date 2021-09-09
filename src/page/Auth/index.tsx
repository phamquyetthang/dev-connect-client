import { isEmpty } from 'lodash';
import { useCallback } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import ChangeLangue from 'src/components/Common/ChangeLangue';
import ChangeTheme from 'src/components/Common/ChangeTheme';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAppSelector } from 'src/hooks/useAppSelector';
import ROUTER_NAME from 'src/lib/constants/router';
import {
  clearError,
  forgotService,
  signInService,
  signUpService,
} from 'src/services/auth';
import ForgotForm from './components/Forgot';
import LoginFrom from './components/Login';
import SignUpFrom from './components/SignUp';
import { AuthWrapper } from './styles';

const AuthScreen = () => {
  const { type } = useParams<{ type: string }>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      ...(type !== 'forgot' && { password: '' }),
      ...(type === 'signUp' && { first_name: '', last_name: '' }),
    },
  });

  const { dirtyFields } = useFormState({
    control,
  });

  const dispatch = useAppDispatch();

  const { error: err, loading } = useAppSelector((state) => state.auth);

  const history = useHistory();

  const isDisableSubmit = useCallback(() => {
    let isDirtyForm = dirtyFields.email;

    if (type === 'signUp') {
      isDirtyForm =
        isDirtyForm && dirtyFields.first_name && dirtyFields.last_name;
    }
    if (type !== 'forgot') {
      isDirtyForm = isDirtyForm && dirtyFields.password;
    }
    return !isDirtyForm || !isEmpty(errors);
  }, [type, dirtyFields, errors]);

  const handleReset = () => {
    reset();
    dispatch(clearError());
  };
  const onLogin = (data: any) => {
    dispatch(
      signInService({
        ...data,
        callback: () => history.push(ROUTER_NAME.welcome.path),
      })
    );
  };

  const onSignUp = (data: any) => {
    dispatch(
      signUpService({ ...data, callback: () => alert('Đăng ký thành công') })
    );
  };

  const onForgot = (data: any) => {
    dispatch(
      forgotService({
        ...data,
        callback: () => alert('Mật khẩu mới đã được gửi vào email của bạn'),
      })
    );
  };

  return (
    <AuthWrapper>
      <div className="auth_change">
        <ChangeLangue />
        <ChangeTheme />
      </div>
      {type === 'login' && (
        <LoginFrom
          control={control}
          errors={errors}
          handleLogin={handleSubmit(onLogin)}
          reset={handleReset}
          isDisableSubmit={isDisableSubmit()}
          loading={loading}
          errorApi={err}
        />
      )}
      {type === 'signUp' && (
        <SignUpFrom
          control={control}
          errors={errors}
          handleSignUp={handleSubmit(onSignUp)}
          reset={handleReset}
          isDisableSubmit={isDisableSubmit()}
          loading={loading}
          errorApi={err}
        />
      )}
      {type === 'forgot' && (
        <ForgotForm
          control={control}
          errors={errors}
          handleForgot={handleSubmit(onForgot)}
          reset={handleReset}
          isDisableSubmit={isDisableSubmit()}
          loading={loading}
          errorApi={err}
        />
      )}
    </AuthWrapper>
  );
};

export default AuthScreen;
