const express = require('express'),
    router = express.Router(),
    Person = requre('../models/Person');
    
router.get("/", async (req, res) => {
    try {
      const persons = await Person.find();
      res.json(persons);
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;