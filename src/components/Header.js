import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const HeaderContainer = styled(motion.header)`
  background-color: ${({ theme }) => theme.headerBg};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.5s linear;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

const NavLinks = styled.nav`
  a {
    margin: 0 1rem;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Header = ({ theme, toggleTheme }) => {
  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Youssef Mohamed Ehab
      </Logo>
      <NavLinks>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#soft-skills">Soft Skills</a>
        {/* <a href="#contact">Contact</a> */}
      </NavLinks>
      <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;
