import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaComments,
  FaClock,
  FaSearch,
} from "react-icons/fa"; // Example icons

const SoftSkillsSection = styled(motion.section)`
  background-color: ${({ theme }) => theme.body};
  padding-bottom: 80px;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.primary};
`;

const SoftSkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 900px; /* Centered and not too wide */
  margin: 0 auto;
`;

const SoftSkillCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.cardBorder};
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
  }

  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.accent};
    margin-bottom: 1rem;
  }
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const softSkillsData = [
  { name: "Team Collaboration", icon: <FaUsers /> },
  { name: "Effective Communication", icon: <FaComments /> },
  { name: "Analytical Thinking", icon: <FaSearch /> },
  { name: "Adaptability & Learning Agility", icon: <FaLightbulb /> }, // Combined from problem solving nature
  { name: "Time Management", icon: <FaClock /> },
  { name: "Attention to Detail" }, // No specific icon, can add one
  // Add more relevant soft skills
];

const SoftSkills = () => {
  return (
    <SoftSkillsSection
      id="soft-skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionTitle variants={itemVariants}>Personal Attributes</SectionTitle>
      <SoftSkillsGrid variants={sectionVariants}>
        {softSkillsData.map((skill, index) => (
          <SoftSkillCard key={index} variants={itemVariants}>
            {skill.icon}
            <SkillName>{skill.name}</SkillName>
          </SoftSkillCard>
        ))}
      </SoftSkillsGrid>
    </SoftSkillsSection>
  );
};

export default SoftSkills;
