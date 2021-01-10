import React, { useState, useEffect } from "react";
import { Container, Button, Form, CardDeck, Card } from "react-bootstrap";
import { getAllComposers } from "../firebase";

function Recommend() {
  const [composers, setComposers] = useState([]);
  const [composer, setComposer] = useState("beethoven");
  const [songs, setSongs] = useState([]);

  function random() {
    let randComp = composers[Math.floor(Math.random() * composers.length)];
    setComposer(randComp);
  }

  function refresh() {
    let proxyurl = "http://localhost:8080/";
    let url = "https://api.deezer.com/search?q=artist:" + composer;
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.data.slice(0, 3));
        console.log(songs);
      })
    
  }

  useEffect(() => {
    getAllComposers().then((data) => {
      setComposers(data);
    });
    //random();
    refresh();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    refresh(event.target.searchComposer.value);
  };

  const handleAdd = (event) => {
    
  }

  return (
    <Container className="mx-5">
      <h3 className="my-5">Add similar sheet music</h3>
      <Form className="search" onSubmit={handleSubmit}>
        <span className="fa fa-search searchIcon" />
        <Form.Control
          type="text"
          className="searchBox"
          placeholder="Search"
          name="searchComposer"
        />
        <Button variant="dark" type="submit">
          Search
        </Button>
      </Form>
      <CardDeck className="m-2 justify-content-center">
        {songs.map((song, index) => (
          <Card className="m-2 sm-1 sheetMusicCard">
            <Card.Title>{song.title}</Card.Title>
            <Card.Img variant="top" src={song.album.cover} />
            <audio controls>
              <source src={song.preview} type="audio/mpeg" />
            </audio>
            <Button onClick={handleAdd}>Add to Library</Button>
            <Card.Body></Card.Body>
          </Card>
        ))}
      </CardDeck>
      <Button onClick={refresh}>Refresh</Button>
    </Container>
  );
}

export default Recommend;
