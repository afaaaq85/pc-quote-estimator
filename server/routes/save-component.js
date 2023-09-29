const express = require('express');
const router = express.Router();
const NewComponent = require('../models/NewComponent');

router.post('/save-newcomponent', async (req, res) => {
  try {
    const { componentCategory, componentName, componentDate, componentCost } = req.body;

    const newComponent = new NewComponent({
      componentCategory,
      componentName,
      componentDate,
      componentCost,
    });

    await newComponent.save();
    console.log(newComponent);
    
    res.status(201).json({ message: 'Component saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving component' });
    console.log(newComponent)
  }
});

module.exports = router;
