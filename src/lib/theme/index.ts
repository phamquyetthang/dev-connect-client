const commonColor = {
  error: '#bf1650',
  shadow: 'rgba(0, 0, 0, 0.06)',
  hoverShadow: 'rgba(0, 0, 0, 0.12)',
  warning: '#ffb830',
  info: '#b5ffd9',
  success: '#3db2ff',
};
export const lightTheme = {
  ...commonColor,
  header: '#24292f',
  background1: '#FFFFFF',
  background2: '#f6f8fa',
  button1: '#2da44e',
  button2: '#E6EBF5',
  text1: '#24292f',
  textBtn1: '#fff',
  textBtn2: '#24292f',
  borderInput: '#d0d7de',
  border: '#d0d7de',
  hoverHeader: '#13161A',
};
export type ThemeType = typeof lightTheme;
export type ColorType = keyof typeof lightTheme;

export const darkTheme: ThemeType = {
  ...commonColor,
  header: '#191D3A',
  background1: '#262E35',
  background2: '#303841',
  button1: '#3db2ff',
  button2: '#36414A',
  text1: '#e1e9f1',
  textBtn1: '#fff',
  textBtn2: '#fff',
  borderInput: 'inherit',
  border: '#516391',
  hoverHeader: '#13161A',
};

export const draculaTheme: ThemeType = {
  ...commonColor,
  header: '#191D3A',
  background1: '#081229',
  background2: '#191D3A',
  button1: '#ec5990',
  button2: '#0E101C',
  text1: '#fff',
  textBtn1: '#fff',
  textBtn2: '#fff',
  borderInput: 'inherit',
  border: '#ec5990',
  hoverHeader: '#13161A',
};

export const capuchinoTheme: ThemeType = {
  ...commonColor,
  header: '#CAB9A6',
  background1: '#EDECE7',
  background2: '#DFD1C0',
  button1: '#CAB9A6',
  button2: '#0E101C',
  text1: '#642116',
  textBtn1: '#fff',
  textBtn2: '#fff',
  borderInput: 'inherit',
  border: '#39B6FF',
  hoverHeader: '#13161A',
};

export const matchaTheme: ThemeType = {
  ...commonColor,
  header: '#B0D8A0',
  background1: '#F6F6F6',
  background2: '#E0E7ED',
  button1: '#B0D8A0',
  button2: '#0E101C',
  text1: '#4A4B57',
  textBtn1: '#fff',
  textBtn2: '#fff',
  borderInput: 'inherit',
  border: '#39B6FF',
  hoverHeader: '#13161A',
};

export const grayTheme: ThemeType = {
  ...commonColor,
  header: '#4A4B57',
  background1: '#D4CED4',
  background2: '#AEB0C6',
  button1: '#4A4B57',
  button2: '#D4CED4',
  text1: '#DFD1C0',
  textBtn1: '#fff',
  textBtn2: '#fff',
  borderInput: 'inherit',
  border: '#39B6FF',
  hoverHeader: '#13161A',
};

export const blueBeeTheme: ThemeType = {
  ...commonColor,
  header: '#FBCF60',
  background1: '#EDECE7',
  background2: '#FFFFFF',
  button1: '#2C05F2',
  button2: '#0E101C',
  text1: '#000',
  textBtn1: '#fff',
  textBtn2: '#fff',
  borderInput: 'inherit',
  border: '#39B6FF',
  hoverHeader: '#13161A',
};
