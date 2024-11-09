import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  position: relative;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a {
    color: #ffdd57;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ffc107; // Slightly brighter shade on hover
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #bbb;
`;

const ScrollToTopButton = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background-color: #ffdd57;
  border: none;
  border-radius: 50%;
  padding: 0.6rem;
  cursor: pointer;
  transition: background 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #ffc107;
  }

  svg {
    color: #282c34;
    font-size: 1.2rem;
  }
`;

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </SocialLinks>
      <Copyright>© {new Date().getFullYear()} Amirbek's Portfolio. All rights reserved.</Copyright>
      <ScrollToTopButton onClick={handleScrollToTop}>
        <FaArrowUp />
      </ScrollToTopButton>
    </FooterContainer>
  );
};

export default Footer;