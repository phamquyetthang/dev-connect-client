const commonColor = {
  error: '#bf1650',
  backgroundButton: '#3db2ff',
  textButton: '#FFF',
};
export const lightTheme = {
  ...commonColor,
  background1: '#FFFFFF',
  background2: '#F5F7FB',
  background3: '#E6EBF5',
  grayButton: '#E6EBF5',
  text1: '#000',
  text2: '#262E35',
  borderInput: '#ccc',
};
export type ThemeType = typeof lightTheme;
export type ColorType = keyof typeof lightTheme;

export const darkTheme: ThemeType = {
  ...commonColor,
  background1: '#262E35',
  background2: '#303841',
  background3: '#36414A',
  grayButton: '#36414A',
  text1: '#e1e9f1',
  text2: '#fff',
  borderInput: 'inherit',
};
