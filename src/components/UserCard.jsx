import React, { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const UserCard = ({ data }) => {
  const [seeMore, setSeeMore] = useState(false);

  const deleteUserHandler = async (event) => {
    const res = await fetch("http://localhost:8000/deleteUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: data._id }),
    });

    console.log(res.status);
    if (res.status === 201) {
      alert("User deleted");
      window.location.reload();
    }
  };

  return (
    <div className="usercard">
      <p className="fullname">{data.name}</p>
      <div className="usercontent">
        <div className="contentrow">
          <p className="textkey">Username: </p>
          <p className="textvalue">{data.username}</p>
        </div>
        <div className="contentrow">
          <p className="textkey">Email: </p>
          <p className="textvalue">{data.email}</p>
        </div>
      </div>
      <div className="usercontent">
        <div className="contentrow">
          <p className="textkey" style={{ color: "purple" }}>
            Phone:{" "}
          </p>
          <p className="textvalue">{data.phone}</p>
        </div>
        <div className="contentrow">
          <p className="textkey" style={{ color: "purple" }}>
            Website:{" "}
          </p>
          <p className="textvalue">{data.website}</p>
        </div>
      </div>
      {!seeMore && (
        <div className="seeDiv">
          <button className="seeButton" onClick={() => setSeeMore(true)}>
            See More...
          </button>
          <button className="deleteButton" onClick={deleteUserHandler}>
            Remove User
          </button>
        </div>
      )}

      {seeMore && (
        <>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Address:</p>
          <div
            className="usercontent"
            style={{ marginLeft: "2vw", marginRight: "2vw" }}
          >
            <div className="contentrow">
              <p className="textkey" style={{ color: "green" }}>
                Street:
              </p>
              <p className="textvalue" style={{ marginLeft: "0.5rem" }}>
                {data.address.street}
              </p>
            </div>
            <div className="contentrow">
              <p className="textkey" style={{ color: "purple" }}>
                Suite:
              </p>
              <p className="textvalue" style={{ marginLeft: "0.5rem" }}>
                {data.address.suite}
              </p>
            </div>
            <div className="contentrow">
              <p className="textkey" style={{ color: "red" }}>
                City:
              </p>
              <p className="textvalue" style={{ marginLeft: "0.5rem" }}>
                {data.address.city}
              </p>
            </div>
            <div className="contentrow">
              <p className="textkey" style={{ color: "teal" }}>
                ZipCode:
              </p>
              <p className="textvalue" style={{ marginLeft: "0.5rem" }}>
                {data.address.zipcode}
              </p>
            </div>
          </div>
          <div
            className="usercontent"
            style={{ marginLeft: "2vw", marginRight: "2vw" }}
          >
            <div className="contentrow">
              <p className="textkey" style={{ color: "darkblue" }}>
                Latitude:
              </p>
              <p className="textvalue" style={{ marginLeft: "0.5rem" }}>
                {data.address.geo.lat}
              </p>
            </div>
            <div className="contentrow">
              <p className="textkey" style={{ color: "darkblue" }}>
                Longitude:
              </p>
              <p className="textvalue" style={{ marginLeft: "0.5rem" }}>
                {data.address.geo.lng}
              </p>
            </div>
          </div>

          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Company:</p>
          <div
            className="usercontent"
            style={{
              marginLeft: "2vw",
              marginRight: "2vw",
              flexDirection: "column",
            }}
          >
            <div className="contentrow">
              <p className="textkey" style={{ color: "darkred" }}>
                Name:
              </p>
              <p className="textvalue">{data.company.name}</p>
            </div>
            <div className="contentrow">
              <p className="textkey" style={{ color: "darkred" }}>
                Catch Phrase:
              </p>
              <p className="textvalue">{data.company.catchPhrase}</p>
            </div>
            <div className="contentrow">
              <p className="textkey" style={{ color: "darkred" }}>
                Business Strategy:
              </p>
              <p className="textvalue">{data.company.bs}</p>
            </div>
          </div>
          <div className="seeDiv">
            <button className="seeButton" onClick={() => setSeeMore(false)}>
              See Less...
            </button>
            <button className="deleteButton" onClick={deleteUserHandler}>
              Remove User
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCard;
