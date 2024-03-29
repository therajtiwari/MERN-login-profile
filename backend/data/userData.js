import bcrypt from "bcryptjs";

const users = [
  {
    name: "Raj Tiwari",
    username: "raj",
    email: "therajtiwari@gmail.com",
    password: bcrypt.hashSync("helloworld", 10),
    isAdmin: true,
    address: "Thane, Maharashtra,India",
  },
  {
    name: "Alex Jackson",
    username: "alex",
    email: "alexjackson@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    address: "Nagpur, Maharashtra,India",
  },
  {
    name: "Alan Rickman",
    username: "alan",
    email: "alanrickman@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    phoneNo: "+918743453423",
    address: "Mumbai, Maharashtra,India",
  },
  {
    name: "Marshall Mathers",
    username: "marshall",
    email: "marshall@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    address: "Pune, Maharashtra,India",
  },
];

export default users;
