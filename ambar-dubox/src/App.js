import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import MainPage from './Components/MainPage';
import CoursesPage from './Components/CoursesPage';
import UnderConstruction from './Components/common/UnderConstruction';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
