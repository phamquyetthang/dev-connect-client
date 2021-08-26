import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import i18n from './i18n';
import theme from './lib/theme';
import { store } from './rootStore';
import GlobalStyle from './globalStyle';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <h1>Hello </h1>
            <GlobalStyle />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
