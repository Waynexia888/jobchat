const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const _filter = {'pwd': 0, '__v': 0}

Router.get('/list', (req, res) => {
    // User.remove({}, function(err, doc){})
    User.find({}, (err, doc) => {
        return res.json(doc)
    })
})

Router.post('/update', (req, res) => {
    const userid = req.cookies.userid
    if (!userid) {
        return res.json({code:1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid, body, (err, doc) => {
        const data = Object.assign({}, {
            user: doc.user,
            type: doc.type
        }, body)
        return res.json({code:0, data})
    })
})

Router.post('/login', (req, res) => {
    const {user, pwd} = req.body
    User.findOne({user, pwd: md5Pwd(pwd)}, _filter, (err, doc) => {
        if (!doc) {
            return res.json({
                code: 1,
                msg: 'username or password is incorrect'
            })
        }
        res.cookie('userid', doc._id)
        return res.json({code: 0, data: doc})
    })
})


Router.post('/register', (req, res) => {
    // console.log(req.body)
    const {user, pwd, type} = req.body
    User.findOne({user}, (err, doc) => {
        if (doc) {
            return res.json({
                code: 1,
                msg: 'Username already exists'
            })
        }
        const userModel = new User({user, type, pwd: md5Pwd(pwd)})
        userModel.save((err, doc) => {
            if (err) {
                return res.json({code: 1, msg: 'Backend Error'})
            }
            const {user, type, _id} = doc
            res.cookie('userid', _id)
            return res.json({code: 0, data: {user, type, _id}})
        })
    })
})
Router.get('/info', (req, res) => {
    const {userid} = req.cookies
    //根据用户有没有cookie，来返回不同的信息
    if (!userid){
        return res.json({code: 1})
    }
    User.findOne({_id: userid}, _filter, (err, doc) => {
        if (err){
            return res.json({code: 1, msg: 'Backend Error'})
        }
        if (doc){
            return res.json({code: 0, data: doc})
        }
    })
    
    
})

function md5Pwd(pwd) {
    const salt = 'imooc_is_good_3957x8yza6!@#IUHJH~~'
    return utils.md5(utils.md5(pwd + salt))
}


module.exports = Router 