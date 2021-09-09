const welcomeTranslate = {
  add: "Tạo mới dự án",
  name: 'Tên dự án',
  des: 'Mô tả dự án',
  addMember: 'Thêm thành viên',
  
};

export type WelcomeTranslateType = typeof welcomeTranslate;

export type WelcomeTranslateKeyType = keyof WelcomeTranslateType;

export default welcomeTranslate;
