import React from "react";
import LiveStream from "./LiveStream";
import ChatContainer from "./ChatContainer";
const LiveChat = () => {
  return (
    <div className="flex">
      <LiveStream />
      <ChatContainer />
    </div>
  );
};

export default LiveChat;
