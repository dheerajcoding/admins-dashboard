import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Tables from './Tables';
import Charts from './Charts';
import Calendar from './Calendar';
import KanbanBoard from './KanbanBoard';
import styled from 'styled-components';

const MainContent = styled.div`
  margin-left: 250px;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const Layout = () => {
  return (
    <Router>
      <Sidebar />
      <MainContent>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<KanbanBoard />} />
        </Routes>
      </MainContent>
    </Router>
  );
};

export default Layout;
