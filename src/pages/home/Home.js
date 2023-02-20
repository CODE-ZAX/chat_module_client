import React, { useState } from "react";
import Chat from "../../components/Chat/Chat";
import Chats from "../../components/Chats/Chats";
import { useUser } from "../../context/UserContext";
import { chats } from "../../data/chats";
const Home = () => {
  const { signout } = useUser();
  const [currentChatId, setCurrentChatId] = useState(1);

  return (
    <div>
      <div className="row g-0">
        <Chats chats={chats} setCurrentChatId={setCurrentChatId} />
        <Chat
          chat={chats.find((elem) => {
            return elem.id === currentChatId;
          })}
        />
      </div>
    </div>
  );
};

export default Home;
