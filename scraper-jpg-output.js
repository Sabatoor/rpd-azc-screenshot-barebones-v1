// Run the script using the following command:
// node your-script.js

const puppeteer = require('puppeteer');
const fs = require('fs').promises;

const websiteURLs = [
  {
    url: 'https://zimeras.ca',
    name: 'zimeras-home',
  },
  {
    url: 'https://example.com',
    name: 'example-home',
  },
  // Add more pages as needed
];

// Configure the screenshotDirectory variable to specify the directory where the
// screenshots will be saved.
const screenshotDirectory = './zimeras/';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await fs.mkdir(screenshotDirectory, { recursive: true });

  for (const pageInfo of websiteURLs) {
    await page.goto(pageInfo.url, { waitUntil: 'load' }); // Wait for full page load

    // Scroll the page to trigger lazy-loaded images (adjust as needed)
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    const timestamp = new Date().getTime();
    const screenshotFileName = `${pageInfo.name}-${timestamp}.png`;

    await page.screenshot({
      path: screenshotDirectory + screenshotFileName,
      fullPage: true,
    });

    console.log(`Screenshot saved as ${screenshotFileName}`);
  }

  await browser.close();
})();
