const mongoose = require('mongoose')
//  链接mongo,并且使用jobchat这个集合
const DB_URL = 'mongodb://localhost:27017/jobchats'
mongoose.connect(DB_URL)

mongoose
    .connect(DB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const models = {
    user: {
        'user': {type: String, require: true},
        'pwd': {type: String, require: true},
        'type': {type: String, require: true},
        //头像
        'avatar': {type: String},
        //个人简介或者职位简介
        'desc': {type: String},
        //职位名
        'title': {type: String},
        //如果你是boss，还有两个字段
        'company': {type: String},
        'money': {type: String}

    },
    chat: {

    }
}

for (let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name){
        return mongoose.model(name)
    }
}