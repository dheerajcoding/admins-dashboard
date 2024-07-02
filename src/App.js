import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import Layout from './components/Layout';
import styled from 'styled-components';
import { Button } from '@mui/material';

const ThemeToggleBtn = styled(Button)`
  position: fixed;
  top: 10px;
  right: 10px;
`;

const App = () => {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <ThemeToggleBtn variant="contained" onClick={themeToggler}>
          Switch Theme
        </ThemeToggleBtn>
        <Layout />
      </>
    </ThemeProvider>
  );
};

export default App;
