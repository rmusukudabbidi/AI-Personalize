import React, { useState } from 'react';
import './Team.css'; 
import haritha from './images/haritha.jpg';
import harsh from './images/Harsh.jpg';
import rohit from './images/rohit.jpeg';
import ajay from './images/ajay.jpg';

const teamMembers = [
  {
    name: 'Ajay Kumar Medikonda',
    role: 'Content validator',
    bio: 'AI-Driven Software Developer with a passion for creating intelligent solutions and seamless user experiences. Skilled in full-stack development,Coding, AI model implementation, and cloud technologies. Adept at designing and deploying innovative applications, including AI powered systems and data-driven web platforms. Experienced in collaborating on team-based projects or executing solo initiatives. A dedicated computer science graduate student, eager to apply cutting edge skills to solve real world challenges and drive impactful technological advancements.',
    photo: ajay, 
  },
  {
    name: 'Haritha Dhanlalji Parmar',
    role: 'Website Developer',
    bio: 'With 2+ years of experience in cloud platforms like AWS, Azure, and GCP, I specialize in designing scalable cloud infrastructures and developing full-stack web applications using React.js, HTML, CSS, Java, and Python. I have led teams in delivering cloud-based solutions, building CI/CD pipelines, and executing migration projects. Currently, I am working on a project involving HTML, CSS, and React, showcasing my front-end expertise alongside cloud engineering. My work spans cloud engineering, AI/ML, and web development, with notable contributions to the Flagrant Fowl Futbol Association website and dynamic game development projects. As a developer and team lead, I combine technical expertise with leadership skills to drive innovation and ensure project success',
    photo: haritha, 
  },
  {
    name: 'Harsh Patel',
    role: 'Reporting and Delivery Lead',
    bio: 'User-centric Web Developer prioritizing usability, adaptability, and cloud infrastructure. Skilled in designing visually appealing sites and apps with exceptional UX. Experienced in large-scale collaborations or solo projects. Proficient Network Engineer, troubleshooting routers, switches, firewalls, and cloud solutions. Motivated student ready to apply technical skills and tackle challenges efficiently',
    photo: harsh, 
  },
  {
    name: 'Mary Sreeja Thirumala Reddy',
    role: 'Content Validator',
    bio: '',
    photo: 'https://via.placeholder.com/150', 
  },
  {
    name: 'Rohit Reddy Musukudabbidi',
    role: 'Website Developer',
    bio: 'Passionate web developer with a strong foundation in full-stack development, bringing innovative solutions to life using modern web technologies. Experienced in building responsive and dynamic web applications, with a keen interest in data science and cloud computing. Adept at collaborating with cross-functional teams and continuously learning to stay ahead in the fast-evolving tech landscape.',
    photo: rohit, 
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    console.log(member.photo);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
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
            <p>{selectedMember.bio}</p>
            <button className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
