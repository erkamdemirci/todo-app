import { ThemeProvider } from 'styled-components';
import { UserProvider } from './contexts/UserContext';
import ThemeContext from './contexts/ThemeContext';

import TogglerButton from './components/ThemeToggler';
import useThemeMode from './hooks/useThemeMode';

import GlobalStyle from './styles/global';
import { lightTheme, darkTheme } from './styles/themes';

import Layout from './components/Layout';

function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <UserProvider>
      <ThemeContext>
        <ThemeProvider theme={themeMode}>
          <GlobalStyle />
          <header>
            <TogglerButton themeToggler={themeToggler} />
          </header>
          <Layout />
        </ThemeProvider>
      </ThemeContext>
    </UserProvider>
  );
}

export default App;
