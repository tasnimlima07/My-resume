import React from 'react';
import { Container, Grid } from '@mui/material';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Resumee from './pages/Resume/Resumee';
import Portfolio from './pages/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>

        <Grid item xs style={{ backgroundColor: 'red' }}>
          <Header />
          <Router>
            <Routes>
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/" element={<Resumee />} />
            </Routes>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
