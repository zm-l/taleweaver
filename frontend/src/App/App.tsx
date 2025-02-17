import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/calistoga/400.css';
import '@fontsource/caveat/400.css';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import Router from '../pages/router';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import theme from './theme';
import AuthProvider from '../context/AuthProvider';

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <Box fontSize="md">
          <NavBar />
          <Box mt="20">
            <Router />
          </Box>
          <Footer />
        </Box>
      </AuthProvider>
    </BrowserRouter>
  </ChakraProvider>
);
