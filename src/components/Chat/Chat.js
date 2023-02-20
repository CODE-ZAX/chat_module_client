import React from "react";

import { MessageList } from "react-chat-elements";
import ChatHeader from "./ChatHeader/ChatHeader";

import classes from "./Chat.module.css";
import ChatInput from "./ChatInput/ChatInput";

const Chat = ({ chat }) => {
  return (
    <div className={"col-8 p-3 d-flex flex-column " + classes.main}>
      <ChatHeader chat={chat} />
      <div style={{ flexGrow: 1 }}>
        <MessageList
          className="message-list"
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={chat.chat}
        />
      </div>
      <hr />
      <ChatInput />
    </div>
  );
};

export default Chat;
