import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Component {...pageProps} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
}
