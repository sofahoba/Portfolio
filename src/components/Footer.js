import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Add other icons as needed

const FooterContainer = styled(motion.footer)`
  background-color: ${({ theme }) =>
    theme.headerBg}; /* Similar to header or a bit darker */
  color: ${({ theme }) => theme.text};
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.cardBorder};
`;

const SocialLinks = styled.div`
  margin-bottom: 1rem;
  a {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.8rem;
    margin: 0 0.75rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const CopyrightText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondary};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <SocialLinks>
        <a
          href="https://github.com/sofahoba"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/youssef-mohamed-ehab-bab09b295/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:youssefehab204@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        {/* Add other social links here */}
      </SocialLinks>
      <CopyrightText>
        &copy; {currentYear} Youssef Mohamed Ehab. All rights reserved.
      </CopyrightText>
      {/* Optional: You can add a small "Made with React & Styled Components" or similar here */}
    </FooterContainer>
  );
};

export default Footer;
