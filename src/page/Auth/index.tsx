import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ChangeLangue from 'src/components/Common/ChangeLangue';
import ChangeTheme from 'src/components/Common/ChangeTheme';
import ForgotForm from './components/Forgot';
import LoginFrom from './components/Login';
import SignUpFrom from './components/SignUp';
import { AuthWrapper } from './styles';

const AuthScreen = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});
  const { type } = useParams<{ type: string }>();
  const onLogin = () => {};
  const onSignUp = () => {};
  const onForgot = () => {};
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
          reset={reset}
        />
      )}
      {type === 'signUp' && (
        <SignUpFrom
          control={control}
          errors={errors}
          handleSignUp={handleSubmit(onSignUp)}
          reset={reset}
        />
      )}
      {type === 'forgot' && (
        <ForgotForm
          control={control}
          errors={errors}
          handleForgot={handleSubmit(onForgot)}
          reset={reset}
        />
      )}
    </AuthWrapper>
  );
};

export default AuthScreen;
