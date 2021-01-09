import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { getAllComposers } from "../firebase";

function Recommend() {
  const [composers, setComposers] = useState([]);

  function refresh() {
    getAllComposers().then((data) => {
      setComposers(data);
    });
    let randComp = composers[Math.floor(Math.random() * composers.length)];
    let url = "https://api.deezer.com/search?q=artist:" + randComp;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <Container className="mx-5">
      <h3 className="my-5 inline" id="inline">
        Add similar sheet music
      </h3>
      <Button id="inline" onClick={refresh}>
        Refresh
      </Button>
      {console.log(composers)}
    </Container>
  );
}

export default Recommend;
