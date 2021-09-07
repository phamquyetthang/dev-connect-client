const authTranslate = {
  loginTitle: 'Đăng nhập',
  signUpTitle: 'Đăng ký',
  requiredFeild: 'Không được bỏ trống',
  invalid: 'Trường không hợp lệ !',
  rememberMe: 'Nhớ tài khoản',
  forgot: 'Quên mật khẩu?',
  getNewPass: 'Lấy mật khẩu',
};

export type AuthTransLateType = typeof authTranslate;

export type AuthTransLateKeyType = keyof AuthTransLateType;

export default authTranslate;
