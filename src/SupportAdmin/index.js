import React from "react";

import { ChatEngine } from "react-chat-engine";

const SupportAdmin = () => {
  return <ChatEngine 
  projectID={process.env.REACT_APP_CE_PRIVATE_KEY}
  userName="Adam La Morre"
  userSecret="pass1234"
  height="calc(100vh -20px)"
  />;
};
