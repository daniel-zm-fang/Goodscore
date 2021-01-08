import React, { useState, useRef, useEffect } from "react";
import PracticeCard from "./Card";
import { Container, Button, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getSongsFromUser } from "../../firebase";

function Cards() {
  const [songs, setSongs] = useState([]);
  const message = useRef("Personal Library");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSongsFromUser("rootM2R69HAi6ztTon1o").then((data) => {
      setSongs(data);
      setLoading(false);
      if (songs.length === 0) {
        message.current = "Add a sheet music to get started";
      } else {
        message.current = "Personal Library";
      }
    });
  }, [songs.length]);

  const temp = (
    <>
      <h3 className="m-4">{message.current}</h3>
      <CardDeck className="m-2 justify-content-center">
        {songs.map((song, index) => (
          <PracticeCard song={song} key={index} />
        ))}
      </CardDeck>
      <Button
        className="m-4 px-4 py-1"
        as={Link}
        to="/explore"
        variant="outline-dark"
        size="lg"
      >
        <b style={{ fontSize: "50px" }}>+</b>
      </Button>
    </>
  );

  return <Container fluid>{!loading && temp}</Container>;
}

export default Cards;
