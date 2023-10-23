// import logo from './logo.svg';
import * as React from 'react';
import './App.css';
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

function App() {

  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const defaultTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={defaultTheme}>
        <Grid component="main">
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<Home />} />
                <Route path='data-and-map' element={<DataAndMap />} />
                <Route path='about' element={<About/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
