const express = require('express');
const router = express.Router();
const Memory = require('../models/Memory');

router.get('/', async (req, res) => {
  try {
    const memories = await Memory.find();
    res.json(memories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch memories' });
  }
});

module.exports = router;
