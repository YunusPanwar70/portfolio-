// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Portfolios from './components/Portfolios';

const App = () => {
  return (
    <Portfolios />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Portfolio />} />
    //     {/* Add more routes here if needed */}
    //   </Routes>
    // </Router>
  );
};
export default App;