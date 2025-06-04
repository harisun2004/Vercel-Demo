import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
  align-items: center;
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(99, 102, 241, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: var(--accent);
  margin: 0 0 1rem 0;
`;

const Bio = styled.p`
  color: var(--text-light);
  line-height: 1.8;
  margin: 0 0 1.5rem 0;
`;

const SkillsSection = styled.div`
  margin-top: 3rem;
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(99, 102, 241, 0.1);
`;

const SkillsTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--text);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

const SkillCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  text-align: center;
  border: 1px solid rgba(99, 102, 241, 0.2);
  color: var(--text);
  font-weight: 500;
  
  &:hover {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%);
  }
`;

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "GraphQL",
  "MongoDB"
];

const About = () => {
  return (
    <AboutContainer>
      <ProfileSection>
        <ProfileImage>
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" fill="white"/>
            <path d="M20 19C20 15.134 16.866 12 13 12H11C7.13401 12 4 15.134 4 19" stroke="white" strokeWidth="2"/>
          </svg>
        </ProfileImage>
        <ProfileInfo>
          <Name>John Doe</Name>
          <Title>Full Stack Developer</Title>
          <Bio>
            Passionate about creating elegant solutions to complex problems. 
            With over 5 years of experience in web development, I specialize in 
            building scalable applications using modern technologies. When I'm not 
            coding, you can find me contributing to open-source projects or 
            sharing my knowledge through technical writing.
          </Bio>
        </ProfileInfo>
      </ProfileSection>

      <SkillsSection>
        <SkillsTitle>Skills & Technologies</SkillsTitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>
    </AboutContainer>
  );
};

export default About; 