import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/react-countries.png";
import projImg2 from "../assets/img/H&M.png";
import projImg3 from "../assets/img/wts.png";
import projImg4 from "../assets/img/fitness-api.jpg";
import projImg5 from "../assets/img/employee.jpg";
import projImg6 from "../assets/img/movie.jpg";
import projImg7 from "../assets/img/space.png";
import projImg8 from "../assets/img/maze.png";
import projImg9 from "../assets/img/khmw.png";
import projImg10 from "../assets/img/fit-fe.png";
import projImg11 from "../assets/img/t&j.png";
import projImg12 from "../assets/img/diabetes.png";
import projImg13 from "../assets/img/business.jpeg";
import projImg14 from "../assets/img/spatial.png";
import projImg15 from "../assets/img/weight.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Experience } from "./Experience";

export const Projects = () => {
  const projects = [
    {
      title: "React Countries App",
      description: "Front-End Development",
      imgUrl: projImg1,
      demoLink: "https://react-app-countries.web.app/",
      githubLink: "https://github.com/iadtmo/ca1-countries-TariqH19",
    },
    {
      title: "H&M Website Replication",
      description: "Design & Development",
      imgUrl: projImg2,
      demoLink:
        "https://tariqh19.github.io/TariqH19-BootstrapProjectH-M/index.html",
      githubLink: "https://github.com/TariqH19/TariqH19-BootstrapProjectH-M",
    },
    {
      title: "What's The Story",
      description: "Design & Development",
      imgUrl: projImg3,
      demoLink: "https://tariqh19.github.io/whatsTheStory/",
      githubLink: "https://github.com/TariqH19/whatsTheStory",
    },
    {
      title: "Fitness API",
      description: "Backend Development",
      imgUrl: projImg4,
      githubLink: "https://github.com/TariqH19/gymAPI",
    },
    {
      title: "Employee Management System",
      description: "Backend Development",
      imgUrl: projImg5,
      githubLink: "https://github.com/TariqH19/EmployeeApp",
    },
    {
      title: "Movie API",
      description: "Design & Development",
      imgUrl: projImg6,
      githubLink: "https://github.com/TariqH19/laravel/tree/master/movies",
    },
    {
      title: "Space Invaders Game",
      description: "Creative Computing",
      imgUrl: projImg7,
      demoLink: "https://tariqh19.github.io/spaceinvaders/",
      githubLink: "https://github.com/TariqH19/spaceinvaders",
    },
    {
      title: "Maze Game",
      description: "Creative Computing",
      imgUrl: projImg8,
      demoLink: "https://tariqh19.github.io/maze/",
      githubLink: "https://github.com/TariqH19/maze",
    },
    {
      title: "Man with a van",
      description: "Frontend Development",
      imgUrl: projImg9,
      demoLink: "https://speedyremovals.ie/",
      githubLink: "https://github.com/TariqH19/khmwv2",
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile Development",
      imgUrl: projImg10,
      demoLink: "https://fit-fe.vercel.app/",
      githubLink: "https://github.com/TariqH19/fitFE",
    },
    {
      title: "Image classification",
      description: "Machine Learning",
      imgUrl: projImg11,
      githubLink: "https://github.com/TariqH19/image_classification",
    },
    {
      title: "Diabetes Prediction",
      description: "MAchine Learning",
      imgUrl: projImg12,
      githubLink: "https://github.com/TariqH19/diabetes_lg",
    },
    {
      title: "Business Analytics reports",
      description: "Data Analytics",
      imgUrl: projImg13,
      githubLink: "https://github.com/TariqH19/business_notebooks",
    },
    {
      title: "Spatial Data Analysis",
      description: "Data visualization",
      imgUrl: projImg14,
      githubLink: "https://github.com/TariqH19/dataViz",
    },
    {
      title: "Vue Weight Tracker",
      description: "Front-End Development",
      imgUrl: projImg15,
      demoLink: "https://weight-tracker-cfd08.web.app/",
      githubLink: "https://github.com/TariqH19/weightTracker",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2 class="mb-4">Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">About Me</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Experience />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I&apos;m a software developer with an unwavering
                          passion and a proactive attitude. Whether working
                          independently or with guidance, I consistently adhere
                          to industry best practices. My strengths lie in my
                          deep understanding of programming, adept application
                          design, and proficient problem-solving abilities. I
                          thrive in diverse toolsets and coding languages,
                          making me versatile in various technology stacks.
                          Additionally, I excel in collaborative teamwork,
                          consistently delivering significant contributions
                          towards achieving our objectives.
                        </p>
                        <p>
                          {" "}
                          As a programmer, I thrive on confronting challenges
                          head-on; it&apos;s an integral part of my identity.
                          The world of coding truly excites me, and I possess
                          the expertise to devise creative solutions, whether it
                          involves crafting mobile apps or designing websites.
                          My proficiency extends to languages such as C#,
                          Python, TypeScript, and JavaScript, and I&apos;m
                          well-versed in frameworks like React Native and
                          Next.js, as well as backend technologies like
                          Express.js, Laravel and Node.js.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
