import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [active, setActive] = useState(0);
  const images = [
    "https://pxwall.com/wp-content/uploads/2019/04/4K-Nature-Desktop-Wallpapers.jpg",
    "https://wallpaperaccess.com/full/119781.jpg",
    "https://wallpaperaccess.com/full/32821.jpg",
    "https://wallpaperaccess.com/full/32866.jpg",
    "https://wallpapercave.com/wp/wp4711947.jpg",
  ];
  useEffect(() => {
    const t = setInterval(() => {
      clickNext();
    }, 2000);
    return () => {
      clearInterval(t);
    };
  }, []);
  const clickNext = () => {
    setActive((a) => (a + 1 > images.length - 1 ? 0 : a + 1));
  };
  const clickPrevious = () => {
    setActive((a) => (a - 1 < 0 ? images.length - 1 : a - 1));
  };
  return (
    <div>
      <h1 className="text-center">Welcome to Image Slider</h1>
      <div className="flex justify-center items-center">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.Ob7peM1xi-RyovLuXlIozwHaHa&pid=Api&P=0&h=220"
          alt="LeftButton"
          className="w-14 h-14 cursor-pointer"
          onClick={clickPrevious}
        />
        <img src={images[active]} alt="Wallpaper" className="w-1/4 " />
        <img
          src="https://cdn-icons-png.flaticon.com/512/60/60758.png"
          alt="RightButton"
          className="w-12 h-12 cursor-pointer "
          onClick={clickNext}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
