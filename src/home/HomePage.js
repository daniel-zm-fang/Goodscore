import React from "react";
import { Fade, Jumbotron, Image, Container, Row, Col } from "react-bootstrap";
import Background from "../theme/home_bg.jpg";

const jumboStyle = {
  minHeight: "500px",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const titleFont = {
  fontFamily: "Bebas Neue",
  fontSize: "80px",
};

export default function HomePage() {
  return (
    <>
      <Jumbotron fluid style={jumboStyle}>
        <Fade in={true}>
          <h1 className="text-light text-center" style={titleFont}>
            Progress at your Fingertips
          </h1>
        </Fade>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <Image
              src="https://www.clipartmax.com/png/middle/212-2120389_hourglass-icon-sand-timer-png-icon.png"
              height="140px"
            />
            <h2 className="text-center">Practice</h2>
            <p className="text-center">Some Description</p>
          </Col>
          <Col>
            <Image src="src/home/images/clock.jpg" round />
            <h2 className="text-center">Explore</h2>
            <p className="text-center">Some Description</p>
          </Col>
          <Col>
            <Image src="src/home/images/clock.jpg" round />
            <h2 className="text-center">Community</h2>
            <p className="text-center">Some Description</p>
          </Col>
        </Row>
      </Container>
      <hr className="featurette-divider"></hr>
    </>
  );
}
