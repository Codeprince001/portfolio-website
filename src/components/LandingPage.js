import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";

export const LandingPage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting && updatedText === fullText) {
        setIsDeleting(false);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      } else if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(prevDelta => prevDelta / 2);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text, delta, isDeleting, period, setText, setIsDeleting, loopNum, setLoopNum, setDelta]);



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>{`Hi I'm a wisdom a `}<span className="wrap">{text}</span></h1>
            <p>I specialize in creating dynamic and SPA web apllication using ReactJs, HTML and CSS, i am proficient with Git and GitHub, conversant with nodeJS and expressJS</p>
            <button onClick={() => console.log("grace")}>Let's connect <FontAwesomeIcon icon={faArrowRight} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );

};