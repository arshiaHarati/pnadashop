const express = require('express')
const router = express.Router()

const UserModel = require('../models/user')

router.post('/register', async (req, res) => {
   const {name,userName,email,phone,password}  = req.body;
   await UserModel.create({name,userName,email,phone,password})
   res.send('resid')
  })


module.exports = router