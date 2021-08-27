const commonColor = {
  error: '#bf1650',
};
export const lightTheme = {
  ...commonColor,
  background1: '#FFFFFF',
  background2: '#E6EBF5',
  text1: '#000',
};
export type ThemeType = typeof lightTheme;
export type ColorType = keyof typeof lightTheme;

export const darkTheme: ThemeType = {
  ...commonColor,
  background1: '#262E35',
  background2: '#303841',
  text1: '#e1e9f1',
};
