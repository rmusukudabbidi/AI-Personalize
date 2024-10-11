import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Home.css';

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="row">
        <nav className="col-md-3 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <h4 className="sidebar-title">Overview</h4>
            <ul className="nav flex-column">
            <li className="nav-itemm">
                <Link className="nav-linkk" to="Abstract" smooth={true} duration={0}>
                  Abstract
                </Link>
              </li>
              <li className="nav-itemm">
                <Link className="nav-linkk" to="IndexTerms" smooth={true} duration={0}>
                  Index Terms
                </Link>
              </li>
              <li className="nav-itemm">
                <Link className="nav-linkk" to="keyChallenges" smooth={true} duration={0}>
                  Key Challenges
                </Link>
              </li>
              <li className="nav-itemm">
                <Link className="nav-linkk" to="recentTrends" smooth={true} duration={0}>
                  Recent Trends and Advancements
                </Link>
              </li>
              <li className="nav-itemm">
                <Link className="nav-linkk" to="futureResearch" smooth={true} duration={0}>
                  Future Research Directions
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-9 px-4">

        <div className="content-section" id="Abstract">
            <h2>Abstract</h2>
            <p>
            Artificial Intelligence (AI) technology is developing at a rapid pace, which has profound effects on modern userinterface (UI) design. In today’s digital environment, integrating AI functionalities is crucial. This study examines essential elements and best practices to create web application UIs that seamlessly integrate AI capabilities. It emphasizes the necessity for user-friendly and captivating interfaces while highlighting the significance of balancing AI’s potent capabilities with user comprehension and control. Additionally, the integration of AIpowered recommendation systems, personalized interfaces, and adaptable designs that change based on user behavior and preferences is examined. Recommendations are made to encourage usability testing and user research for empirical evaluation. The findings shed light on AI-enhanced user interface design, offering helpful suggestions for developers and designers to produce user centric, accessible, and ethically sound AI-driven web interfaces.
            </p>
          </div>

          <div className="content-section" id="IndexTerms">
            <h2>Index terms</h2>
            <ul>
             <li>Artificial Intelligence (AI)</li> 
             <li>user interface (UI) design </li>
             <li>AI-powered recommendation systems</li> 
             <li>personalized interfaces </li>
             <li>enhanced user interface design</li>
            </ul>
          </div>

          <div className="content-section" id="keyChallenges">
            <h2>Key Challenges</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugiat ipsum cupiditate animi officiis reiciendis praesentium unde dolore tempore eos error rem, maiores provident exercitationem iste! Doloremque amet, perspiciatis reiciendis quis porro numquam recusandae corrupti veniam, vel, ipsum a tempora harum ipsa neque at sapiente architecto dolorem ducimus iure ea? Eaque voluptas voluptates voluptatum, delectus vel tempore cumque quidem voluptatem aliquid commodi quis iure rerum quo perspiciatis deleniti eum itaque similique sapiente qui accusantium excepturi incidunt consectetur? Odio, quibusdam fugit?
                <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptatem dolores exercitationem.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure obcaecati non.</li>
                    <li>Lorem ipsum, dolor sit amet elit. Iusto iure obcaecati non.</li>
                </ul>
            </p>
          </div>

          <div className="content-section" id="recentTrends">
            <h2>Recent Trends and Advancements</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse a necessitatibus numquam, temporibus debitis in! Eius soluta id minima voluptatibus velit ipsam voluptate corrupti error at, quia rem quis vel delectus impedit deserunt. Explicabo suscipit, molestias ab nulla sunt eum ad aliquid corporis! Ullam fugit quod veniam aperiam modi eaque totam exercitationem, est mollitia temporibus perspiciatis veritatis adipisci dolor consequuntur repudiandae, laudantium accusantium consequatur obcaecati provident natus sapiente eveniet? Ipsa quia esse quos est et, inventore omnis culpa libero ab, obcaecati reprehenderit doloremque fugiat itaque! Hic, voluptate. Neque praesentium officiis nulla magni pariatur amet in dolores laudantium aut facere animi repellendus odit eaque aliquid error id autem, alias nemo incidunt saepe necessitatibus voluptates! Aliquid, ad excepturi quaerat quod nulla necessitatibus enim sint officia maxime fugiat commodi deserunt at voluptas aliquam earum veritatis laboriosam pariatur autem asperiores! Voluptate minus placeat ea voluptatibus ducimus illo qui quo quidem sunt, consectetur est possimus suscipit deserunt porro fugit cum et eveniet! Hic laboriosam nesciunt nam excepturi modi architecto illo repudiandae, aliquam sint debitis. Ut beatae odio accusantium tenetur nemo labore ab quasi praesentium? Rem praesentium voluptatem ut doloremque saepe, aliquid obcaecati ex nihil in vel distinctio libero vitae dolor, animi laudantium molestias officia unde dolorem. Voluptates amet ab sed aliquid non nisi et, sint maiores animi, modi quos blanditiis distinctio debitis nihil at. Error nihil molestiae ipsum reiciendis commodi quasi optio? Hic aliquam reiciendis officia voluptatum sapiente odit commodi harum? Labore excepturi nesciunt nulla.
            </p>
          </div>

          <div className="content-section" id="futureResearch">
            <h2>Future Research Directions</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis doloribus pariatur tempore nobis aspernatur amet voluptatibus nostrum est itaque nesciunt ut ducimus deleniti nisi ullam obcaecati suscipit numquam, consequatur iste eos officiis quisquam! Iure, tempora doloribus ipsam magni provident, error odit quidem quae molestiae id fuga. Explicabo voluptatibus voluptatum eligendi temporibus iste asperiores fugit dolorem natus minus sed minima at expedita molestias repellendus aut quidem voluptate beatae quasi deleniti itaque fugiat, nihil reprehenderit! Deserunt libero aperiam perspiciatis dolore iusto magni assumenda culpa a sequi est distinctio quasi ducimus possimus sit dicta, dolorem at reiciendis porro sed sint laborum reprehenderit labore incidunt? Numquam ex placeat, et repellat quam laborum minus ea facere totam consequuntur debitis consequatur beatae. Hic, accusantium. Placeat maiores totam perferendis voluptates, velit libero earum natus error nihil itaque sequi eligendi. Impedit quae ipsum a officiis quia ullam vitae tenetur laboriosam, at cupiditate, non architecto, ipsa deleniti obcaecati!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
