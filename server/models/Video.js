const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = mongoose.Schema({
    writer : {
        type: Schema.Types.ObjectId, //User.js - userSchema의 모든 정보를 가져온다
        ref : 'User'
    },
    title : {
        type : String,
        maxlength : 50
    },
    description : {
        type : String
    },
    privacy : {
        type : Number
    },
    filePath : {
        type : String
    },
    category : {
        type : String
    },
    views : {
        type : Number,
        default : 0
    },
    duration : {
        type : String
    },
    thumbnail : {
        type : String
    }
}, { timestamps : true }) // true -> 생성날짜와 업데이트 날짜 저장

const Video = mongoose.model('Video', videoSchema);

module.exports = { Video }