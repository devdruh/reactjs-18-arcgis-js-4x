// import logo from './logo.svg';
import { useState, useMemo } from 'react';
import './assets/app.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './pages/Home';
import DataAndMap from './pages/DataAndMap';
import Layout from './layout/Index';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, CssBaseline } from '@mui/material';
import { ColorModeContext } from './utils/variables';
import { CookiesProvider, useCookies } from 'react-cookie';

function App() {

  const [cookies, setCookie] = useCookies(['isDarkMode']);
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light');
        setCookie('isDarkMode', mode);
      },
    }),
    [mode, setCookie],
  );

  const defaultTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: cookies.isDarkMode === undefined ? 'light' : cookies.isDarkMode
        },
      }),
    [cookies.isDarkMode],
  );

  return (
    <CookiesProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={defaultTheme}>
          <Grid component="main">
            <CssBaseline />
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Layout/>}>
                  <Route index element={<Home />} />
                  <Route path='data-and-map' element={<DataAndMap />}/>
                  <Route path='about' element={<About/>} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Grid>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CookiesProvider>
  );
}

export default App;
