const createError = require('http-errors');
const User = require('../../models/User');
const authFunctions = require('../../helpers/authFunctions');

module.exports = {
  login: async (req, res, next) => {
    const {
      email,
      password
    } = req.body;
    try {
      const userExist = await User.findUserByEmail(email);
      if (userExist) {
        const isMatch = await authFunctions.comparePassword(password, userExist.password);
        if (isMatch) {
          const token = await authFunctions.generateToken(userExist);
          return res.status(200).json({
            status: 'success',
            token,
            authUser: userExist
          });
        }
      }
    }
    catch (error) {
      console.log(error);
    }
    return null;
  }
};
