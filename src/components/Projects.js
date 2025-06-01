import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

const ProjectsSection = styled(motion.section)`
  background-color: ${({ theme }) => theme.background};
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.primary};
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.cardBorder};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

// eslint-disable-next-line no-unused-vars
const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover; // or 'contain' if images have specific aspect ratios
  background-color: #e0e0e0; // Placeholder background
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  flex-grow: 1; /* Ensures info takes available space */
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
`;

const ProjectDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  margin-bottom: 1rem; /* Adjusted margin */
  p {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.accent};
  }
  span {
    display: inline-block;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.85rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid ${({ theme }) => theme.cardBorder};
  }
`;

const ProjectLinks = styled.div`
  margin-top: auto; /* Pushes links to the bottom */
  padding-top: 1rem; /* Add some space above the links */
  border-top: 1px solid ${({ theme }) => theme.cardBorder}; /* Separator line */
`;

const ProjectLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonText};
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
  margin-right: 0.5rem; /* Space between buttons if multiple */

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.linkHover};
    color: ${({ theme }) => theme.buttonText};
  }
`;

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projectsData = [
  {
    title: "Online Article & Comment Sharing Platform",
    date: "May 2025",
    description:
      "A web platform backend enabling user registration, login, article publishing, and commenting with secure authentication and role-based access.",
    techStack: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "VanillaJs (Frontend)",
    ],
    imageUrl: "/images/placeholder-project1.png", // Replace with actual image path
    githubLink: "https://github.com/sofahoba/Fullstack-Verve-NewsAggregator",
  },
  {
    title: "ToDo-List",
    date: "May 2025",
    description:
      "Full-stack todo app with JWT authentication, allowing users to register, log in, and manage personal tasks. Backend built with NestJS, TypeORM, and PostgreSQL; frontend with vanilla JavaScript and RESTful API integration.",
    techStack: ["NestJS", "PostgreSQL", "TypeORM", "Vanilla JavaScript", "JWT"],
    imageUrl: "/images/placeholder-project2.png", // Replace with actual image path
    githubLink: "https://github.com/sofahoba/ToDo-List",
  },
  {
    title: "BugAndResolution",
    date: "April 2025",
    description:
      "Web app backend for testers to report bugs and managers to assign them to developers for resolution, built with Spring Boot, JWT authentication, role-based access, and REST APIs.",
    techStack: ["Spring Boot", "React (Frontend)", "JWT", "REST APIs"],
    imageUrl: "/images/placeholder-project3.png", // Replace with actual image path
    githubLink: "https://github.com/sofahoba/BugAndResolution",
  },
  {
    title: "Expense Tracker",
    date: "April 2025",
    description:
      "Backend app built with Spring Boot and MySQL to manage income and expenses, featuring RESTful CRUD APIs, DTO-based data handling, and financial statistics generation.",
    techStack: ["Spring Boot", "MySQL", "REST APIs", "DTOs"],
    imageUrl: "/images/placeholder-project4.png", // Replace with actual image path
    githubLink: "https://github.com/sofahoba/ExpenseTracker",
  },
];

const Projects = () => {
  return (
    <ProjectsSection
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <SectionTitle variants={itemVariants}>My Projects</SectionTitle>
      <ProjectsGrid variants={sectionVariants}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} variants={itemVariants}>
            {/* You can add an image for each project */}
            {/* <ProjectImage src={project.imageUrl} alt={project.title} /> */}
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDate>{project.date}</ProjectDate>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                <p>Tech Stack:</p>
                <div>
                  {project.techStack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </TechStack>
              <ProjectLinks>
                {project.githubLink && (
                  <ProjectLinkButton
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> View on GitHub
                  </ProjectLinkButton>
                )}
                {/* Add other links like Live Demo here if available */}
              </ProjectLinks>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
