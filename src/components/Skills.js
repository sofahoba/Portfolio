import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaJava,
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCodeBranch,
  FaPuzzlePiece,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiNestjs,
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const SkillsSection = styled(motion.section)`
  background-color: ${({ theme }) => theme.body};
  padding-bottom: 80px; /* Extra padding at bottom */
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.primary};
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.cardBorder};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.text};

  svg {
    margin-right: 0.75rem;
    color: ${({ theme }) => theme.primary};
    font-size: 1.3em;
  }
`;

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillsData = {
  programmingLanguages: {
    title: "Programming Languages",
    icon: <FaCodeBranch />,
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
  webTechnologies: {
    title: "Web Technologies & Frameworks",
    icon: <FaReact />,
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "React (Basics)", icon: <FaReact /> },
      // { name: 'Databases (PostgreSQL, MySQL)', icon: <FaDatabase /> }, // Mentioned in projects, can add here
    ],
  },
  databases: {
    title: "Databases",
    icon: <FaDatabase />,
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  problemSolving: {
    title: "Problem Solving",
    icon: <FaPuzzlePiece />,
    skills: [
      { name: "Algorithms & Data Structures" },
      { name: "Mathematical Problem Solving" },
      { name: "Competitive Programming Concepts" },
    ],
  },
  // You can add other categories like Databases, Tools, etc.
  // databases: {
  //   title: 'Databases',
  //   icon: <FaDatabase />,
  //   skills: [
  //     { name: 'PostgreSQL', icon: <SiPostgresql /> }, // Need to import SiPostgresql from react-icons/si
  //     { name: 'MySQL', icon: <SiMysql /> }, // Need to import SiMysql from react-icons/si
  //   ]
  // }
};

const Skills = () => {
  return (
    <SkillsSection
      id="skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionTitle variants={itemVariants}>My Expertise</SectionTitle>
      <SkillsGrid variants={sectionVariants}>
        {Object.values(skillsData).map((category, index) => (
          <SkillCategory key={index} variants={itemVariants}>
            <CategoryTitle>
              {category.icon}
              {category.title}
            </CategoryTitle>
            <SkillList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  {skill.icon || <FaCodeBranch size="1.1em" />} {skill.name}
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
