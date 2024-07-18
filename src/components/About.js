import { Container, Row, Col } from "react-bootstrap";
import Timeline from "../utils/timeline";

const About = () => {
    return (
        <Container className="mt-2 mr-lg-5" fluid>
            <Row xs={1} md={2}>
                <Col className="mb-3">
                    <Timeline />
                </Col>
                <Col className="px-lg-5 mb-2">
                    <div className="px-lg-5 about-text text-justify">
                        <p className="about-me-block">About</p>
                        <p>
                            As a seasoned Software Engineer with over 10 years of experience, I possess a diverse skill set encompassing both traditional web development and AI technologies.
                            My expertise lies in harmonizing front-end and back-end technologies, with a specialized focus on the Java SpringBoot + React + Oracle stack.
                            In addition to building robust web applications using advanced JavaScript and TypeScript and Java, My leadership abilities shine in Agile environments, where I guide teams with a collaborative and communicative approach, fostering innovation and efficiency.
                            Furthermore, my strong commitment to continuous learning keeps me at the forefront of modern development practices, ensuring that I deliver cutting-edge solutions that meet and exceed client expectations.
                        </p>
                    </div>
                    <div className="text-center mt-5">
                        <img src="static/images/programmer.svg" alt="programmer" className="programmer" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default About;
