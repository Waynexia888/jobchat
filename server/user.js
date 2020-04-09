const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', (req, res) => {
    User.find({}, (err, doc) => {
        return res.json(doc)
    })
})

Router.post('/register', (req, res) => {
    console.log(req.body.data)
    const { user, pwd, type } = req.body.data
    User.findOne({user: user}, (err, doc) => {
        if (doc) {
            return res.json({
                code: 1,
                msg: 'Username already exists'
            })
        }
        User.create({user, pwd, type}, (err, doc) => {
            if (err) {
                return res.json({code: 1, msg: 'Backend Error'})
            }
            return res.json({code: 0})
        })
    })
})
Router.get('/info', (req, res) => {
    //根据用户有没有cookie，来返回不同的信息
    return res.json({code: 1})
})


module.exports = Router 