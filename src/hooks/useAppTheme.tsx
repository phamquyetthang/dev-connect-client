import { useAppSelector } from './useAppSelector';
import {
  blueBeeTheme,
  capuchinoTheme,
  darkTheme,
  draculaTheme,
  grayTheme,
  lightTheme,
  matchaTheme,
} from '../lib/theme';

const useAppTheme = () => {
  const theme = useAppSelector((state) => state.app.theme);
  switch (theme) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    case 'dracula':
      return draculaTheme;
    case 'capuchino':
      return capuchinoTheme;
    case 'matcha':
      return matchaTheme;
    case 'gray':
      return grayTheme;
    case 'blueBee':
      return blueBeeTheme;
    default:
      return lightTheme;
  }
};

export default useAppTheme;
