exports.loginResponseDto = {
    user: {
        _id: String,
        name: String,
        email: String,
        password: String,
        role: Object,
    },
    token: String,
} 