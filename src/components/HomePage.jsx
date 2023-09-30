import React from "react";
import UserCard from "./UserCard";

const HomePage = ({ data, state }) => {
  console.log(data);
  console.log(state);

  return (
    <div className="homepageContainer">
      {state.length
        ? state.map((user, index) => <UserCard data={user} />)
        : data.map((user, index) => <UserCard data={user} />)}
    </div>
  );
};

export default HomePage;
