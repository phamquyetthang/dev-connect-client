import { useForm } from 'react-hook-form';
import InputField from 'src/components/Base/Input';

const AuthScreen = () => {
  const {
    control,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  return (
    <div>
      <InputField
        name="hello"
        control={control}
        placeholder="Xin chào dev connect"
        error={errors?.hello?.message}
        rules={{ required: { value: true, message: 'Không thế bỏ trống' } }}
      />
    </div>
  );
};

export default AuthScreen;
