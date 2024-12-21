import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalDetails from './components/PersonalDetails';
import ProductDetails from './components/ProductDetails';
import ReviewSubmit from './components/ReviewSubmit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalDetails />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/review-submit" element={<ReviewSubmit />} />
      </Routes>
    </Router>
  );
}

export default App;
