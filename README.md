# Puppeteer Screenshot Capture Script

This script uses Puppeteer to capture screenshots of web pages and save them to a specified directory. It is designed to help automate the process of taking screenshots of multiple web pages.

## Usage

1. Install the required Node.js packages by running the following command in the script's directory:

   ```bash
   npm install


## Customization

You can customize the script to perform additional actions, such as clicking buttons or interacting with elements, before taking screenshots.

Adjust the scrolling behavior or other page interactions in the page.evaluate() block as needed.

Modify the waitUntil option in the page.goto() method to match your specific page loading behavior (e.g., 'domcontentloaded', 'networkidle0', or 'load').

You can also modify the output of Puppeteer to make PDFs. I've included that as a seperate file for ease.

## License

**DISCLAIMER:** This software is a result of combining various sources, following documentation, tutorials, and other resources until it works for its intended purpose. It is not the original work of the author or copyright holder and is provided "as is," without warranty of any kind. The authors or copyright holders are not liable for any claim, damages, or other liability arising from the use of this software.

## Acknowledgments

Puppeteer - Headless Chrome Node.js API
Node.js - JavaScript runtime
npm - Node package manager

