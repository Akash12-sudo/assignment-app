import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import AddNewUserPage from "./components/AddNewUserPage";

const App = () => {
  const [userlist, setUserlist] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);

  useEffect(() => {
    const getUserDataHandler = async () => {
      const response = await fetch("http://localhost:8000/getAllUsers");
      console.log(response.status);
      const data = await response.json();
      console.log(data);
      setUserlist(Object.values(data)[0]);
    };

    getUserDataHandler();
    console.log(userlist);
  }, []);

  return (
    <div className="container">
      <NavigationBar data={userlist} setState={setSearchedUsers} />

      <Routes>
        <Route
          path="/"
          element={<HomePage data={userlist} state={searchedUsers} />}
        />
        <Route path="/add" element={<AddNewUserPage />} />
      </Routes>
    </div>
  );
};

export default App;
