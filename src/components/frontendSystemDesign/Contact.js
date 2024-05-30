import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchApi } from "../apiThunkSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, userList } = useSelector(
    (store) => store.userData
  );
  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  const handleClick = () => {
    dispatch(fetchApi());
  };
  return (
    <div>
      <div>
        <button
          className="bg-green-500 text-white rounded-md p-2 m-3"
          onClick={handleClick}
        >
          Fetch Data
        </button>
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}

      {userList.length > 0 && (
        <table className="table-auto border border-blue-400">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Email</th>
              <th className="px-4 py-2 border border-black">City</th>
              <th className="px-4 py-2 border border-black">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((row) => (
              <tr key={row.id}>
                <td className="border border-black px-4 py-2">{row.name}</td>
                <td className="border border-black px-4 py-2">{row.email}</td>
                <td className="border border-black px-4 py-2">
                  {row.address.city}
                </td>
                <td className="border border-black px-4 py-2">{row.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Contact;
