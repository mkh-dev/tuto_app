// routes/apiRoutes.js

const express = require('express');
const scrapingController = require('../controllers/scrapingController');

const router = express.Router();

router.get('/videos', scrapingController.scrapeVideos);
router.get('/documents', scrapingController.scrapeDocuments);

module.exports = router;
