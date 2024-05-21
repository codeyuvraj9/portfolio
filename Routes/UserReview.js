const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const { body, validationResult } = require('express-validator');

// POST a new review
router.post('/addreview', [
  body('firstName', 'First Name must be atleast 2 characters').isLength({ min: 2 }),
  body('lastName', 'Last Name must be atleast 2 characters').isLength({ min: 2 }),
  body('message', 'Message must be atleast 5 characters').isLength({ min: 5 }),
  body('email', 'Enter a valid password').isEmail()
], async (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { firstName, lastName, email, message } = req.body;

    const review = new Review({ firstName, lastName, email, message });
    const savedReview = await review.save();

    res.json(savedReview);
    res.status(201);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//Get all Reviews
router.get('/getreviews', async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.json(reviews);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router;