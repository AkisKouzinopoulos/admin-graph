import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';
import { HOME_PAGE } from './pages/Paths';
import { theme } from './Theme';
import Home from './pages/Home/Home';

// Css
import './App.css';

const MainContainer = styled(Container)`
  background: var(--lightGreyBg);
  padding: 0;
  padding-top: 42px;
  margin: 0 auto;
`;

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <MainContainer maxWidth="lg">
        <Routes>
          <Route path={HOME_PAGE} element={<Home />} />
        </Routes>
      </MainContainer>
    </ThemeProvider>
  </Router>
);

export default App;
