import React, { useState, useEffect } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";
import { getAllComposers, addSong } from "../firebase";
import { useAuth } from "../components/AuthContext";

function Recommend() {
  const [composers, setComposers] = useState([]);
  const [composer, setComposer] = useState("beethoven");
  const [songs, setSongs] = useState([]);
  const [startIdx, setIdx] = useState(0);
  const numCards = 6;
  const { currUser } = useAuth();

  function refresh() {
    setIdx(startIdx + numCards);
    if (startIdx + numCards >= songs.length) {
      let index = composers.indexOf(composer);
      index++;
      if (index >= composers.length) {
        index = 0;
      }
      setIdx(0);
      setComposer(composers[index]);
      getDeezer();
    }
  }

  function getDeezer() {
    let proxyurl = "http://localhost:5001/goodscore-dev/us-central1/proxyWithCorsAnywhere/";
    let url = "https://api.deezer.com/search?q=artist:" + composer;
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.data);
      });
  }

  useEffect(() => {
    getAllComposers().then((data) => {
      setComposers(data);
    });
    getDeezer();
  }, []);

  useEffect(() => {
    getDeezer();
  }, [composer]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setComposer(event.target.searchComposer.value);
    setIdx(0);
  };

  return (
    <Container fluid className="mx-5">
      <h3 className="my-5">Add similar sheet music</h3>
      <Form className="search" onSubmit={handleSubmit}>
        <span className="fa fa-search searchIcon" />
        <Form.Control
          type="text"
          className="searchBox"
          placeholder="Type another composer's name"
          name="searchComposer"
        />
        <Button className="my-3" variant="dark" type="submit">
          Search
        </Button>
      </Form>

      <div className="row">
        {songs.slice(startIdx, startIdx + numCards).map((song, index) => (
          <Card className="col-sm-1 col-md-5 col-lg-3 mx-4 mb-4 pt-3 text-center">
            <Card.Img variant="top" src={song.artist.picture_big} />
            <Card.Body>
              <h5>{song.title}</h5>
              <audio className="audioPlayer" src={song.preview} controls />
              <Button
                className="mt-2"
                onClick={() => {
                  addSong(currUser.uid, song.title, composer);
                }}
              >
                Add to Library
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Button onClick={refresh}>Refresh</Button>
    </Container>
  );
}

export default Recommend;
