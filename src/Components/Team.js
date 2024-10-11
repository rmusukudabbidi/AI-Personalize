import React, { useState } from 'react';
import './Team.css'; 
const teamMembers = [
  {
    name: 'Ajay Kumar Medikonda',
    role: 'Project Manager',
    bio: 'Alice has over 10 years of experience in project management and leads our team with passion and precision.',
    photo: 'https://via.placeholder.com/150', 
  },
  {
    name: 'Haritha Dhanlalji Parmar',
    role: 'Web Developer',
    bio: 'Bob is a full-stack developer with a love for coding and problem-solving, contributing innovative solutions to our projects.',
    photo: 'https://via.placeholder.com/150', 
  },
  {
    name: 'Harsh Patel',
    role: 'UI/UX Designer',
    bio: 'Charlie designs user-friendly interfaces and ensures our products provide a great user experience.',
    photo: 'https://via.placeholder.com/150', 
  },
  {
    name: 'Mary Sreeja Thirumala Reddy',
    role: 'Data Scientist',
    bio: 'Diana analyzes data trends to provide insights that drive our decision-making processes.',
    photo: 'https://via.placeholder.com/150', 
  },
  {
    name: 'Rohit Reddy Musukudabbidi',
    role: 'Web Developer',
    bio: 'Edward ensures the quality of our products through rigorous testing and continuous improvement.',
    photo: 'https://via.placeholder.com/150', 
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
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
