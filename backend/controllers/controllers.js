const user = require("../models/user.js");

const HomePage = async (req, res) => {
  return res.status(201).json({ message: "This is homepage" });
};

const getAllUsers = async (req, res) => {
  try {
    const userlist = await user.find({});
    console.log(userlist);

    return res.status(201).json({ msg: userlist });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ err: err });
  }
};

const removeUser = async (req, res) => {
  try {
    const id = Object.values(req.body)[0];
    const result = await user.deleteOne({ _id: id });

    if (result.deletedCount === 1) {
      return res.status(201).json({ msg: "User deleted successfully" });
    } else {
      return res.status(404).json({ msg: "User not found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const addUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, username, email, address, phone, website, company } =
      req.body;

    const newUser = new user({
      name: name,
      username: username,
      email: email,
      address: {
        street: address.street,
        suite: address.suite,
        city: address.city,
        zipcode: address.zipcode,
        geo: {
          lat: address.geo.lat,
          lng: address.geo.lng,
        },
      },
      phone: phone,
      website: website,
      company: {
        name: company.name,
        catchPhrase: company.catchPhrase,
        bs: company.bs,
      },
    });

    await newUser.save();
    console.log(newUser);

    return res.status(201).json({ user: newUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { HomePage, getAllUsers, removeUser, addUser };
