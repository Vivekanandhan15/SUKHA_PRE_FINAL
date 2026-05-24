import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import TeachersCornerPage from './pages/TeachersCornerPage';
import TeacherArticlePostPage from './pages/TeacherArticlePostPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/teachers-corner" element={<TeachersCornerPage />} />
          <Route path="/teachers-corner/:slug" element={<TeacherArticlePostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
