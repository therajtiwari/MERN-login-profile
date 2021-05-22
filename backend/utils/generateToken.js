import jwt from "jsonwebtoken";

const generateToken = (id) => {
  var token = jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "300000",
  });
  return token;
};

export default generateToken;
