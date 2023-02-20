import React from "react";
import { ChatList } from "react-chat-elements";
const Chats = ({ chats, setCurrentChatId }) => {
  return (
    <div className="col-4">
      {chats.map((elem, index) => (
        <ChatList
          key={index}
          className="chat-list"
          onClick={(data) => {
            setCurrentChatId(data.id);
          }}
          dataSource={[
            {
              id: elem.id,
              avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
              alt: "kursat_avatar",
              title: "Kursat",
              subtitle:
                "Why don't we go to the No Way Home movie this weekend ?",
              date: new Date(),
              unread: 3,
            },
          ]}
        />
      ))}
    </div>
  );
};

export default Chats;
