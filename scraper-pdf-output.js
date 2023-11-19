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

// Configure the pdfDirectory variable to specify the directory where the PDFs will be saved.
const pdfDirectory = './zimeras-pdfs/';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await fs.mkdir(pdfDirectory, { recursive: true });

  for (const pageInfo of websiteURLs) {
    await page.goto(pageInfo.url, { waitUntil: 'load' }); // Wait for full page load

    // Scroll the page to trigger lazy-loaded content (adjust as needed)
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    const timestamp = new Date().getTime();
    const pdfFileName = `${pageInfo.name}-${timestamp}.pdf`;

    await page.pdf({
      path: pdfDirectory + pdfFileName,
      format: 'A4', // You can specify the paper format (e.g., 'Letter', 'A4')
    });

    console.log(`PDF saved as ${pdfFileName}`);
  }

  await browser.close();
})();
