
import React, { useState } from 'react';
import './Team.css';
import haritha from './images/haritha.jpg';
import harsh from './images/Harsh.jpg';
import rohit from './images/rohit.jpeg';
import ajay from './images/ajay.jpg';
import sreeja from './images/sreeja.jpg';

const teamMembers = [
  {
    name: 'Ajay Kumar Medikonda',
    role: 'Content validator',
    profile: `I, Ajay Kumar Medikonda, am an AI-Driven Software Developer with a deep passion for creating intelligent solutions that offer seamless user experiences. With extensive experience in validating content, assisting in testing and debugging, and ensuring high-quality deliverables, I have honed my skills across several projects involving cloud technologies, UI/UX design, and documentation. I excel in collaborative settings where I can provide insightful feedback to enhance project outcomes, and my commitment to technical excellence and teamwork makes me a valuable contributor to any project.`,
    photo: ajay,
    work: [
      "1. Research and Analysis: Conducted a comprehensive review of relevant literature on AI driven personalization, identifying key trends and methodologies. I categorized each paper systematically to enhance the project's research foundation and methodologies.",
      "Y. Content Validation: Ensured the accuracy and relevance of the survey paper's content through rigorous validation. This involved cross referencing findings with credible sources, ensuring that every claim was substantiated and enhancing the overall credibility of the research.",
      'Z.Website Verification: Actively participated in the verification process of the website, focusing on aligning the deployed content with the validated survey paper. This included checking for consistency, functionality, and user experience, ensuring a seamless interaction for users.'
    ]
  },
  {
    name: 'Haritha Dhanlalji Parmar',
    role: 'Website Developer',
    profile: `I am Haritha Dhanlalji Parmar, a highly skilled website developer with over 2 years of experience across cloud platforms like AWS, Azure, and GCP. I specialize in designing scalable cloud infrastructures and have contributed to various projects in web development and cloud architecture. My passion lies in creating user-friendly and dynamic websites, integrating front-end technologies like React.js with back-end APIs. My leadership and problem-solving abilities underscore my value to any development team, and I am dedicated to leveraging technology to improve user experiences.`,
    photo: haritha,
    work: [
      '1. Development & Integration: Spearheaded the creation, integration, and layout of the taxonomy structure and home page, along with the styling for all web pages, to ensure a consistent user experience.',
      '2. AI Personalization Research: Investigated and analyzed AI-driven design methodologies, emphasizing personalization and its influence on web applications, providing valuable insights for the projects technical framework.',
      '3. Visuals, Documentation & Effects: Crafted and assembled images, graphs, and resource materials for the website, incorporating special visual effects to enrich the content on each page, as well as contributing to the projects documentation.'
    ]
  },
  {
    name: 'Harsh Patel',
    role: 'Reporting and Delivery Lead',
    profile: `I am Harsh Patel, a usability-focused, flexible, full-stack web developer, and cloud infrastructure architect. I have led various projects relating to reporting and delivery and always reached milestones effectively by resolving client concerns. Besides technical expertise, I provide management leadership within my team. I have experience managing cloud infrastructure and operating networks. I have also led/participated in numerous projects related to computer networks, machine learning, and deep learning. Equipped with extensive knowledge in frontend and backend technologies, I ensure full lifecycle development with best performance and seamless user experience.`,
    photo: harsh,
    work: [
      '1. UI/UX Design: Led the design of user interfaces, ensuring a seamless and engaging experience while prioritizing usability and aesthetics.',
      '2. Reporting and Content Research: *Developed reporting mechanisms to track user engagement and performance metrics, while also conducting in-depth research on relevant content and literature to inform the design and functionality of the application.',
      '3. Diversity Lead: Acted as the diversity lead, promoting inclusive design practices and ensuring the application meets the needs of a diverse user base.'
    ]
  },
  {
    name: 'Mary Sreeja Thirumala Reddy',
    role: 'Content Validator and Documentation',
    profile: `I, Mary Sreeja Thirumala Reddy, am deeply engaged in AWS and web development, with proficient experience in cloud services such as S3, Athena, and Snowflake. My significant contributions to content validation and documentation have ensured the accuracy and quality of various projects. Known for my meticulous attention to detail and ability to maintain clear, structured documentation, I also focus on maintaining cloud infrastructure for project scalability and long-term stability. My combination of technical and soft skills enables me to excel in collaborative, high-pressure environments.`,
    photo: sreeja,
    work: [
      '1. Ethical AI Research: Conducted in-depth research on the ethical implications of AI-powered personalization in digital marketing, focusing on how these technologies impact user privacy and data handling.',
      '2. AI Applications in Networks and Education: Reviewed AI and machine learning applications in mobile networks and personalized education systems. Key papers include "A Survey of AI and Machine Learning Applications in Mobile Networks" and "Personalized Education and AI in the USA, China, and India."',
      '3. Latex Paper Preparation: Led the preparation of the survey paper in Latex format, ensuring accurate structuring, citations, and formatting. Worked closely with the team to maintain document consistency and professionalism for final submission.'
    ]
  },
  {
    name: 'Rohit Reddy Musukudabbidi',
    role: 'Website Developer',
    profile: `I am Rohit Reddy Musukudabbidi, a passionate web developer with a strong foundation in full-stack development. I have extensive experience in creating dynamic and responsive front-end features for websites, working closely with back-end developers to integrate dynamic content. My skills in React.js, JavaScript, and cloud technologies aid me in delivering engaging, high-performance web applications. Driven by a passion for creating meaningful user experiences, I thrive in both collaborative and independent work settings.`,
    photo: rohit,
    work: [
      '1. Developed and Integrated React Components: Designed the website structure and created a single-page React application, focusing on the Content and Team Pages.',
      '2. Researched AI Personalization: Explored topics like user profiling, adaptive interfaces, and ethical considerations in AI-driven personalization, sourcing relevant research papers.',
      '3. Deployed the Application: Led the deployment process by building and pushing the application to GitHub Pages for live access.'
    ]
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setSelectedDetail(null);  
  };

  const handleprofileClick = () => {
    setSelectedDetail('profile');
  };

  const handleWorkClick = () => {
    setSelectedDetail('work');
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    setSelectedDetail(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Meet Our Team</h2>
      <div className="row mt-4">
        {teamMembers.map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card team-member" onClick={() => handleMemberClick(member)}>
              <img src={member.photo} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedMember.name}</h3>
            <h5>{selectedMember.role}</h5>
            <div className="buttons-container">
              <button className="btn btn-primary" onClick={handleprofileClick}>
                Profile
              </button>
              <button className="btn btn-success" onClick={handleWorkClick}>
                Work Contribution
              </button>
            </div>

            {selectedDetail === 'profile' && (
              <div className="details-section">
                  <h5>About Me :) </h5>
                <p>{selectedMember.profile}</p>
              </div>
            )}

            {selectedDetail === 'work' && (
              <div className="details-section">
                <h5>Work Contribution:</h5>
                <ul>
                  {selectedMember.work.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            )}

            <button className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
