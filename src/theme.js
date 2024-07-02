import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#000',
  toggleBorder: '#FFF',
  background: '#FFF',
  sidebarBackground: '#f4f4f4',
  sidebarHeaderBackground: '#3498db', // Different background color for the header
};

export const darkTheme = {
  body: '#000',
  text: '#FFF',
  toggleBorder: '#6B8096',
  background: '#363537',
  sidebarBackground: '#2c3e50',
  sidebarHeaderBackground: '#2980b9', // Different background color for the header
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  h2 {
    color: ${({ theme }) => theme.text};
  }
  a {
    color: ${({ theme }) => theme.text};
  }
`;
