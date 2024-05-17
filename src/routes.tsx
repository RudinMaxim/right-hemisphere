import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/message/:postId" element={<PostDetailsPage />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;