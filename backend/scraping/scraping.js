// scraping/scraping.js

const request = require('request-promise');
const cheerio = require('cheerio');

// Fonction pour extraire les vidéos
async function scrapeVideos(url) {
    try {
        console.log('Chargement de la page...');
        const html = await request(url);
        console.log('Page chargée.');
        const $ = cheerio.load(html);
        const videos = [];
        console.log('Cheerio chargé.');

        // Insérez ici la logique pour extraire les vidéos du site
        if (url === 'https://www.udacity.com/') {
            console.log('Extraction des vidéos...');
            // Utilisez les méthodes de Cheerio pour sélectionner et extraire les données
            $('.video-link').each((index, element) => {
                console.log('Traitement de la vidéo numéro', index + 1);
                const videoTitle = $(element).find('.title').text();
                const videoURL = $(element).attr('href');
                videos.push({ title: videoTitle, url: videoURL });
            });
            console.log('Extraction des vidéos terminée.');
        } 

        return videos;
    } catch (error) {
        console.error('Erreur lors de l\'extraction des vidéos:', error);
        return [];
    }
}

// Fonction pour extraire les documents
async function scrapeDocuments(url) {
    try {
        const html = await request(url);
        const $ = cheerio.load(html);
        const documents = [];

        // Insérez ici la logique pour extraire les documents du site
        if (url === 'https://www.udacity.com/') {
            // Utilisez les méthodes de Cheerio pour sélectionner et extraire les données
            $('.document-link').each((index, element) => {
                const documentTitle = $(element).find('.title').text();
                const documentURL = $(element).attr('href');
                documents.push({ title: documentTitle, url: documentURL });
            });
        } 

        return documents;
    } catch (error) {
        console.error('Erreur lors de l\'extraction des documents:', error);
        return [];
    }
}

module.exports = {
    scrapeVideos,
    scrapeDocuments
};
