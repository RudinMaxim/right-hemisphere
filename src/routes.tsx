import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage, PostPage } from './pages';
import { NotFoundPage } from './pages/NotFoundPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/message/:postId" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;