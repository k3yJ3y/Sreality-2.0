const puppeteer = require('puppeteer');
const client = require('./db');

async function createTable() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS properties (
        propertyid serial PRIMARY KEY,
        title TEXT NOT NULL,
        image_url TEXT NOT NULL
      );
    `;
    await client.query(createTableQuery);
    console.log('Table created successfully');
  } catch (error) {
    console.error('Error creating table:', error);
  }
}

async function truncateTable() {
  try {
    const truncateQuery = 'TRUNCATE properties';
    await client.query(truncateQuery);
    console.log('Table truncated successfully');
  } catch (error) {
    console.error('Error truncating table:', error);
  }
}

async function scrapeSreality() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage();
  await page.goto('https://www.sreality.cz/en/search/for-sale/apartments');

  // await page.screenshot({ path: 'example.png', fullPage: true });
  // await page.pdf({ path: 'example.pdf', format: 'A4' });

  // const html = await page.content();

  // const title = await page.evaluate(()=> document.title)

  // const text = await page. evaluate(() => document.body.innerText);

  // const links = await page.evaluate(() => Array.from(document.querySelectorAll('a'), (e) => e.href))

  // const apartments = await page.evaluate(() => Array.from(document.querySelectorAll('.dir-property-list .property'), e => ({
  //   title: e.querySelector('h2 span.name').innerText,
  //   img: e.querySelector('img').innerHTML
  // })))
  // console.log(apartments)

  const data = [];

  while (data.length < 500) {
    await page.waitForSelector('.property');

    const propertyElements = await page.$$('.property');
    for (const propertyElement of propertyElements) {
      const title = await propertyElement.$eval('.name', (titleElement) =>
        titleElement.textContent.trim()
      );
      const imageUrl = await propertyElement.$eval(
        'img',
        (imgElement) => imgElement.src
      );

      data.push({ title, imageUrl });
    }

    const nextPageButton = await page.$('a.paging-next');
    if (nextPageButton) {
      await nextPageButton.click();
      await page.waitForSelector('.property', { timeout: 5000 });
    } else {
      break;
    }
  }

  try {
    await client.connect();

    await createTable();
    await truncateTable();

    for (const property of data) {
      const insertQuery = `
        INSERT INTO properties (title, image_url) VALUES ($1, $2)
      `;
      await client.query(insertQuery, [property.title, property.imageUrl]);
    }
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error scraping and saving data:', error);
  } finally {
    await client.end();
    await browser.close();
  }
}

scrapeSreality()
  .then(() => {
    console.log('Scraping and saving completed.');
  })
  .catch((error) => {
    console.error('Scraping and saving error:', error);
  });
