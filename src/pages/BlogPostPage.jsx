import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getBlogBySlug } from '../data/blogs';
import ArticlePostView from '../components/ArticlePostView';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const postWithRefs = {
    ...post,
    referencesIntro: post.referencesIntro ?? (post.references?.length
      ? 'These below are the sites I have read to understand what Zeigarnik effect is?'
      : undefined),
  };

  return (
    <ArticlePostView
      post={postWithRefs}
      backLink="/blog"
      backLabel="Back to Student Blog"
    />
  );
};

export default BlogPostPage;
