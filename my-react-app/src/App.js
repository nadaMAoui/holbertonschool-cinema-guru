import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// Import the Dashboard and Authentication components when they are available
// import Dashboard from './components/Dashboard';
// import Authentication from './components/Authentication';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      axios
        .post(
          "/api/auth/",
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => {
          setIsLoggedIn(true);
          setUserUsername(response.data.username);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return isLoggedIn ? <Dashboard /> : <Authentication />;
};

export default App;
