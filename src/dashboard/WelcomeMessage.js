import React, { useState, useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import { Fade, Jumbotron } from "react-bootstrap";

function WelcomeMessage() {
  const { currUser } = useAuth();
  const [message, setMessage] = useState("Good morning, ");
  const changeMessage = (greeting) => setMessage(greeting);

  useEffect(() => {
    let currentTime = new Date().getHours();
    if (12 <= currentTime && currentTime <= 17) {
      changeMessage("Good afternoon, ");
    } else if (18 <= currentTime && currentTime <= 23) {
      changeMessage("Good evening, ");
    }
  });
  //<Fade in={true}></Fade>
  return <Jumbotron>{message + currUser.email}</Jumbotron>;
}

export default WelcomeMessage;