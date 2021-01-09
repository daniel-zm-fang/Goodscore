import React, { useState, useEffect } from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";
import { getSongData, deleteSong } from "../../firebase";
import { useAuth } from "../../components/AuthContext";

function SheetMusicCard({ song, deleted }) {
  const [songData, setSongData] = useState({});
  const [loading, setLoading] = useState(true);
  const { currUser } = useAuth();

  useEffect(() => {
    getSongData(song.name).then((data) => {
      setSongData(data);
      setLoading(false);
    });
  }, [song.name]);

  return (
    <Card className="m-2 col-sm-1" style={{ minWidth: "25%" }}>
      <button
        className="closeButton"
        onClick={() => {
          deleteSong(currUser.uid, song.name);
          deleted();
        }}
      ></button>
      <Card.Body>
        <Card.Title>{song.name}</Card.Title>
        <Card.Img variant="top" src="../../theme/evening.png" />
        <Card.Text>Composed by: {!loading && songData.composer}</Card.Text>
        <ProgressBar
          variant="dark"
          className="mb-3"
          now={song.progress}
          label={`${song.progress}%`}
        />
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default SheetMusicCard;
