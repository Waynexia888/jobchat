const express = require('express')
//新建app
const app = express()

// 获取根目录，req: 请求, res: 响应
app.get('/', function (req, res) {
    res.send('<h1>hello world</h1>')
})

app.get('/data', function (req, res) {
    res.json({
        name: 'imooc React App',
        type: 'IT'
    })
})

app.listen(9093, function () {
    console.log('Node app start at port 9093')
})