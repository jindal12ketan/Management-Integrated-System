const userDto = (user, role) => {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: role,
  };
};
module.exports = userDto;
