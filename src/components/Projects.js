import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project_1.PNG";
import projImg2 from "../assets/img/random_gen_img.PNG";
import projImg3 from "../assets/img/amazon_clone.PNG";
import projImg4 from "../assets/img/weather_app.PNG";
import projImg5 from "../assets/img/hulu.PNG";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const projects = [
    {
      title: "Management DashBoard",
      description: "This is a dashboard developed for a management company",
      imgUrl: projImg1,
      url: "https://client-dashboard-pearl.vercel.app/",
      code: "https://github.com/Codeprince001/client-dashboard"
    },
    {
      title: "Amazon Clone",
      description: "Developed with ReactJS, Rapid API, Swiper JS",
      imgUrl: projImg3,
      url: "https://amazon-clone-react-iota.vercel.app/",
      code: "https://github.com/Codeprince001/amazon-clone-react"
    },
    {
      title: "Random Quote Generator",
      description: "Use of Axios to fetch Quotes from a REST API",
      imgUrl: projImg2,
      url: "https://quoterush.netlify.app/",
      code: "https://github.com/Codeprince001/quote_generator_API"
    },
    {
      title: "Weather App",
      description: "Search for realtime weather condition for any location",
      imgUrl: projImg4,
      url: "https://weather-app-react-js-pied.vercel.app/",
      code: "https://github.com/Codeprince001/weather-app-react_Js"
    },
    {
      title: "Hulu Landing Page",
      description: "Hulu Landing Page",
      imgUrl: projImg5,
      url: "https://landingpage-hulu.netlify.app/",
      code: "https://github.com/Codeprince001/Hulu_homepage_clone"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              {/* <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">3</Nav.Link>
                </Nav.Item>
              </Nav> */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        );
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section >
  );
};