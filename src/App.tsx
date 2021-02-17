import React from 'react';

import Layout from './components/Layout';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import Light from './styles/themes/light';
import Dark from './styles/themes/dark';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', Light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? Dark : Light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Layout toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
