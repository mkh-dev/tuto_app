// controllers/scrapingController.js

const scrapingService = require('../services/scrapingService');

async function scrapeVideos(req, res) {
    const url = req.query.url;
    const videos = await scrapingService.getVideosFromUrl(url);
    // Traitez et renvoyez les vidéos dans la réponse
}

async function scrapeDocuments(req, res) {
    const url = req.query.url;
    const documents = await scrapingService.getDocumentsFromUrl(url);
    // Traitez et renvoyez les documents dans la réponse
}

module.exports = {
    scrapeVideos,
    scrapeDocuments
};
