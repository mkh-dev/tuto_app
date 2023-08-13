// services/scrapingService.js

const scrapingModule = require('../scraping/scraping');

async function getVideosFromUrl(url) {
    return scrapingModule.scrapeVideos(url);
}

async function getDocumentsFromUrl(url) {
    return scrapingModule.scrapeDocuments(url);
}

module.exports = {
    getVideosFromUrl,
    getDocumentsFromUrl
};
