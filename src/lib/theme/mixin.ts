import { ColorType, ThemeType } from './index';
export const color =
  (colorName: ColorType) =>
  ({ theme }: { theme: ThemeType }) =>
    theme[colorName];
