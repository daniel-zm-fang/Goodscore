import React, { useState, useEffect } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { getSongData } from "../../firebase";
import { useAuth } from "../../components/AuthContext";

function SheetMusicCard({ song, showModal }) {
  const [songData, setSongData] = useState({});
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);
  const { currUser } = useAuth();

  useEffect(() => {
    getSongData(song.name).then((data) => {
      setSongData(data);
      setLoading(false);
    });
  }, [song.name]);

  const details = <>Hello</>;

  return (
    <Card
      className={`m-2 col-sm-1 sheetMusicCard`}
      onClick={() => {
        setClick(!click);
      }}
    >
      <button
        className="closeButton"
        onClick={() => {
          //deleteSong(currUser.uid, song.name);
          showModal(song.name);
        }}
      ></button>
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
        {click && details}
      </Card.Body>
    </Card>
  );
}

export default SheetMusicCard;
