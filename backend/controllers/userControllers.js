import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//  @desc   login a user
//  @route  POST api/users/login
//  @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("Invalid Email or Password");
  }
});

//  @desc   get the profile of user
//  @route  GET/POST api/users/profile
//  @access private
const getUserProfile = asyncHandler(async (req, res) => {
  // console.log(req);
  const user = await User.findById(req.user._id);
  if (user) {
    res.send({
      id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//  @desc   register a new  user
//  @route  POST api/users
//  @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { username, name, email, password } = req.body;
  const userEmailExists = await User.findOne({ email: email });
  const userNameExists = await User.findOne({ username: username });

  if (userEmailExists) {
    res.status(400);
    throw new Error("A user already exists with this E-mail");
  }
  if (userNameExists) {
    res.status(400);
    throw new Error("A user already exists with this username");
  }

  const user = await User.create({
    name,
    username,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      id: user._id,
      username: username,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
    res.send();
  } else {
    res.status(400);
    throw new Error("Invalid Data");
  }
});
export { authUser, getUserProfile, registerUser };
