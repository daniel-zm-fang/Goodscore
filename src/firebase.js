import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCsF75H_ScTCs2aJt0M3S5MR64bQkGZ824",
  authDomain: "goodscore-39e11.firebaseapp.com",
  projectId: "goodscore-39e11",
  storageBucket: "goodscore-39e11.appspot.com",
  messagingSenderId: "877154652298",
  appId: "1:877154652298:web:fbdbd773ecdf24608a5d73",
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

async function addUser(userID, userName) {
  users.doc(userID).set({
    name: userName,
    friends: [],
    songs: [],
    pendingFriendRequests: [],
  });
}

async function getSongData(songName) {
  const doc = await songs.doc(songName).get();
  return doc.data();
}

async function getFriends(userID) {
  const doc = await users.doc(userID).get();
  return doc.data().friends;
}

async function getUsername(userID) {
  const doc = await users.doc(userID).get();
  return doc.data().name;
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

async function sendFriendRequest(userID, friendID) {
  const exist = await checkUserExist(friendID);
  if (!exist) {
    return "user not found";
  }
  users.doc(friendID).update({
    pendingFriendRequests: firebase.firestore.arrayUnion(userID),
  });
}

async function deleteFriendRequest(userID, friendID) {
  const temp = await users.doc(friendID).get();
  users.doc(friendID).update({
    pendingFriendRequests: temp
      .data()
      .pendingFriendRequests.filter((request) => request !== userID),
  });
}

async function acceptFriendRequest(userID, friendID) {
  deleteFriendRequest(userID, friendID);
  users.doc(userID).update({
    friends: firebase.firestore.arrayUnion(friendID),
  });
  users.doc(friendID).update({
    friends: firebase.firestore.arrayUnion(userID),
  });
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
  getFriends,
  getUsername,
  addSong,
  deleteSong,
  updateSong,
  getAllComposers,
  sendFriendRequest,
  deleteFriendRequest,
  acceptFriendRequest,
};
