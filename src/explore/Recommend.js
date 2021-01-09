import React, { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
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
      <h3 className="my-5">Add similar sheet music</h3>
      <Form className="search">
        <span className="fa fa-search searchIcon" />
        <Form.Control type="text" className="searchBox" placeholder="Search" />
      </Form>
      <Button onClick={refresh}>Refresh</Button>
      {console.log(composers)}
    </Container>
  );
}

export default Recommend;
