const LoginResponseDto = (user, token, role, authorities) => {
    return {
      user: {
        _id: user._id,
        name: user.user.name,
        email: user.user.email,
        role: role,
      },
      authorities: authorities,
      token: token,
    };
  };
  
  module.exports = LoginResponseDto;
  