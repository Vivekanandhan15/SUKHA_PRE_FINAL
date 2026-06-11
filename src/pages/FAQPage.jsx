import React, { useState } from 'react';
import '../components/TeachersCorner.css'; // reuse styling for FAQ

const FAQPage = () => {
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
      q: 'Do you provide reimbursements?',
      a: 'We offer reimbursements only for printing expenses incurred during the program. The process will be explained during the orientation session.'
    },
  ];

  return (
    <section className="teachers-page section-padding">
      <div className="container">
        <div className="teachers-page-header text-center mb-lg">
          <h1 className="section-title">
            Frequently <span className="gradient-text">Asked Questions</span>
          </h1>
        </div>
        <div className="faq-wrapper">
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
    </section>
  );
};

export default FAQPage;
