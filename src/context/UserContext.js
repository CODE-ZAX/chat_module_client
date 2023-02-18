import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import axios from "axios";
const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const DataProvidor = ({ children }) => {
  const [user, setUser] = useState(null);
  const signout = async () => {
    await signOut(auth);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
      } else {
        setUser(null);
      }
    });
  }, []);

  const userLogin = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const userSignup = async (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const registerUser = async (uid, email, firstName, lastName) => {
    try {
      const colRef = collection(db, "users");
      const docRef = await setDoc(doc(colRef, uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        uid: uid,
      });
      console.log("Account Registered: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userSignup,
        registerUser,

        signout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
