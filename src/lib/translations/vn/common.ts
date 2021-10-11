const commonTranslate = {
  close: 'Đóng',
  done: 'Hoàn tất',
  create: 'Tạo mới',
  editStatus: 'Sửa trạng thái',
  editProfile: 'Sửa thông tin',
  preferences: 'Tùy chọn',
  logout: 'Đăng xuất',
  dashboard: 'Chung',
  filter: 'Bộ lọc'
};

export type CommonTranslateType = typeof commonTranslate;

export type CommonTranslateKeyType = keyof CommonTranslateType;

export default commonTranslate;
