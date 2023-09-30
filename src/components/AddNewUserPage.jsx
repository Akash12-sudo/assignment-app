import React, { useState } from "react";
import "../App.css";

const AddNewUserPage = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
  });

  const inputHandler = (event) => {
    const { id, value } = event.target;

    const idParts = id.split(".");
    let updatedUser = {};

    console.log(idParts);
    if (idParts.length === 3) {
      const [topLevel, subTopLevel, Property] = idParts;

      // Handle nested properties
      updatedUser = {
        ...newUser,
        address: {
          ...newUser.address,
          geo: {
            ...newUser.address.geo,
            [Property]: value,
          },
        },
      };
    } else if (idParts.length === 2) {
      const [topLevel, Property] = idParts;

      // Handle nested properties
      if (topLevel === "address") {
        const subIdParts = Property.split(".");
        console.log(subIdParts);
        updatedUser = {
          ...newUser,
          address: {
            ...newUser.address,
            [Property]: value,
          },
        };
      } else if (topLevel === "company") {
        updatedUser = {
          ...newUser,
          company: {
            ...newUser.company,
            [Property]: value,
          },
        };
      }
    } else {
      updatedUser = { ...newUser, [id]: value };
    }

    setNewUser(updatedUser);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const updatedUser = {
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      address: {
        street: newUser.address.street,
        suite: newUser.address.suite,
        city: newUser.address.city,
        zipcode: newUser.address.zipcode,
        geo: {
          lat: newUser.address.geo.lat,
          lng: newUser.address.geo.lng,
        },
      },
      phone: newUser.phone,
      website: newUser.website,
      company: {
        name: newUser.company.name,
        catchPhrase: newUser.company.catchPhrase,
        bs: newUser.company.bs,
      },
    };

    console.log(updatedUser);

    const res = await fetch("http://localhost:8000/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });

    if (res.status === 201) {
      const list = await res.json();
      console.log(list);
      alert("User added successfully");
      window.location.reload();
    }
  };

  return (
    <div className="adduserContainer">
      <form className="userForm" onSubmit={submitHandler}>
        <div className="formfield">
          <label htmlFor="name" className="labelStyle">
            Name
          </label>
          <input id="name" value={newUser.name} onChange={inputHandler} />
        </div>
        <div className="formfield">
          <label htmlFor="username" className="labelStyle">
            Username
          </label>
          <input
            id="username"
            value={newUser.username}
            onChange={inputHandler}
          />
        </div>
        <div className="formfield">
          <label htmlFor="email" className="labelStyle">
            Email
          </label>
          <input id="email" value={newUser.email} onChange={inputHandler} />
        </div>
        <div className="formfield" style={{ flexDirection: "column" }}>
          <label className="headLabel">Address</label>
          <div className="formSubfield">
            <label htmlFor="address.street" className="labelSubStyle">
              Street
            </label>
            <input
              id="address.street"
              value={newUser.address.street}
              onChange={inputHandler}
            />
          </div>
          <div className="formSubfield">
            <label htmlFor="address.suite" className="labelSubStyle">
              Suite
            </label>
            <input
              id="address.suite"
              value={newUser.address.suite}
              onChange={inputHandler}
            />
          </div>
          <div className="formSubfield">
            <label htmlFor="address.city" className="labelSubStyle">
              City
            </label>
            <input
              id="address.city"
              value={newUser.address.city}
              onChange={inputHandler}
            />
          </div>
          <div className="formSubfield">
            <label htmlFor="address.zipcode" className="labelSubStyle">
              Zipcode
            </label>
            <input
              id="address.zipcode"
              value={newUser.address.zipcode}
              onChange={inputHandler}
            />
          </div>
          <div className="formSubfield">
            <label htmlFor="address.geo.lat" className="labelSubStyle">
              Latitude
            </label>
            <input
              id="address.geo.lat"
              value={newUser.address.geo.lat}
              onChange={inputHandler}
            />
          </div>
          <div className="formSubfield">
            <label htmlFor="address.geo.lng" className="labelSubStyle">
              Longitude
            </label>
            <input
              id="address.geo.lng"
              value={newUser.address.geo.lng}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="formfield">
          <label htmlFor="phone" className="labelStyle">
            Phone
          </label>
          <input id="phone" value={newUser.phone} onChange={inputHandler} />
        </div>
        <div className="formfield">
          <label htmlFor="website" className="labelStyle">
            Website
          </label>
          <input id="website" value={newUser.website} onChange={inputHandler} />
        </div>
        <div className="formfield" style={{ flexDirection: "column" }}>
          <label className="headLabel">Company</label>
          <div className="formSubfield">
            <label htmlFor="company.name" className="labelSubStyle">
              Name
            </label>
            <input
              id="company.name"
              value={newUser.company.name}
              onChange={inputHandler}
            />
          </div>
          <div className="formSubfield">
            <label htmlFor="company.catchPhrase" className="labelSubStyle">
              Catch Phrase
            </label>
            <input
              id="company.catchPhrase"
              value={newUser.company.catchPhrase}
              onChange={inputHandler}
            />
          </div>
          <div className="formSubfield">
            <label htmlFor="company.bs" className="labelSubStyle">
              Business Strategy
            </label>
            <input
              id="company.bs"
              value={newUser.company.bs}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="submitButtonDiv">
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUserPage;
