const commonTranslate = {
  close: 'Đóng',
  done: "Hoàn tất",
  create: "Tạo",
  editProfile: 'Sửa thông tin',
};

export type CommonTranslateType = typeof commonTranslate;

export type CommonTranslateKeyType = keyof CommonTranslateType;

export default commonTranslate;
