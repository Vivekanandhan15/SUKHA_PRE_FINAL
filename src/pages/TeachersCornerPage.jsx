import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { teacherArticles } from '../data/teacherArticles';
import '../components/TeachersCorner.css';
import './TeachersCornerPage.css';
import './BlogPages.css';

const TeachersCornerPage = () => {
  const [faqOpen, setFaqOpen] = useState(0);

  const faqs = [
    { q: 'How can I join the teaching program?', a: 'You can apply through our "Join Us" section or send your CV to careers@sukha.org' },
    { q: 'What are the required qualifications?', a: 'A graduate degree and a passion for rural education are our primary requirements.' },
    { q: 'Do you offer remote teaching opportunities?', a: 'Yes, we have several digital literacy programs that can be taught remotely.' },
    { q: 'Is there a training period for new teachers?', a: 'Yes, every teacher undergoes a 2-week orientation program before starting.' },
    { q: 'Do you provide certificates and what is the refund policy?', a: 'Yes, we provide official certificates upon course completion. Regarding our refund policy, please contact our support team for detailed terms and conditions.' },
  ];

  return (
    <section className="teachers-page section-padding">
      <div className="container">
        <div className="teachers-page-header text-center mb-lg">
          <h1 className="section-title">
            Teachers <span className="gradient-text">Corner</span>
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
                  <span className="blog-list-id">{article.id}</span>
                  <h2>{article.title}</h2>
                  <p className="blog-list-author">By {article.author}</p>
                  <p className="blog-list-excerpt">{article.excerpt}</p>
                  <span className="blog-read-more">Read full article →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="teachers-faq-section">
          <h2 className="section-title text-center teachers-faq-heading">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="teachers-layout teachers-faq-layout">
            <div className="faq-section">
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item ${faqOpen === index ? 'active' : ''}`}
                    onClick={() => setFaqOpen(faqOpen === index ? -1 : index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setFaqOpen(faqOpen === index ? -1 : index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="faq-question">
                      <span>{faq.q}</span>
                      <div className="faq-line" />
                    </div>
                    {faqOpen === index && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersCornerPage;
