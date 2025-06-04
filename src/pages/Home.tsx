import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const BlogCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(99, 102, 241, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: var(--primary-light);
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h2`
  margin: 0 0 1rem 0;
  color: var(--text);
  font-size: 1.5rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BlogExcerpt = styled.p`
  color: var(--text-light);
  margin: 0;
  line-height: 1.6;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  color: var(--text-light);
  font-size: 0.9rem;
`;

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first application...",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    excerpt: "Explore advanced TypeScript patterns and best practices...",
    date: "March 14, 2024",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Building Modern UIs with CSS Grid",
    excerpt: "Master CSS Grid and create responsive layouts with ease...",
    date: "March 13, 2024",
    readTime: "6 min read"
  }
];

const Home = () => {
  return (
    <BlogGrid>
      {blogPosts.map((post) => (
        <BlogCard
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <BlogImage>
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" fill="white" fillOpacity="0.2"/>
              <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="white"/>
              <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2"/>
              <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2"/>
            </svg>
          </BlogImage>
          <BlogContent>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
            <BlogMeta>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </BlogMeta>
          </BlogContent>
        </BlogCard>
      ))}
    </BlogGrid>
  );
};

export default Home; 