const express = require("../node_modules/express");
const router = express.Router();
const Person = require("../../models/Person");

router.get("/", async (req, res) => {
    try {
      const persons = await Person.find();
      res.json(persons);
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;