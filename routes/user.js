const express = require('express')
const router = express.Router()
const UserModel = require('../models/user')
const bcrypt = require('bcrypt');


  router.post('/register', async (req, res) => {
    const {name,userName,email,phone,password} = req.body;

    if (!name || !userName || !email || !phone  || !password) {
      return res.status(400).send('All fields are required');
  }
  try {
    // بررسی وجود داده تکراری
    const existingUser = await UserModel.findOne({
        $or: [
            { email },
            { phone },
            { userName }
        ]
    });

    if (existingUser) {
        return res.status(400).send('Email, Phone, or Username already exists');
    }

        const user =  await UserModel.create({name,userName,email,phone,password});
        res.status(201).send({ message: 'User registered successfully' });
        
    } catch (err) {
      console.log(err);
        return res.status(500).send(err);
      
    }
});

router.post('/login', async (req, res) => {
  const { identifier, password } = req.body; 


  try {
      
      const user = await UserModel.findOne({
          $or: [
              { email: identifier },
              { phone: identifier },
              { userName: identifier }
          ]
      });

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }

      
      res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router