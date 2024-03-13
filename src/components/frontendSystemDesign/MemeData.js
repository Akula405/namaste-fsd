import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";
const MemeData = () => {
  const [memeData, setMemeData] = useState([]);
  const [isLoading, isSetLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    isSetLoading(true);
    fetchMmemes();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    console.log(
      window.innerHeight + window.scrollY >= document.body.scrollHeight
    );
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 1) {
      fetchMmemes();
    }
  };
  const fetchMmemes = async () => {
    isSetLoading(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setMemeData((memes) => [...memes, ...json.memes]);
    isSetLoading(false);
  };
  let dummy = [...Array(10)].map((i, k) => <Shimmer key={k} />);
  return (
    <div className="flex flex-wrap">
      {isLoading
        ? dummy
        : memeData.map((meme, i) => (
            <div key={i}>
              <MemeCard data={meme} />
            </div>
          ))}
    </div>
  );
};

export default MemeData;
