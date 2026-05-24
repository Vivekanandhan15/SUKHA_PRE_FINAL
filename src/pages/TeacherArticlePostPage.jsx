import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getTeacherArticleBySlug } from '../data/teacherArticles';
import ArticlePostView from '../components/ArticlePostView';

const TeacherArticlePostPage = () => {
  const { slug } = useParams();
  const post = getTeacherArticleBySlug(slug);

  if (!post) {
    return <Navigate to="/teachers-corner" replace />;
  }

  return (
    <ArticlePostView
      post={post}
      backLink="/teachers-corner"
      backLabel="Back to Teachers Corner"
    />
  );
};

export default TeacherArticlePostPage;
