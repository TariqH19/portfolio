import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubLink,
  demoLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div style={{ height: "250px" }} className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          {githubLink && (
            <Button
              variant="light"
              href={githubLink}
              target="_blank"
              className="me-2">
              GitHub
            </Button>
          )}
          {demoLink && (
            <Button variant="light" href={demoLink} target="_blank">
              Demo
            </Button>
          )}
        </div>
      </div>
    </Col>
  );
};
