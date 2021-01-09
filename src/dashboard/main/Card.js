import React, { useState, useEffect } from "react";
import { Card, ProgressBar, Form } from "react-bootstrap";
import { getSongData, updateSong } from "../../firebase";
import { useAuth } from "../../components/AuthContext";

function SheetMusicCard({ song, showModal }) {
  const [songData, setSongData] = useState({});
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState("expand");
  const { currUser } = useAuth();

  useEffect(() => {
    getSongData(song.name).then((data) => {
      setSongData(data);
      setLoading(false);
    });
  }, [song.name]);

  const displayProgress = (event) => {
    document.getElementById("updateProgressDisplay" + song.name).value =
      event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(currUser.uid, song.name, event.target.newProgress.value);
  };

  const details = (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Update Progress</Form.Label>
        <Form.Control
          id="newProgress"
          name="newProgress"
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          onInput={displayProgress}
          required
        />
        <output id={"updateProgressDisplay" + song.name}>0</output>
      </Form.Group>
      <input
        className="btn btn-outline-dark"
        variant="dark"
        type="submit"
        value="Update"
      />
    </Form>
  );

  return (
    <Card className={`m-2 col-sm-1 sheetMusicCard`}>
      <i
        className="far fa-trash-alt deleteButton"
        onClick={() => {
          showModal(song.name);
        }}
      ></i>
      <i
        className={`fas fa-${click} expandButton`}
        onClick={() => {
          if (click === "compress") {
            setClick("expand");
          } else {
            setClick("compress");
          }
        }}
      ></i>
      <Card.Body>
        <Card.Title>{song.name}</Card.Title>
        <Card.Img variant="top" src="../../theme/evening.png" />
        <Card.Text>
          Composed by: <b>{!loading && songData.composer}</b>
        </Card.Text>
        <ProgressBar
          variant="dark"
          className="mb-3"
          now={song.progress}
          label={`${song.progress}%`}
        />
        {click === "expand" && details}
      </Card.Body>
    </Card>
  );
}

export default SheetMusicCard;
