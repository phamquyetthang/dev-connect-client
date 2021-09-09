const commonColor = {
  error: '#bf1650',
 
  textButton: '#FFF',
  shadow: 'rgba(0, 0, 0, 0.06)',
  hoverShadow: 'rgba(0, 0, 0, 0.12)',
};
export const lightTheme = {
  ...commonColor,
  background1: '#FDFCE5',
  background2: '#D9E4DD',
  background3: '#CDC9C3',
  backgroundButton: '#555555',
  grayButton: '#E6EBF5',
  text1: '#000',
  text2: '#262E35',
  borderInput: '#ccc',
  border: '#ccc',
};
export type ThemeType = typeof lightTheme;
export type ColorType = keyof typeof lightTheme;

export const darkTheme: ThemeType = {
  ...commonColor,
  background1: '#262E35',
  background2: '#303841',
  background3: '#36414A',
  backgroundButton: '#3db2ff',
  grayButton: '#36414A',
  text1: '#e1e9f1',
  text2: '#fff',
  borderInput: 'inherit',
  border: 'inherit',
};

export const draculaTheme: ThemeType = {
  ...commonColor,
  background1: '#081229',
  background2: '#191D3A',
  background3: '#191D3A',
  backgroundButton: '#ec5990',
  grayButton: '#0E101C',
  text1: '#fff',
  text2: '#fff',
  borderInput: 'inherit',
  border: '#ec5990',
};
