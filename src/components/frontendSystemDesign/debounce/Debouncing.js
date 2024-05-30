import React, { useState, useEffect } from "react";

const Debouncing = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsopen] = useState(false);
  const [cache, setCache] = useState({});
  useEffect(() => {
    let t = setTimeout(() => {
      fetchData();
    }, 400);
    return () => clearTimeout(t);
  }, [search]);

  const fetchData = async () => {
    if (cache[search]) {
      setResults(cache[search]);
    } else {
      const response = await fetch(
        "https://www.google.com/complete/search?client=firefox&q=" + search
      );
      const data = await response.json();
      setResults(data[1]);
      cache[search] = data[1];
      console.log(data[1]);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="">
      <div>
        <img
          src="https://pngimg.com/uploads/google/google_PNG102344.png"
          alt="Google"
          height="150px"
          width="150px"
        />
      </div>
      <input
        type="text"
        placeholder="Google search..."
        className="w-56 border border-blue-900 mt-5"
        value={search}
        onChange={handleChange}
        onFocus={() => setIsopen(true)}
        onBlur={() => setIsopen(false)}
      />
      {results.length > 1 && isOpen && (
        <div className="w-56 bg-slate-100 border border-black">
          <ul>
            {results.map((r, i) => (
              <li key={i} className="hover:bg-gray-200 cursor-pointer">
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Debouncing;
