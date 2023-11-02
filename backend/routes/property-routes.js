const express = require('express');

const {
  getProperties,
  getPropertiesPages,
} = require('../controllers/property-controller');

const router = express.Router();

router.get('/', getProperties);

router.get('/pages', getPropertiesPages);

module.exports = router;
