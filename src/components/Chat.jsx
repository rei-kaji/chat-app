import React, { useContext } from "react";
import { BsCameraVideoFill } from "react-icons/bs";
import { TiUserAdd } from "react-icons/ti";
import { SlOptions } from "react-icons/sl";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <BsCameraVideoFill
            style={{ color: "white", height: "1.5rem", cursor: "pointer" }}
          />
          <TiUserAdd
            style={{ color: "white", height: "1.5rem", cursor: "pointer" }}
          />
          <SlOptions
            style={{ color: "white", height: "1.5rem", cursor: "pointer" }}
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
