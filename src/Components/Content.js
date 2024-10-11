import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Content.css';

const Content = () => {
  return (
    <div className="container-fluid home">
      <div className="row">
        <nav className="col-md-3 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <h4 className="sidebar-title">Research Papers</h4>
            <ul className="nav flex-column">
              <li className="nav-itemm">
                <Link className="nav-linkk" to="ResearchPaper1" smooth={true} duration={0}>
                    Research Paper 1
                </Link>
              </li>
              <li className="nav-itemm">
                <Link className="nav-linkk" to="ResearchPaper2" smooth={true} duration={0}>
                    Research Paper 2
                </Link>
              </li>
              <li className="nav-itemm">
                <Link className="nav-linkk" to="ResearchPaper3" smooth={true} duration={0}>
                    Research Paper 3
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-9 px-4">
          <div className="content-section" id="ResearchPaper1">
            <h2>Research Paper 1</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugiat ipsum cupiditate animi officiis reiciendis praesentium unde dolore tempore eos error rem, maiores provident exercitationem iste! Doloremque amet, perspiciatis reiciendis quis porro numquam recusandae corrupti veniam, vel, ipsum a tempora harum ipsa neque at sapiente architecto dolorem ducimus iure ea? Eaque voluptas voluptates voluptatum, delectus vel tempore cumque quidem voluptatem aliquid commodi quis iure rerum quo perspiciatis deleniti eum itaque similique sapiente qui accusantium excepturi incidunt consectetur? Odio, quibusdam fugit?
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis mollitia tempore deserunt ipsam a, ad veritatis accusamus, delectus illo dolorem adipisci quos! Molestias qui quis, cupiditate deleniti possimus voluptatum perferendis quam ea totam laudantium repudiandae inventore soluta expedita iste earum ducimus eaque eveniet tenetur! Velit illo officia veniam exercitationem repellendus libero quod ullam ipsam harum eos asperiores tempora unde, nulla laborum similique ipsa rerum quis aut eligendi voluptatibus.
            </p>
          </div>

          <div className="content-section" id="ResearchPaper2">
            <h2>Research Paper 2</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse a necessitatibus numquam, temporibus debitis in! Eius soluta id minima voluptatibus velit ipsam voluptate corrupti error at, quia rem quis vel delectus impedit deserunt. Explicabo suscipit, molestias ab nulla sunt eum ad aliquid corporis! Ullam fugit quod veniam aperiam modi eaque totam exercitationem, est mollitia temporibus perspiciatis veritatis adipisci dolor consequuntur repudiandae, laudantium accusantium consequatur obcaecati provident natus sapiente eveniet? Ipsa quia esse quos est et, inventore omnis culpa libero ab, obcaecati reprehenderit doloremque fugiat itaque! Hic, voluptate. Neque praesentium officiis nulla magni pariatur amet in dolores laudantium aut facere animi repellendus odit eaque aliquid error id autem, alias nemo incidunt saepe necessitatibus voluptates! Aliquid, ad excepturi quaerat quod nulla necessitatibus enim sint officia maxime fugiat commodi deserunt at voluptas aliquam earum veritatis laboriosam pariatur autem asperiores! Voluptate minus placeat ea voluptatibus ducimus illo qui quo quidem sunt, consectetur est possimus suscipit deserunt porro fugit cum et eveniet! Hic laboriosam nesciunt nam excepturi modi architecto illo repudiandae, aliquam sint debitis. Ut beatae odio accusantium tenetur nemo labore ab quasi praesentium? Rem praesentium voluptatem ut doloremque saepe, aliquid obcaecati ex nihil in vel distinctio libero vitae dolor, animi laudantium molestias officia unde dolorem. Voluptates amet ab sed aliquid non nisi et, sint maiores animi, modi quos blanditiis distinctio debitis nihil at. Error nihil molestiae ipsum reiciendis commodi quasi optio? Hic aliquam reiciendis officia voluptatum sapiente odit commodi harum? Labore excepturi nesciunt nulla.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni incidunt pariatur harum ratione animi sequi obcaecati deleniti architecto neque labore laudantium itaque quasi ullam molestias dolor fugit, blanditiis ea sed illum asperiores quae ad! Aperiam, distinctio odit. Eius soluta repellendus asperiores alias, culpa minima dolor laudantium eum sequi amet nisi aliquam accusamus doloremque voluptas temporibus quisquam autem quo, delectus sint laborum hic! Commodi alias beatae eveniet quas deserunt vero quae facilis explicabo maxime eaque nesciunt consectetur a, laboriosam, expedita enim quam quod voluptate optio. Odio ab, debitis atque facere doloremque maiores tenetur repudiandae animi, tempore quo nihil voluptatem iusto hic. Earum ipsum eum magnam. Nulla corporis est perferendis dolor vero a consequatur odit iure mollitia. Vitae, nulla! Vitae, quidem libero.
            </p>
          </div>

          <div className="content-section" id="ResearchPaper3">
            <h2>Research Paper 3</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis doloribus pariatur tempore nobis aspernatur amet voluptatibus nostrum est itaque nesciunt ut ducimus deleniti nisi ullam obcaecati suscipit numquam, consequatur iste eos officiis quisquam! Iure, tempora doloribus ipsam magni provident, error odit quidem quae molestiae id fuga. Explicabo voluptatibus voluptatum eligendi temporibus iste asperiores fugit dolorem natus minus sed minima at expedita molestias repellendus aut quidem voluptate beatae quasi deleniti itaque fugiat, nihil reprehenderit! Deserunt libero aperiam perspiciatis dolore iusto magni assumenda culpa a sequi est distinctio quasi ducimus possimus sit dicta, dolorem at reiciendis porro sed sint laborum reprehenderit labore incidunt? Numquam ex placeat, et repellat quam laborum minus ea facere totam consequuntur debitis consequatur beatae. Hic, accusantium. Placeat maiores totam perferendis voluptates, velit libero earum natus error nihil itaque sequi eligendi. Impedit quae ipsum a officiis quia ullam vitae tenetur laboriosam, at cupiditate, non architecto, ipsa deleniti obcaecati!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus ullam eos rerum consectetur error ex perspiciatis quod voluptatum, iure alias. Ab quasi optio voluptates dolorem tempora reiciendis distinctio saepe. Possimus, sequi! At dolore harum voluptate deleniti, enim, ipsum aspernatur aliquid aperiam, consequatur numquam dignissimos vero ratione. Nesciunt voluptatem quo enim sunt assumenda, ea atque numquam asperiores, sint, iusto provident.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Content;
