// import React, { useState, useEffect } from "react";
// import {
//   users,
//   getUsername,
//   getFriends,
//   sendFriendRequest,
//   acceptFriendRequest,
//   deleteFriendRequest,
// } from "../../firebase";
// import { useAuth } from "../../components/AuthContext";

// function Friends() {
//   const [friends, setFriends] = useState([]);
//   const { currUser } = useAuth();

//   useEffect(() => {
//     getFriends(currUser.uid).then((data) => {
//       console.log(data[0]);
//       users.doc(data[0]).get();
//     });
//   }, []);

//   return <div>Friends</div>;
// }

// export default Friends;
