
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
    profile: `Ajay Kumar Medikonda is an AI-Driven Software Developer with a passion for creating intelligent solutions and seamless user experiences. He has extensive experience in validating content, assisting in testing and debugging, and ensuring high-quality deliverables. Ajay has worked on several projects involving cloud technologies, UI/UX design, and documentation. He thrives in collaborative settings, offering insightful feedback to enhance project outcomes. His dedication to both technical excellence and teamwork makes him a valuable member of any project.`,
    photo: ajay,
    work: [
      'X.',
      'Y.',
      'Z.'
    ]
  },
  {
    name: 'Haritha Dhanlalji Parmar',
    role: 'Website Developer',
    profile: `Haritha Dhanlalji Parmar is a highly skilled website developer with over 2+ years of experience in cloud platforms like AWS, Azure, and GCP. Specializing in designing scalable cloud infrastructures, Haritha has contributed to various projects involving web development, cloud architecture, and team leadership. She has a passion for creating user-friendly and dynamic websites, integrating front-end technologies like React.js with back-end APIs. Haritha's leadership and problem-solving abilities make her an invaluable part of any development team. She is dedicated to improving user experiences through technology.`,
    photo: haritha,
    work: [
      'X.',
      'Y.',
      'Z.'
    ]
  },
  {
    name: 'Harsh Patel',
    role: 'Reporting and Delivery Lead',
    profile: `Harsh Patel is a user-centric web developer with expertise in creating solutions that prioritize usability, adaptability, and cloud infrastructure. He has led several projects involving reporting and delivery, ensuring timely milestone completions while handling client feedback. Harsh has also managed the cloud infrastructure of web applications using tools like AWS and Azure. With a strong understanding of both front-end and back-end technologies, Harsh is adept at managing the development lifecycle from start to finish, ensuring optimal performance and a seamless user experience.`,
    photo: harsh,
    work: [
      'X.',
      'Y.',
      'Z.'
    ]
  },
  {
    name: 'Mary Sreeja Thirumala Reddy',
    role: 'Content Validator and Documentation',
    profile: `Mary Sreeja Thirumala Reddy is an AWS and web development enthusiast with experience in cloud services such as S3, Athena, and Snowflake. She has contributed significantly to content validation and documentation for various projects, ensuring accuracy and quality. Sreeja is known for her meticulous attention to detail and ability to maintain clear, structured documentation. She has also worked on maintaining cloud infrastructure for project scalability and ensuring the project’s long-term stability. Sreeja’s combination of technical and soft skills allows her to excel in collaborative, high-pressure environments.`,
    photo: sreeja,
    work: [
      'X.',
      'Y.',
      'Z.'
    ]
  },
  {
    name: 'Rohit Reddy Musukudabbidi',
    role: 'Website Developer',
    profile: `Rohit Reddy Musukudabbidi is a passionate web developer with a strong foundation in full-stack development. Rohit has worked extensively on creating dynamic and responsive front-end features for websites, collaborating with back-end developers to integrate dynamic content. His experience with React.js, JavaScript, and cloud technologies has helped him in delivering engaging, high-performance web applications. Rohit is driven by his passion for creating meaningful user experiences and thrives in both collaborative and independent work environments.`,
    photo: rohit,
    work: [
      'X.',
      'Y.',
      'Z.'
    ]
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setSelectedDetail(null);  // Reset any previously selected details
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
