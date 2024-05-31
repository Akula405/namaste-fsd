import React from "react";

const ProductCard = ({
  title,
  price,
  id,
  discountPercentage,
  description,
  thumbnail,
}) => {
  return (
    <div className="border border-solid border-black m-2 p-2 w-[280px]">
      <img src={thumbnail} alt={title} className="h-52 object-fill" />
      <h1 className="font-bold text-xl w-60">
        {id}-{title}
      </h1>
      <h2 className="p-2 text-lg font-semibold">
        Rs.{price} - Discount {discountPercentage} %
      </h2>

      <p className="w-60 p-2 ">{description}</p>
    </div>
  );
};

export default ProductCard;
