import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import RootRouter from './page/router';
import { useAppSelector } from './hooks/useAppSelector';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import useAppTheme from './hooks/useAppTheme';

const App = () => {
  const { language } = useAppSelector((state) => state.app);
  const theme = useAppTheme();
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (language !== t('name')) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n, t]);

  return (
    <ThemeProvider theme={theme}>
      <RootRouter />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
