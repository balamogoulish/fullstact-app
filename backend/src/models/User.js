const { default: mongoose } = require("mongoose");

//mongoose로 스키마를 이용해 모델을 만듦
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        trim: true, //공백 제거
        unique: true //중복 제거
    },
    password: {
        type: String,
        minLength: 5
    },
    role: {
        type: String,
        default: 0 //입력하지 않을 경우, 0으로 설정
    },
    image: {
        type: String
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;