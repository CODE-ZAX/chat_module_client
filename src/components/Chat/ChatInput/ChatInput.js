import React from "react";
import { Input } from "react-chat-elements";
import { FiPaperclip } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IconButton } from "@mui/material";
const ChatInput = () => {
  return (
    <div>
      <Input
        placeholder="Type here..."
        leftButtons={
          <IconButton
            onClick={() => {
              console.log("hello");
            }}
          >
            <FiPaperclip size={20} />
          </IconButton>
        }
        rightButtons={
          <IconButton
            onClick={() => {
              console.log("hello");
            }}
          >
            <IoPaperPlaneOutline size={20} />
          </IconButton>
        }
      />
    </div>
  );
};

export default ChatInput;
