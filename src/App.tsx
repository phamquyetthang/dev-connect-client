import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import RootRouter from './page/router';
import { useAppSelector } from './hooks/useAppSelector';
import { darkTheme, draculaTheme, lightTheme } from './lib/theme';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const App = () => {
  const { theme, language } = useAppSelector((state) => state.app);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (language !== t('name')) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n, t]);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : draculaTheme}>
      <RootRouter />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
