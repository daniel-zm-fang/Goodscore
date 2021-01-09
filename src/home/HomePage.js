import React from "react";
import { Fade, Jumbotron, Container, Row, Col } from "react-bootstrap";
import Background from "./images/home_bg.jpg";
import clock from "./images/clock.jpg"

const jumboStyle = {
  minHeight: "40vw",
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
          <h1 className="text-light text-center user-select-none" style={titleFont}>
            Progress at your Fingertips
          </h1>
        </Fade>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <img src={clock} alt="clock"></img>
            <h2 className="text-center">Practice</h2>
            <p className="text-center">
              Log your practice and keep track of your improvement.
            </p>
          </Col>
          <Col>
            <h2 className="text-center">Explore</h2>
            <p className="text-center">
              Learn new songs that suit your skill and taste.
            </p>
          </Col>
          <Col>
            <h2 className="text-center">Community</h2>
            <p className="text-center">
              Connect with others to share your favorite tunes.
            </p>
          </Col>
        </Row>
      </Container>
      <hr className="featurette-divider"></hr>
    </>
  );
}
