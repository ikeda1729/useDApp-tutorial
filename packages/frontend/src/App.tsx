import React from 'react';
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Container from '@mui/material/Container';

import { NavBar } from './components/NavBar';
import { Tabs } from './components/Tabs';
import { Exercise1 } from './components/Exercise1';
import { Exercise2 } from './components/Exercise2';
import { Exercise3 } from './components/Exercise3';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Tabs />
        <Routes>
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
          <Route path="/exercise3" element={<Exercise3 />} />
          <Route path="/" element={<Navigate to="/exercise1" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
