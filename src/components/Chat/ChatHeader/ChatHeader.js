import React from "react";
import { IoMdCall, IoMdVideocam, IoMdMore } from "react-icons/io";
import { Avatar } from "react-chat-elements";
const ChatHeader = ({ chat }) => {
  return (
    <div>
      <div className="w-100 d-flex align-items-center justify-content-between mb-3">
        <div>
          <div className="d-flex align-items-center">
            <div>
              <div className="me-3">
                <Avatar
                  src="https://avatars.githubusercontent.com/u/80540635?v=4"
                  alt="avatar"
                  size="xlarge"
                  type={"circle"}
                />
              </div>
            </div>
            <div>
              <div>
                <strong>{chat.chatWith}</strong>
              </div>
              <div className="text-muted">
                <small>Last seen: Just Now!</small>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="me-3 ">
            <IoMdCall size={24} />
          </div>
          <div className="me-3">
            <IoMdVideocam size={24} />
          </div>
          <div>
            <IoMdMore size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
