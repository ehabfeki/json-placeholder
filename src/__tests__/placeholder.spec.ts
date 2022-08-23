import request from 'supertest';
const puppeteer = require('puppeteer');

describe('Placeholder', () => {
  it('GET: /comments', async () => {
    const app = 'https://jsonplaceholder.typicode.com';

    const commentsEndpoint = '/comments';

    const apiCall = await (await request(app).get(commentsEndpoint)).text;

    const browser = await puppeteer.launch({
      headless: true,
      // executablePath: '/usr/bin/google-chrome',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        // '--single-process',
      ],
    });

    const page = await browser.newPage();

    await page.goto(app + commentsEndpoint);

    await page.waitForSelector('body pre');

    const uiCall = await page.$eval(
      'body pre',
      (e: {innerText: never}) => e.innerText
    );

    expect(apiCall).toEqual(uiCall);
  });
});
