const bcrypt = require('bcrypt');

const saltRounds = 10; 

const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Password hashing failed');
  }
};


const comparePasswords = async (password, hashedPassword) => {
  try {
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    return passwordMatch;
  } catch (error) {
    throw new Error('Password comparison failed');
  }
};

module.exports = { hashPassword, comparePasswords };
