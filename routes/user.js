const express = require('express')
const router = express.Router()

const UserModel = require('../models/user')


  router.post('/register', async (req, res) => {
    const {name,userName,email,phone,password} = req.body;

    if (!name || !userName || !email || !phone  || !password) {
      return res.status(400).send('All fields are required');
  }
    try {
        const user =  await UserModel.create({name,userName,email,phone,password});
        res.status(201).send({ message: 'User registered successfully' });
    } catch (err) {
      console.log(err);
        return res.status(500).send(err);
      
    }
});


module.exports = router