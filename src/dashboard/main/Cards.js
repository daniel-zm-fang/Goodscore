import React, { useState, useRef, useEffect } from "react";
import PracticeCard from "./Card";
import { Container, Button, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { users, checkUserExist, addUser } from "../../firebase";
import { useAuth } from "../../components/AuthContext";

function Cards() {
  const [songs, setSongs] = useState([]);
  const message = useRef("Personal Library");
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const { currUser } = useAuth();
  const handleDeletedTrue = () => {
    setDeleted(true);
  };

  async function addUserHelper() {
    const exist = await checkUserExist(currUser.uid);
    if (!exist) {
      addUser(currUser.uid);
    }
  }

  function update() {
    users.doc(currUser.uid).onSnapshot((snapshot) => {
      setSongs(snapshot.data().songs);
      setLoading(false);
      if (deleted) {
        setDeleted(false);
      }
    });
  }

  useEffect(() => {
    addUserHelper().then(() => {
      update();
      if (songs.length === 0) {
        message.current = "Add a sheet music to get started";
      } else {
        message.current = "Personal Library";
      }
    });
    return update;
  }, [songs.length, deleted, currUser]);

  const temp = (
    <>
      <h3 className="m-4">{message.current}</h3>
      <CardDeck className="m-2 justify-content-center">
        {songs.map((song, index) => (
          <PracticeCard song={song} key={index} deleted={handleDeletedTrue} />
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
