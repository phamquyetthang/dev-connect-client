const commonTranslate = {
  close: 'Đóng',
  done: "Hoàn tất",
  create: "Tạo",
  editProfile: 'Sửa thông tin',
  logout: 'Đăng xuất',
};

export type CommonTranslateType = typeof commonTranslate;

export type CommonTranslateKeyType = keyof CommonTranslateType;

export default commonTranslate;
