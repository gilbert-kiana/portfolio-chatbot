import React, { useState, useEffect } from "react";
import { ChatEngine, Socket, ChatFeed } from "react-chat-engine";

const ChatEngineWindow = (props) => {
  useEffect(() => {
    if (props.visible) {
      setTimeout(() => {
        setShowChat(true);
      }, 500);
    }
  });

  return (
    <div
      className="transition-5"
      style={{
        height: props.visible ? "100%" : "0%",
        zIndex: props.visible ? 100 : 0,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      {props.visible && (
        <ChatEngine>
          <Socket
            projectID={process.env.REACT_APP_CE_PROJECT_ID}
            userName={props.user.email}
            userSecret={props.user.email}
          />
          <ChatFeed activeChat={props.chat.id} />
        </ChatEngine>
      )}
    </div>
  );
};

export default ChatEngineWindow;
