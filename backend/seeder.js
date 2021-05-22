import colors from "colors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import users from "./data/userData.js";
import User from "./models/userModel.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);

    console.log("Data inserted successfully".brightGreen.inverse);
    process.exit(0);
  } catch (error) {
    console.log(`Error encountered: ${error}`.brightRed.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log("All data deleted successfully".brightGreen.inverse);
    process.exit(0);
  } catch (error) {
    console.log(`Error encountered: ${error}`.brightRed.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
