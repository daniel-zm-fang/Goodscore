import React, { useState, useRef, useEffect } from "react";
import PracticeCard from "./Card";
import { Container, Button, CardDeck, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { users, checkUserExist, addUser, deleteSong } from "../../firebase";
import { useAuth } from "../../components/AuthContext";

function Cards() {
  const [songs, setSongs] = useState([]);
  const message = useRef("Personal Library");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const { currUser } = useAuth();
  const handleshowModalTrue = (songName) => setShowModal(songName);
  const handleshowModalFalse = () => setShowModal(false);

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

  const content = (
    <>
      <Modal show={showModal} onHide={handleshowModalFalse}>
        <Modal.Header closeButton>
          <Modal.Title>Delete this sheet music?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Note: this action <b>cannot </b>be undone!
        </Modal.Body>
        <Button
          variant="danger"
          onClick={() => {
            deleteSong(currUser.uid, showModal);
            handleshowModalFalse();
            setDeleted(true);
          }}
        >
          Delete
        </Button>
      </Modal>
      <h3 className="m-4">{message.current}</h3>
      <CardDeck className="m-2 justify-content-center">
        {songs.map((song, index) => (
          <PracticeCard
            song={song}
            key={index}
            showModal={handleshowModalTrue}
          />
        ))}
      </CardDeck>
      <Button
        className="m-4 px-4 py-3"
        as={Link}
        to="/explore"
        variant="outline-dark"
        size="lg"
      >
        <i className="fas fa-plus" />
      </Button>
    </>
  );

  return <Container fluid>{!loading && content}</Container>;
}

export default Cards;
