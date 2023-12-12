import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");


  useEffect(() => {
    const onScoll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScoll);

    return () => window.removeEventListener('scroll', onscroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink();
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#">Wisdom</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://github.com/Codeprince001' className='github-link' ><FontAwesomeIcon icon={faGithub} /></a>
              <a href='https://www.linkedin.com/in/wisdom-matthew-bb4818269/' className='linked-link' ><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href='https://twitter.com/Kingswisdom001' ><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
            <a href='connect' style={{ color: "inherit", textDecoration: "none" }}><button className='connect-btn' onClick={() => onUpdateActiveLink("connect")}><span>Let's connect</span></button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};