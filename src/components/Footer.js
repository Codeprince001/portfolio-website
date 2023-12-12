import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="footer" style={{ padding: "25px" }}>
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <h2> Dev Wisdom</h2>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href='https://twitter.com/Kingswisdom001'><FontAwesomeIcon icon={faTwitter} /></a>
              <a href='https://www.linkedin.com/in/wisdom-matthew-bb4818269/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href='https://github.com/Codeprince001'><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <p>CopyRight 2023, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};