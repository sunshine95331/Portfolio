import CustomNav from "./NavBar";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import DeveloperSvg from "../utils/developerSvg";
import Particles from "../utils/particles";
import Typist from "react-typist";
import About from "./About"

const Home = () => {
  return (
    <>
      <CustomNav />
      <Container className="h-100 home-container" role="main">
        <Row xs={1} md={2} className="h-100">
          <Col className="my-auto">
            <div>
              <h5 className="color-custom-grey font-weight-bold mb-0">Hey !</h5>
              <h1 className="color-name-blue text-boldest">I'm Veroljub</h1>
              <span className="color-custom-grey h4">
                <Typist className="TypistExample-message" cursor={{ show: false }}>
                  <span>I'm a </span><span className="font-weight-bold">
                    <span className="font-weight-bold">Full Stack <span className="font-weight-normal">Developer</span></span>
                    <Typist.Backspace count={20} delay={3500} /> Blockchain</span> Engineer </Typist></span><br />
              <span className="color-custom-grey h5">I am sensitive to the latest technology and ensure the best quality.</span><br />
            </div>
            <div className="d-flex my-4">
              <Button variant="" className="color-custom-blue p-0 mr-3 border-0" aria-label="github" onClick={() => window.open('https://github.com/sunshine95331', '_blank')}><FontAwesomeIcon size="2x" icon={faGithubSquare} /></Button>
              <Button variant="" className="color-custom-blue p-0 mr-3 border-0" aria-label="linkedin" onClick={() => window.open('https://www.linkedin.com/in/promark', '_blank')}><FontAwesomeIcon size="2x" icon={faLinkedin} /></Button>
            </div>
            <Button className="bg-custom-blue font-weight-bold shadow-sm border-0 resume-btn" onClick={() => window.open('/static/Veroljub Djordjevic.pdf', '_blank')}>View Resume</Button>
          </Col>
          <Col className="w-100 my-auto d-none d-md-block">
            <DeveloperSvg />
          </Col>
        </Row>
      </Container>
      <Particles />
      <About />
    </>
  )
};

export default Home;
