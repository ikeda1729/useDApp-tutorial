import React from 'react';
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Container from '@mui/material/Container';

import { NavBar } from './components/NavBar';
import { Tabs } from './components/Tabs';
import { Task1 } from './components/Task1';
import { Task2 } from './components/Task2';
import { Task3 } from './components/Task3';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Tabs />
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/" element={<Navigate to="/task1" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
