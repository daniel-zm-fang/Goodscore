// import React, { useState, useContext, useEffect } from "react";
// import { auth } from "../firebase";

// const context = React.createContext();

// export function useAuth() {
//   return useContext(context);
// }

// export function AuthContext({ children }) {
//   const [currUser, setCurrUser] = useState();

//   function signUp(email, password) {
//     auth.createUserWithEmailAndPassword(email, password);
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   const value = {
//     currUser,
//     signUp,
//   };

//   return <context.Provider value={value}>{children}</context.Provider>;
// }
