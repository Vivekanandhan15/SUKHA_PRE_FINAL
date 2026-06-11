import React from 'react';
import { Link } from 'react-router-dom';
import { teacherArticles } from '../data/teacherArticles';
import '../components/TeachersCorner.css';
import './TeachersCornerPage.css';
import './BlogPages.css';

const TeachersCornerPage = () => {
  return (
    <section className="teachers-page section-padding">
      <div className="container">
        <div className="teachers-page-header text-center mb-lg">
          <h1 className="section-title">
            Mentor's <span className="gradient-text">Hub</span>
          </h1>
          <p className="section-subtitle">
            Stories and reflections from educators and volunteers partnering with Sukha.
          </p>
        </div>

        <div className="blog-list-grid teachers-articles-grid">
          {teacherArticles.map((article) => (
            <article key={article.id} className="blog-list-card glass-effect">
              <Link to={`/teachers-corner/${article.slug}`} className="blog-list-card-link">
                <div className="blog-list-cover">
                  {article.coverImage ? (
                    <img src={article.coverImage} alt={article.title} />
                  ) : (
                    <div className="blog-list-cover-placeholder" aria-hidden="true">
                      <span>{article.author.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="blog-list-body">
                  <h2>{article.title}</h2>
                  <p className="blog-list-author">By {article.author}</p>
                  <p className="blog-list-excerpt">{article.excerpt}</p>
                  <span className="blog-read-more">Read full article →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersCornerPage;
