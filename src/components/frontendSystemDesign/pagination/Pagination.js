import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Pagination = () => {
  const [currentPAge, setCurrentPAge] = useState(1);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);
  const limit = 10;
  useEffect(() => {
    fetchData();
  }, [currentPAge]);
  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${
        limit * currentPAge
      }&select=id,title,price,discountPercentage,thumbnail,description`
    );
    const json = await data.json();

    setProducts(json.products);
    setNoOfPages(Math.ceil(json.total / limit));
    console.log(Math.ceil(json.total / limit));
  };
  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      <div className="p-2 m-2">
        {currentPAge >= 1 && (
          <span
            onClick={() => setCurrentPAge((p) => p - 1)}
            className="cursor-pointer"
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((pN) => (
          <span
            key={pN}
            className={`p-1 m-1 cursor-pointer ${
              currentPAge === pN && "font-bold underline"
            }`}
            onClick={() => setCurrentPAge(pN)}
          >
            {pN + 1}
          </span>
        ))}
        {currentPAge !== noOfPages - 1 && (
          <span
            onClick={() => setCurrentPAge((p) => p + 1)}
            className="cursor-pointer"
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;
