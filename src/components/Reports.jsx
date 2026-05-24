import React from 'react';
import './Reports.css';

const ChartIcon = () => (
    <svg className="report-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M8 18v-2"></path>
        <path d="M12 18v-4"></path>
        <path d="M16 18v-6"></path>
        <circle cx="10" cy="11" r="2"></circle>
    </svg>
);

const SearchIcon = () => (
    <svg className="report-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="8" y1="13" x2="16" y2="13"></line>
        <line x1="8" y1="17" x2="16" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
        <circle cx="16.5" cy="17.5" r="3.5" fill="var(--color-bg-light)"></circle>
        <line x1="19" y1="20" x2="22" y2="23"></line>
    </svg>
);

const DocumentIcon = () => (
    <svg className="report-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="8" y1="13" x2="16" y2="13"></line>
        <line x1="8" y1="17" x2="16" y2="17"></line>
        <line x1="8" y1="9" x2="10" y2="9"></line>
    </svg>
);

const Reports = () => {
    const reportsData = [
        {
            id: 1,
            title: 'Quarterly report (Q1) - 2022-23',
            type: 'chart',
            link: '#'
        },
        {
            id: 2,
            title: "Founders' Note",
            type: 'document',
            link: 'https://docs.google.com/document/d/1U7nxnUPW89HNHyWWOFUe49a0cTBqYCwLzvBub5fI3tE/edit?tab=t.0'
        },
        {
            id: 3,
            title: 'Annual Report - 2022-23',
            type: 'document',
            link: '#'
        },
        {
            id: 4,
            title: 'Impact Assessment',
            type: 'chart',
            link: '#'
        }
    ];

    const renderIcon = (type) => {
        switch (type) {
            case 'chart': return <ChartIcon />;
            case 'search': return <SearchIcon />;
            default: return <DocumentIcon />;
        }
    };

    return (
        <section id="reports" className="reports-section section-padding">
            <div className="container">
                <h2 className="section-title text-center mb-lg" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Reports
                </h2>
                
                <div className="reports-grid">
                    {reportsData.map((report) => (
                        <a
                            key={report.id}
                            href={report.link}
                            className="report-card"
                            target={report.link.startsWith('http') ? '_blank' : undefined}
                            rel={report.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                            <div className="report-icon-container">
                                {renderIcon(report.type)}
                            </div>
                            <h3 className="report-title">{report.title}</h3>
                            <span className="report-link-text">click here to view</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reports;
