// test.js

const { scrapeVideos, scrapeDocuments } = require('./scraping'); 

(async () => {
    const udacityVideos = await scrapeVideos('https://www.udacity.com/');
    console.log('Udacity Videos:', udacityVideos);

    const udacityDocuments = await scrapeDocuments('https://www.udacity.com/');
    console.log('Udacity Documents:', udacityDocuments);
})();
