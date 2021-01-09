import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBlKZ7Jf7tazYnxHHkmLsGB4TD7mLX1JIE",
  authDomain: "goodscore-dev.firebaseapp.com",
  projectId: "goodscore-dev",
  storageBucket: "goodscore-dev.appspot.com",
  messagingSenderId: "202095644827",
  appId: "1:202095644827:web:132f453986bc3de694763e",
});

const db = firebase.firestore();
const songs = db.collection("songs");
const users = db.collection("users");

async function checkSongExist(songName) {
  const doc = await songs.doc(songName).get();
  if (doc.exists) {
    return true;
  }
  return false;
}

async function checkUserExist(userID) {
  const doc = await users.doc(userID).get();
  if (doc.exists) {
    return true;
  }
  return false;
}

async function addUser(userID) {
  users.doc(userID).set({
    friends: [],
    songs: [],
  });
}

async function getSongData(songName) {
  const doc = await songs.doc(songName).get();
  return doc.data();
}

async function getSongsFromUser(userID) {
  try {
    const doc = await users.doc(userID).get();
    return doc.data().songs;
  } catch (err) {
    console.log(err);
  }
}

async function addSong(userID, songName, composerName, progress = 0) {
  const exist = await checkSongExist(songName);
  if (!exist) {
    songs.doc(songName).set({
      composer: composerName,
    });
  }
  users.doc(userID).update({
    songs: firebase.firestore.FieldValue.arrayUnion({
      name: songName,
      progress: progress,
    }),
  });
}

async function deleteSong(userID, songName) {
  const temp = await users.doc(userID).get();
  users.doc(userID).update({
    songs: temp.data().songs.filter((song) => song.name !== songName),
  });
}

async function updateSong(userID, songName, newProgress) {
  const temp = await users.doc(userID).get();
  users.doc(userID).update({
    songs: temp.data().songs.map((song) => {
      if (song.name === songName) {
        song.progress = newProgress;
      }
      return song;
    }),
  });
}

async function getAllComposers() {
  const temp = await songs.get();
  return temp.docs.map((doc) => doc.data().composer);
}

export const auth = app.auth();
export default app;
export {
  users,
  songs,
  checkSongExist,
  checkUserExist,
  addUser,
  getSongData,
  getSongsFromUser,
  addSong,
  deleteSong,
  updateSong,
  getAllComposers,
};
