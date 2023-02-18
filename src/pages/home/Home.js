import React from "react";
import Chats from "../../components/Chats/Chats";
import { useUser } from "../../context/UserContext";

const Home = () => {
  const { signout } = useUser();
  return (
    <div>
      <button onClick={signout}>Signout</button>
      <Chats />
    </div>
  );
};

export default Home;
