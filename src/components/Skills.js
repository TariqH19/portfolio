import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have a deep passion for learning, and I am committed to
                continuously expanding my skill set. Embracing the ever-evolving
                landscape of knowledge and technology, I am enthusiastic about
                the prospect of seeing my list of skills grow, adapt, and
                diversify over time.
              </p>
              <div class="skills-container">
                <ul class="skills-list">
                  <li class="skills-list-item">Front-End Development</li>
                  <li class="skills-list-item">Back-End Web Development</li>
                  <li class="skills-list-item">User Experience (UX)</li>
                  <li class="skills-list-item">NoSQL</li>
                  <li class="skills-list-item">SQL</li>
                  <li class="skills-list-item">React Native</li>
                  <li class="skills-list-item">Node.js</li>
                  <li class="skills-list-item">Wireframing</li>
                  <li class="skills-list-item">HTML5</li>
                  <li class="skills-list-item">Cascading Style Sheets (CSS)</li>
                  <li class="skills-list-item">Laravel</li>
                  <li class="skills-list-item">PHP</li>
                  <li class="skills-list-item">React.js</li>
                  <li class="skills-list-item">JavaScript</li>
                  <li class="skills-list-item">Creative Coding</li>
                  <li class="skills-list-item">Databases</li>
                  <li class="skills-list-item">MongoDB</li>
                  <li class="skills-list-item">Docker </li>
                  <li class="skills-list-item">Unit Testing </li>
                  <li class="skills-list-item">Java </li>
                  <li class="skills-list-item">Git </li>
                  <li class="skills-list-item">AWS </li>
                  <li class="skills-list-item">Azure </li>
                  <li class="skills-list-item">Jira </li>
                  <li class="skills-list-item">Trello </li>
                  <li class="skills-list-item">Miro </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
