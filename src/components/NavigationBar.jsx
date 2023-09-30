import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../static/search.png";

const NavigationBar = ({ data, setState }) => {
  const [searchText, setSearchText] = useState("");

  const changeHandler = (event) => {
    setSearchText(event.target.value);

    const filteredUsers = data.filter((user) =>
      user.username.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredUsers);

    if (!filteredUsers.length) return alert("username not found!!");
    else {
      setState(filteredUsers);
    }
  };

  const searchHandler = (event) => {
    console.log(searchText);

    const filteredUsers = data.filter((user) =>
      user.username.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredUsers);

    if (!filteredUsers.length) return alert("username not found!!");
    else {
      setState(filteredUsers);
    }
  };

  return (
    <nav className="navigationbar">
      <div className="home">
        <Link to="/" className="homelink">
          Home
        </Link>
      </div>
      <div className="searchdiv">
        <input
          className="searchbox"
          value={searchText}
          type="text"
          onChange={changeHandler}
          placeholder="search username"
        />
        <button className="searchbutton" onClick={searchHandler}>
          <img className="searchlogo" src={searchIcon} alt="search" />
        </button>
      </div>
      <div className="addUserdiv">
        <Link to="/add" className="addUserlink">
          Add User
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
