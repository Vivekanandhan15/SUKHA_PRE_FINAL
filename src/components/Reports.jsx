import React, { useState } from 'react';
import './Reports.css';
import FounderNoteModal from './FounderNoteModal';

import q1Report from '../assets/documents/Q1 2026 Impact Quarterly Progress Report .pdf';
import q4Report from '../assets/documents/Q4 2025 Impact Quarterly Progress Report .pdf.pdf';

const PdfIcon = () => (
    <svg className="report-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M8 18v-2" />
        <path d="M12 18v-4" />
        <path d="M16 18v-6" />
    </svg>
);

const NoteIcon = () => (
    <svg className="report-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
        <line x1="8" y1="9" x2="10" y2="9" />
    </svg>
);

const Reports = () => {
    const [founderOpen, setFounderOpen] = useState(false);

    const pdfReports = [
        {
            id: 1,
            title: 'Impact Quarterly Progress Report — Q4 2025',
            file: q4Report,
            filename: 'Sukha_Q4_2025_Impact_Report.pdf',
        },
        {
            id: 2,
            title: 'Impact Quarterly Progress Report — Q1 2026',
            file: q1Report,
            filename: 'Sukha_Q1_2026_Impact_Report.pdf',
        },
    ];

    return (
        <>
            <section id="reports" className="reports-section section-padding">
                <div className="container">
                    <h2
                        className="section-title text-center mb-lg"
                        style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
                    >
                        Reports
                    </h2>

                    <div className="reports-grid">
                        {/* PDF Download Cards */}
                        {pdfReports.map((report) => (
                            <a
                                key={report.id}
                                href={report.file}
                                download={report.filename}
                                className="report-card"
                            >
                                <div className="report-icon-container">
                                    <PdfIcon />
                                </div>
                                <h3 className="report-title">{report.title}</h3>
                                <span className="report-link-text">Download PDF ↓</span>
                            </a>
                        ))}

                        {/* Founder's Note — opens as popup */}
                        <button
                            className="report-card report-card-btn"
                            onClick={() => setFounderOpen(true)}
                            id="founder-note-btn"
                        >
                            <div className="report-icon-container">
                                <NoteIcon />
                            </div>
                            <h3 className="report-title">Founder's Note</h3>
                            <span className="report-link-text">Read Note →</span>
                        </button>
                    </div>
                </div>
            </section>

            {founderOpen && (
                <FounderNoteModal onClose={() => setFounderOpen(false)} />
            )}
        </>
    );
};

export default Reports;
