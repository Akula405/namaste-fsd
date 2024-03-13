import React from "react";

const MemeCard = ({ data }) => {
  const { url, author } = data;

  return (
    <div className="m-5 border border-black p-5 rounded-lg">
      <img src={url} alt="Meme" className="w-64 h-64" />
      <p className="p-3">{author}</p>
    </div>
  );
};

export default MemeCard;
