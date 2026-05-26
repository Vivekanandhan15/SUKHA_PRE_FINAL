import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { teacherArticles } from '../data/teacherArticles';
import '../components/TeachersCorner.css';
import './TeachersCornerPage.css';
import './BlogPages.css';

const TeachersCornerPage = () => {
  const [faqOpen, setFaqOpen] = useState(0);

  const faqs = [
    {
      q: 'How can I join the teaching program?',
      a: 'You can apply through our "Join Us" section or email us at educationsukha@gmail.com.'
    },
    {
      q: 'What qualifications do I need to have?',
      a: 'All volunteers must be 18 years or older. A passion for teaching, being open to feedback and long term commitment is what we look for in our mentors.'
    },
    {
      q: 'Do you offer remote teaching opportunities?',
      a: 'No, we do not offer any remote teaching opportunities. But if you are interested in contributing for non-teaching remote opportunities, email us at educationsukha@gmail.com or reach out to us on Instagram/LinkedIn.'
    },
    {
      q: 'Is there a training period for new teachers?',
      a: 'Yes, all teacher mentors will be trained in the orientation, followed by monthly online/offline sessions. Additionally, some classes will be observed and helpful feedback will be shared to make you a better mentor.'
    },
    {
      q: 'Do you provide certificates?',
      a: "We provide an official program completion letter that outlines the details of your volunteer experience. This letter can be used for certification or documentation purposes. Volunteers are eligible to receive this letter provided they adhere to the program's non-negotiable requirements, which will be explained during the orientation."
    },
    {
      q: 'Do you provide reimbursements for transport?',
      a: 'Yes, we offer some reimbursement for transportation and printing expenses incurred during the program. Details regarding eligibility, reimbursement limits, and the process will be shared during the orientation session.'
    },
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

        {/* Side-by-side: articles left, FAQ right */}
        <div className="teachers-content-row">
          {/* Left: article cards */}
          <div className="teachers-articles-col">
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
          </div>

          {/* Right: FAQ */}
          <div className="teachers-faq-col">
            <h2 className="faq-title">FAQ</h2>
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
    </section>
  );
};

export default TeachersCornerPage;
