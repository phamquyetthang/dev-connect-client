import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import RootRouter from './page/router';
import { useAppSelector } from './hooks/useAppSelector';
import { darkTheme, lightTheme } from './lib/theme';

const App = () => {
  const theme = useAppSelector((state) => state.app.theme);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <RootRouter />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
