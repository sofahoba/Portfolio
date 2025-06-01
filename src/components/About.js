import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled(motion.section)`
  background-color: ${({ theme }) => theme.background};
  text-align: center;
  min-height: 80vh; /* Make it take more space */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// eslint-disable-next-line no-unused-vars
const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  border: 5px solid ${({ theme }) => theme.primary};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

const Bio = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 700px;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const About = () => {
  return (
    <AboutSection
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <ProfileImage
        src={process.env.PUBLIC_URL + "/images/profile.jpg"}
        alt="Youssef Mohamed Ehab"
        variants={itemVariants}
      />
      <Title variants={itemVariants}>Hi, I'm Youssef Mohamed Ehab</Title>
      <Subtitle variants={itemVariants}>
        Backend Developer | Spring Boot & NestJS Enthusiast
      </Subtitle>
      <Bio variants={itemVariants}>
        I am a passionate backend developer with a strong interest in creating
        robust and scalable web applications. My primary expertise lies in
        Spring Boot and I have also gained proficiency in NestJS. I enjoy
        tackling complex problems and continuously learning new technologies to
        enhance my skillset. I am dedicated to writing clean, efficient, and
        maintainable code. Additionally, I have experience as a Web Instructor
        for kids at Pixels Juniors, where I enjoyed sharing my passion for
        technology and fostering learning.
      </Bio>
      {/* You can add a CTA button or link to resume here */}
    </AboutSection>
  );
};

export default About;
