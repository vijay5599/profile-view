import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Import your Tailwind CSS file if you are using Tailwind

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );

        setUser(response.data.results[0]);
        console.log("-->", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex items-center justify-center p-5 bg-white">
      {user && (
        <div className="w-full h-48 border-2 border-black flex bg-slate-400 rounded overflow-hidden shadow-lg p-5 px-2">
          <img
            className="border-2 border-black"
            src={user.picture.large}
            alt="User"
          />
          <div className="px-6 py-4">
            <p className="font-bold text-xl text-black flex  my-2">
              {user.name.first} {user.name.last}
            </p>
            <p className="text-black text-left font-semibold text-base my-2">
              Gender: {user.gender}
            </p>
            <p className="text-black text-left font-semibold text-base">
              Phone number: {user.phone}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
