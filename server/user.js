const express = require('express')
const Router = express.Router()

Router.get('/info', (req, res) => {
    //根据用户有没有cookie，来返回不同的信息
    return res.json({code: 0})
})

module.exports = Router 