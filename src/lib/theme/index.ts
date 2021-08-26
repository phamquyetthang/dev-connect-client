const palettes = {
  text1: '#fff',
  text2: '#fff',
  error: 'pink',
};
const theme = {
  palettes,
};
export type ThemeType = typeof theme;
export type ColorType = keyof typeof palettes;
export default theme;
