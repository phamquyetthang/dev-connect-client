const commonTranslate = {
  close: 'Đóng',
  done: 'Hoàn tất',
  create: 'Tạo',
  editStatus: 'Sửa trạng thái',
  editProfile: 'Sửa thông tin',
  preferences: 'Tùy chọn',
  logout: 'Đăng xuất',
  dashboard: 'Chung',
};

export type CommonTranslateType = typeof commonTranslate;

export type CommonTranslateKeyType = keyof CommonTranslateType;

export default commonTranslate;
