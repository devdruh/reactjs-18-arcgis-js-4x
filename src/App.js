// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, CssBaseline } from '@mui/material';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './pages/Home';
import Services from './pages/DataAndMaps';
import Layout from './layout/Index';
import About from './pages/About';

function App() {
  const defaultTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid component="main">
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path='data-maps' element={<Services />} />
              <Route path='about' element={<About/>} />
            </Route>
          </Routes>
        
        </BrowserRouter>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
