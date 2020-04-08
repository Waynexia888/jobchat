const express = require('express')
const mongoose = require('mongoose')
//  链接mongo,并且使用jobchat这个集合
const DB_URL = 'mongodb://localhost:27017/jobchat'
mongoose.connect(DB_URL)

mongoose
    .connect(DB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

// 类似于mysql的表， mongo里有文档，字段的概念
// 文档名叫user，文档模型Schema
const User = mongoose.model('user', new mongoose.Schema({
    user:{type:String, require:true},
    age:{type:Number, require:true}
}))

// 新增数据
// User.create({
//     user: 'xiaohua',
//     age: 12
// }, function (err, doc) {
//     if (!err) {
//         console.log(doc)
//     } else {
//         connsole.log(err)
//     }
// })

// 删除 age：18 所有数据
// User.remove({age:12}, function(err, doc){
//     console.log(doc)
// })

//更新user是xiaoming里， 把age改成26
// User.update({'user':'xiaoming'}, {'$set':{age:26}}, function(err, doc){
//     console.log(doc)
// })

//新建app
const app = express()

// 获取根目录，req: 请求, res: 响应
app.get('/', function (req, res) {
    res.send('<h1>hello world</h1>')
})

app.get('/data', function (req, res) {
    //查找数据， 查找所有的{}数据
    User.findOne({'user': 'xiaoming'}, function (err, doc) {
        res.json(doc)
    })
})

app.listen(9093, function () {
    console.log('Node app start at port 9093')
})


