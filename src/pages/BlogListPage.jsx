import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import './BlogPages.css';

const BlogListPage = () => (
  <section className="blog-page section-padding">
    <div className="container">
      <div className="blog-page-header text-center">
        <h1 className="section-title">
          Student <span className="gradient-text">Blog</span>
        </h1>
        <p className="section-subtitle">
          Stories, reflections, and ideas from our students.
        </p>
      </div>

      <div className="blog-list-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-list-card glass-effect">
            <Link to={`/blog/${post.slug}`} className="blog-list-card-link">
              <div className="blog-list-cover">
                {post.coverImage ? (
                  <img src={post.coverImage} alt={post.title} />
                ) : (
                  <div className="blog-list-cover-placeholder" aria-hidden="true">
                    <span>{post.author.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="blog-list-body">
                <span className="blog-list-id">{post.id}</span>
                <h2>{post.title}</h2>
                <p className="blog-list-author">By {post.author}</p>
                <p className="blog-list-excerpt">{post.excerpt}</p>
                <span className="blog-read-more">Read full post →</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogListPage;
