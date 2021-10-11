const docTranslate = {
  createApi: 'Tạo mới tài liệu API',
  title: 'Tiêu đề',
  createBtn: 'Tạo mới',
  method: 'Phương thức',
  members: 'Thành viên',
  description: 'Mô tả',
  name: 'Tên',
  typeField: 'Kiểu dữ liệu',
  required: 'Bắt buộc',
  note: 'Chú thích',
  createSuccess: 'Thêm Doc API thành công!',
  createFail: 'Tạo doc API thất bại!'
};

export type DocTranslateType = typeof docTranslate;

export type DocTranslateKeyType = keyof DocTranslateType;

export default docTranslate;
