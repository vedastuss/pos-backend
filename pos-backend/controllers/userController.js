const createHttpError = require("http-errors");
const User = require("../models/userModel");

const register = async (req, res, next) => {
  try {

    const { name, phone, email, password, role } = req.body;

    if(!name || !phone || !email || !password || !role){
      const error = createHttpError(400, "All fields are required!");
      next(error);
    }
    const isUserPresent = await User.findOne({ email});

  } catch (error) {
    next(error);
  }
}


const login = async (req, res, next) => {

}

module.exports = { register, login }