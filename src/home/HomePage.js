import React, {useState} from "react";
import { Fade, Jumbotron, Container, Row, Col } from "react-bootstrap";
import Background from "./images/home_bg.jpg";
import clock from "./images/clock.png";
import search from "./images/search.png";
import friends from "./images/friends.png";
import SignUp from "../auth/SignUpPage"

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

const imgStyle = {
  height: "200px",
  width: "200px",
  display: "block",
  margin: "0 auto",
  backgroundColor: "transparent",
};

export default function HomePage() {
  const [showSignUp, setShowSignUp] = useState(false);
  const handleShowSignUp = setShowSignUp(!showSignUp);

  return (
    <>
    <SignUp show={showSignUp} close={handleShowSignUp} />
      <Jumbotron fluid style={jumboStyle}>
        <Fade in={true}>
          <h1
            className="text-light text-center user-select-none"
            style={titleFont}
          >
            Progress at your Fingertips
          </h1>
        </Fade>
      </Jumbotron>
      <Container className="mb-5">
        <Row>
          <Col className="mr-6">
            <img src={clock} style={imgStyle} alt="clock"></img>
            <div className="w-75 " style={{ margin: "0 auto" }}>
              <h2 className="text-center">Practice</h2>
              <p className="text-center">
                Log your practice and keep track of your improvement.
              </p>
            </div>
          </Col>
          <Col className="">
            <img src={search} style={imgStyle} alt="search"></img>
            <div className="w-75 " style={{ margin: "0 auto" }}>
              <h2 className="text-center">Explore</h2>
              <p className="text-center">
                Learn new songs that suit your skill and taste.
              </p>
            </div>
          </Col>
          <Col>
            <img src={friends} style={imgStyle} alt="search"></img>
            <div className="w-75 " style={{ margin: "0 auto" }}>
              <h2 className="text-center">Community</h2>
              <p className="text-center">
                Connect with others to share your favorite tunes.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Jumbotron className="bg-dark">
        <h1 className="text-light text-center user-select-none">
          Sign up to get started
        </h1>
      </Jumbotron>
      
    </>
  );
}
