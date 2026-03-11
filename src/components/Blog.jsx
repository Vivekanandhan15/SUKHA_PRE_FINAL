import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
    const [expandedPost, setExpandedPost] = useState(null);

    const blogPosts = [
        {
            id: 1,
            title: 'Learning Beyond Classroom',
            summary: 'How my project on renewable energy changed my perspective on science.',
            content: 'In my third month at Sukha, I was challenged to build a solar water heater. It was difficult at first, but with the help of my teachers and team, I realized that science is even more beautiful when applied to solve real problems in my village.',
            comments: [
                { user: 'Student A', text: 'Amazing work! Really inspiring.' },
                { user: 'Teacher B', text: 'Great application of thermo dynamics.' }
            ]
        },
        {
            id: 2,
            title: 'Voices of Future Leaders',
            summary: 'The importance of soft skills in building community impact.',
            content: 'Before Sukha, I was shy and afraid to speak. The life skills workshops taught me that my voice matters. Now, I lead community clean-up drives and help other younger students find their confidence through public speaking.',
            comments: [
                { user: 'Community Member', text: 'We see the change in these kids.' }
            ]
        },
        {
            id: 3,
            title: 'My First Lines of Code',
            summary: 'Diving into the world of web development for the first time.',
            content: 'Digital literacy was just a dream until I touched a laptop last year. Coding felt like solving a puzzle. My first webpage might be simple, but it represents the beginning of my journey into the global tech world.',
            comments: [
                { user: 'Student C', text: 'Wait until you try React too!' },
                { user: 'Admin', text: 'You have a bright future ahead.' }
            ]
        }
    ];

    const toggleExpand = (id) => {
        setExpandedPost(expandedPost === id ? null : id);
    };

    return (
        <section id="blog" className="blog-section section-padding">
            <div className="container">
                <h2 className="section-title text-center mb-lg">Student Blog</h2>

                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className={`blog-card ${expandedPost === post.id ? 'expanded' : ''}`}
                        >
                            <div className="blog-image">
                                <div className="placeholder-box" style={{ height: '160px' }}>Blog Image</div>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-post-title">{post.title}</h3>
                                <p className="blog-summary">{post.summary}</p>

                                <div className={`full-content ${expandedPost === post.id ? 'show' : ''}`}>
                                    <p className="post-text">{post.content}</p>
                                    <div className="comments-section">
                                        <h4>Comments ({post.comments.length})</h4>
                                        {post.comments.map((comment, i) => (
                                            <div key={i} className="comment">
                                                <strong>{comment.user}</strong>: {comment.text}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="blog-footer">
                                    <button
                                        className="btn-text-link"
                                        onClick={() => toggleExpand(post.id)}
                                    >
                                        {expandedPost === post.id ? 'Show Less ↑' : 'Read Full Post ↓'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
