const express = require('express')
const userRouter = require('./user')
//新建app
const app = express()
app.use('/user', userRouter)

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


app.listen(9093, function () {
    console.log('Node app start at port 9093')
})


