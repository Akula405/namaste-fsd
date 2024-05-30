import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

const ChatContainer = () => {
  const [msgs, setMsgs] = useState([]);
  const [input_text, setInputText] = useState("");

  const limited_msgs = 7;

  useEffect(() => {
    let s = setInterval(fetchData, 2000);
    return () => clearInterval(s);
  }, []);
  function fetchData() {
    let data = [
      {
        name: generateRandomName(),
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCa6RYEC--HOxrBAfda7rpEJxoOoOIo5mVw&s",
        message:
          "The main function that uses the getRandomElement function to select a random  ",
      },
    ];
    setMsgs((message) => {
      let newMessage = [...data, ...message];
      let limit = newMessage.splice(0, limited_msgs);
      return limit;
    });
  }

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateRandomName() {
    const firstNames = [
      "John",
      "Jane",
      "Alex",
      "Emily",
      "Chris",
      "Katie",
      "Michael",
      "Sarah",
      "David",
      "Laura",
    ];
    //const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];

    const firstName = getRandomElement(firstNames);
    //const lastName = getRandomElement(lastNames);

    return firstName;
  }
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleClick = (e) => {
    const my_msg = [
      {
        name: "Satish",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNuTRmqexAWygTFKwsCeIfD8gu19RTLjJXw&s",
        message: input_text,
      },
    ];
    setMsgs((p) => [...my_msg, ...p]);
    setInputText("");
  };
  return (
    <>
      <div className="h-[550px] w-full border border-blue-500 m-4 flex flex-col-reverse overflow-y-auto">
        <div>
          <input
            type="text"
            value={input_text}
            className="border border-black w-56 p-1 m-2"
            placeholder="Type Your comment"
            onChange={handleChange}
          />
          <button
            className="bg-emerald-800 rounded-md w-20 p-1"
            onClick={handleClick}
          >
            Enter
          </button>
        </div>
        {msgs.map((obj, i) => (
          <ChatMessage key={i} {...obj} />
        ))}
      </div>
    </>
  );
};

export default ChatContainer;
