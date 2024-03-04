import User from "../models/userModel.js";
//create user method
export const createUser = async (req, res) => {
  try {
    const { phone_number, priority } = req.body;

    const user =await new User({ phone_number, priority }).save();
    //  user.;
    res.status(200).json({ message: "User successfully Created", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//get all users method
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error- Internal Server Error" });
  }
};
