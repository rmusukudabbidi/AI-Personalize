import React from 'react';
import './TaxonomyTable.css'; 

const TaxonomyTable = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Taxonomy Table</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover mt-4">
          <thead className="thead-light">
            <tr>
              <th>Group</th>
              <th>Paper Citation</th>
              <th>Problem</th>
              <th>Domain</th>
              <th>Solution Approach</th>
              <th>Web Architecture Type</th>
              <th>Evaluation Methodology</th>
              <th>Application Domain</th>
              <th>Security Mechanism</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Group 1: AI-Driven Personalization and User Experience</td>
              <td>Paper 1,3,16,17</td>
              <td>Personalized content delivery</td>
              <td>Web content delivery, e-commerce, social media</td>
              <td>AI-driven algorithms to tailor content based on user preferences</td>
              <td>Web applications, recommendation systems</td>
              <td>User feedback, A/B testing, performance metrics</td>
              <td>E-commerce, social media, web apps</td>
              <td>Data privacy, differential privacy</td>
            </tr>
            <tr>
              <td>Group 2: AI in Web Development and Automation</td>
              <td>Paper 13,18,22,23</td>
              <td>Enhancing web dev processes with AI</td>
              <td>Web development, automation</td>
              <td>Automating repetitive tasks, optimizing site performance</td>
              <td>No-code platforms, automation frameworks</td>
              <td>Performance benchmarking, case studies</td>
              <td>Web development, automation platforms</td>
              <td>Data protection and security monitoring</td>
            </tr>
            <tr>
              <td>Group 3: AI-Driven User Profiling and Adaptive Systems</td>
              <td>Paper 8,9,24</td>
              <td>Adapting web apps based on user profiles</td>
              <td>Web applications, adaptive systems</td>
              <td>AI algorithms (clustering, recommendation systems) to dynamically adjust features</td>
              <td>Adaptive UI, real-time content adjustment</td>
              <td>Prototyping, user testing, real-time feedback</td>
              <td>Adaptive web applications</td>
              <td>Encryption, secure data storage</td>
            </tr>
            <tr>
              <td>Group 4: AI in Market Intelligence and Product Development</td>
              <td>Paper 11,12,21</td>
              <td>Market intelligence, product innovation</td>
              <td>Business intelligence, customer insights</td>
              <td>AI for analyzing large datasets and predicting trends</td>
              <td>Market research tools, business decision-making frameworks</td>
              <td>Case studies, historical analysis, performance metrics</td>
              <td>Market intelligence, product development</td>
              <td>Data governance policies, access control</td>
            </tr>
            <tr>
              <td>Group 5: AI in User Interface (UI) Design and Adaptive Systems</td>
              <td>Paper 19,25</td>
              <td>Adapting UI for diverse needs</td>
              <td>Web UI, accessibility</td>
              <td>AI-driven design for adaptive and intuitive UIs</td>
              <td>Web UI design, accessible UIs</td>
              <td>User accessibility tests, empirical analysis</td>
              <td>Accessibility in web design</td>
              <td>Privacy-preserving UI systems, secure session management</td>
            </tr>
            <tr>
              <td>Group 6: Ethical Considerations and Challenges in AI-Driven Personalization</td>
              <td>Paper 7,10</td>
              <td>Ethical challenges in AI personalization</td>
              <td>Data privacy, algorithmic fairness</td>
              <td>Transparency in AI, privacy-preserving techniques like differential privacy</td>
              <td>Ethical AI frameworks, fair recommendation systems</td>
              <td>Theoretical discussions, privacy model evaluations</td>
              <td>Web apps, social media</td>
              <td>Differential privacy, fairness in algorithms</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxonomyTable;
