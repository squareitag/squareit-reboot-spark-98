const puppeteer = require('puppeteer');

async function testPrerender() {
  console.log('🧪 Testing pre-rendering for homepage...');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  const url = 'https://loving-warmth-production.lovable.app/';
  console.log(`🌐 Testing URL: ${url}`);
  
  try {
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for React to render
    await page.waitForSelector('#root > *', { timeout: 10000 });
    
    // Check if meta tags are present
    const title = await page.$eval('title', el => el.textContent);
    const description = await page.$eval('meta[name="description"]', el => el.getAttribute('content'));
    
    console.log(`✅ Title: ${title}`);
    console.log(`✅ Description: ${description}`);
    
    // Get a snippet of the HTML
    const html = await page.content();
    console.log(`📄 HTML length: ${html.length} characters`);
    console.log(`🔍 Contains meta description: ${html.includes('name="description"')}`);
    
  } catch (error) {
    console.error(`❌ Error testing pre-rendering:`, error.message);
  }
  
  await browser.close();
}

testPrerender().catch(console.error);