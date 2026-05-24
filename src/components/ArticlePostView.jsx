import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/BlogPages.css';

const ArticlePostView = ({ post, backLink, backLabel }) => (
  <article className="blog-post-page section-padding">
    <div className="container blog-post-container">
      <Link to={backLink} className="blog-back-link">
        ← {backLabel}
      </Link>

      <header className="blog-post-header">
        <span className="blog-list-id">{post.id}</span>
        <h1>{post.title}</h1>
        <p className="blog-post-byline">By {post.author}</p>
      </header>

      <div className="blog-post-cover">
        {post.coverImage ? (
          <img src={post.coverImage} alt={post.title} />
        ) : (
          <div className="blog-post-cover-placeholder">
            <span className="blog-post-cover-initial">{post.author.charAt(0)}</span>
            <p>{post.author}</p>
          </div>
        )}
      </div>

      <div className="blog-post-content">
        {(post.factBox ? post.paragraphs.slice(0, -1) : post.paragraphs).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {post.factBox && (
          <aside className="blog-fact-box glass-effect">
            <h3>{post.factBox.title}</h3>
            <p>{post.factBox.text}</p>
          </aside>
        )}

        {post.factBox && post.paragraphs.slice(-1).map((paragraph, index) => (
          <p key={`closing-${index}`}>{paragraph}</p>
        ))}

        {post.references?.length > 0 && (
          <div className="blog-references">
            <h3>References</h3>
            {post.referencesIntro && (
              <p className="blog-references-intro">{post.referencesIntro}</p>
            )}
            <ul>
              {post.references.map((ref) => (
                <li key={ref.url}>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer">
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </article>
);

export default ArticlePostView;
