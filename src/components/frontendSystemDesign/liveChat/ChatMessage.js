import React from "react";

const ChatMessage = ({ name, photo, message }) => {
  return (
    <div className="flex">
      <img src={photo} alt={name} className="h-7 w-7 rounded-full m-2" />
      <p className="p-2">
        <span className="font-bold">{name} - </span>
        <span>{message}</span>
      </p>
    </div>
  );
};

export default ChatMessage;
