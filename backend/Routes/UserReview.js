const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST a new review
router.post('/reviews', async (req, res) => {
  try {
    await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        message: req.body.message
    })
    res.status(201).json({ success: true, message: 'Review added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;