import React from "react";

const LiveStream = () => {
  return (
    <div className="m-2 p-2">
      <iframe
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/HkWxvB1RJq0?si=us_7LD3n3D-R6aaE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default LiveStream;
