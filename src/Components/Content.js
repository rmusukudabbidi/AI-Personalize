import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Content.css';

const Content = () => {
  return (
    <div className="container-fluid home">
      <div className="row">
        <nav className="col-md-3 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <h4 className="sidebar-title">Research Groups</h4>
            <ul className="nav flex-column">
              <li className="nav-itemm">
                <Link className="nav-linkk" to="Group1" smooth={true} duration={0}>
                    Group 1: AI-Driven Personalization and User Experience
                </Link>
              </li>
              <li className="nav-itemm">
                <Link className="nav-linkk" to="Group2" smooth={true} duration={0}>
                    Group 2: AI in Web Development and Automation
                </Link>
              </li>
              <li className="nav-itemm">
                <Link className="nav-linkk" to="Group3" smooth={true} duration={0}>
                    Group 3: AI-Driven User Profiling and Adaptive Systems
                </Link>
              </li>
              <li className="nav-itemm">
                <Link className="nav-linkk" to="Group4" smooth={true} duration={0}>
                    Group 4: AI in Market Intelligence and Product Development
                </Link>
              </li>
              <li className="nav-itemm">
                <Link className="nav-linkk" to="Group5" smooth={true} duration={0}>
                    Group 5: AI in User Interface (UI) Design and Adaptive Systems
                </Link>
              </li>
              <li className="nav-itemm">
                <Link className="nav-linkk" to="Group6" smooth={true} duration={0}>
                    Group 6: Ethical Considerations and Challenges in AI-Driven Personalization
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-9 px-4">
          <div className="content-section" id="Group1">
            <h2>Group 1: AI-Driven Personalization and User Experience</h2>
            <p>
                The group's publications all address the problem of AI-driven customization in various online content delivery, e-commerce, social media, and web application domains. All of these studies define the challenge as increasing user pleasure and engagement through tailored content that suits their interests. In addition to addressing possible concerns including privacy, cultural diversity, and data protection, each study tackles the difficulty of adapting AI algorithms to assure individualized experiences.
            </p>
            <p>
                Changes: The domains (e.g., TikTok, e-commerce, online apps) and the specific approaches for validating AI models change, even though the problem definition and overall AI customization theme stay the same.
            </p>
          </div>

          <div className="content-section" id="Group2">
            <h2>Group 2: AI in Web Development and Automation</h2>
            <p>
                This group's papers center on the issue of using AI to improve web development processes, with a particular focus on user engagement, automation, and customization. The description of the topic focuses on increasing web development efficiency through the automation of tedious processes, performance optimization, and integration of user-experience-enhancing customization components.
            </p>
            <p>
                Changes: Although AI for automation in web development is the main topic of discussion, some papers—such as Paper 23—focus more on the theoretical elements of customization, while others are more practical and highlight no-code platforms and real-world applications.
            </p>
          </div>

          <div className="content-section" id="Group3">
            <h2>Group 3: AI-Driven User Profiling and Adaptive Systems</h2>
            <p>
                This group discusses the application of AI to the development of customized user journeys and adaptable web interfaces. Customizing online applications to each user's profile based on behavioral data, interaction history, and preferences is the main focus of the problem definition. The studies suggest using AI algorithms to dynamically modify web applications' features, layout, and content, such as clustering and recommendation systems. Paper 8 delves into the evolution of adaptable interfaces through real-time user activities, whereas Paper 24 investigates the role of artificial intelligence in forecasting future user demands for adaptive content. Prototyping, real-world input, and user testing are some of the methodologies used to gauge how well AI creates adaptable interfaces.
            </p>
          </div>

          <div className="content-section" id="Group4">
            <h2>Group 4: AI in Market Intelligence and Product Development</h2>
            <p>
                This category of articles focuses on using AI to improve business context decision-making, particularly in the domains of product creation, market intelligence, and consumer insights. The challenge is defined consistently throughout the papers, with organizations needing to increase product innovation and extract meaningful insights by quickly analyzing massive datasets.
            </p>
            <p>
                Changes: All the papers center around the use of AI in business, but they cover different topics. For example, some papers concentrate on product development, while others prioritize customer insights.
            </p>
          </div>

          <div className="content-section" id="Group5">
            <h2>Group 5: AI in User Interface (UI) Design and Adaptive Systems</h2>
            <p>
                This group's papers tackle the challenge of creating user interfaces that adjust to a range of user requirements, particularly when it comes to usability and accessibility. In order to improve the user experience using AI-driven design, the issue definition centers on making sure that user interfaces are flexible and intuitive enough to accommodate a wide variety of users with different skills.
            </p>
            <p>
                Differences: Although the aims of usability and UI adaptation are identical in both studies, some concentrate more on accessibility, while others examine adaptable UI design empirically.
            </p>
          </div>

          <div className="content-section" id="Group6">
            <h2>Group 6: Ethical Considerations and Challenges in AI-Driven Personalization</h2>
            <p>
                The ethical ramifications of utilizing AI to personalize online apps are the main emphasis of this group. Important topics including algorithmic bias, consent, transparency, and data protection are covered in the publications. Paper 7 delves into the privacy hazards that arise from gathering and utilizing user data for customization, whereas Paper 10 tackles issues related to equity in AI-powered recommendation systems. Creating more transparent AI systems and putting privacy-preserving measures like differential privacy into practice are two possible solutions. Methodologies include empirical assessments of privacy-preserving AI models as well as theoretical talks on ethics.
            </p>
          </div>

          <div className="content-section">
            <h2>Overall Differences Between Groups</h2>
            <p>
                Group 1 and Group 3 differ primarily in that Group 3 delves deeper into adaptive systems that change content or user interface (UI) in response to real-time user behavior. Group 2 deals with automating development chores for enhanced online customization, while Group 4 concentrates on user data analysis for enhanced market forecasting and business decision-making. Group 5 focuses on UI design customization, whereas Group 3 examines adaptable systems that dynamically change not just the interface but also the features and information. Compared to Group 1/3, Group 6 is more concerned with moral issues surrounding customization, such as prejudice and privacy, whereas Group 1 and Group 3 usually focus more on functional and technical aspects.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Content;
