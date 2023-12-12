import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col, Container } from "react-bootstrap";
import html from "../assets/img/html-1.svg";
import css from "../assets/img/css-3.svg";
import react from "../assets/img/reactJS.png";
import git from "../assets/img/git-icon.svg";
import js from "../assets/img/javascript-1.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2 className="skill-heading">Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={react} alt="skill 1: ReactJs" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="skill 2: Javascript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={css} alt="skill 3: CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={html} alt="skill 4: HTML5" />
                  <h5>HTML</h5>
                </div>
                <div className="item" >
                  <img src={git} alt="skill 5: Git and Github" />
                  <h5>Git and Github</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="background after skills" />
    </section>
  );
};