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
                            Senior Developer specializing in Blockchaindevelopment and WEB development.
                            Experienced with all stages of the development cycle for blockchain and dynamic web projects and cloud platforms.
                            Well- versed in numerous programming languages including JavaScript and its modern frameworks as well as Hybrid development.
                            Have developed DEX, DeFi and NFT marketplace and my role is smart contract development and integration frontend with smart contract.
                            Considering myself an excellent software engineer and would love to say one of the most quali ed engineers when it comes to any kind of development such as React, Vue, Angular, Node.js.                        </p>
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
