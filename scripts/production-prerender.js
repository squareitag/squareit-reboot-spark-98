import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/about',
  '/services',
  '/technologies', 
  '/contact',
  '/industries',
  '/careers',
  '/services/managed-infrastructure',
  '/services/managed-workplace',
  '/services/managed-servers',
  '/services/managed-network',
  '/services/managed-backup',
  '/services/m365-migration',
  '/services/azure-migration',
  '/services/sharepoint-teams-migration',
  '/services/modern-workplace',
  '/services/cloud-security',
  '/services/collaboration',
  '/services/teams-telephone',
  '/services/workshop',
  '/services/consulting',
  '/services/support',
  '/technologies/microsoft-365',
  '/technologies/microsoft-azure',
  '/technologies/avepoint-backup',
  '/technologies/cato-networks',
  '/technologies/printix',
  '/technologies/peoplefone',
  '/technologies/keeper',
  '/technologies/robopack',
  '/technologies/tenant-manager',
  '/industries/schools',
  '/industries/ngo',
  '/industries/finance',
  '/industries/trustees',
  '/industries/healthcare'
];

async function prerenderProduction() {
  console.log('🚀 Starting production pre-rendering...');
  
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox', 
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run',
      '--disable-extensions'
    ]
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  // Set user agent to mimic a real browser
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  const baseURL = 'https://dev-seo.sqsolutions.ch';
  const outputDir = path.join(process.cwd(), 'prerendered');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log(`🌐 Base URL: ${baseURL}`);
  console.log(`📁 Output directory: ${outputDir}`);
  
  // **AUTHENTICATE FIRST** - Login to bypass AuthGuard
  console.log('🔐 Authenticating with dev credentials...');
  await page.goto(`${baseURL}/`, { waitUntil: 'networkidle0', timeout: 30000 });
  
  // Check if we need to login (look for login form)
  let needsLogin = await page.$('#username');
  if (needsLogin) {
    console.log('📝 Filling login form...');
    await page.type('#username', 'dev');
    await page.type('#password', 'squareit2024');
    await page.click('button[type="submit"]');
    
    // Wait for authentication to complete and page to load
    await page.waitForFunction(() => {
      return !document.querySelector('#username'); // Login form disappears
    }, { timeout: 15000 });
    
    // Wait for main content to load
    await page.waitForSelector('main', { timeout: 10000 });
    console.log('✅ Authentication successful');
    
    // Additional wait to ensure session is established
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Set authentication cookie/session for all future requests
  await page.evaluate(() => {
    sessionStorage.setItem('staging_auth', 'authenticated');
  });
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const route of routes) {
    try {
      const url = `${baseURL}${route}`;
      console.log(`📄 Pre-rendering: ${route}`);
      console.log(`   🌐 Actual URL: ${url}`);
      
      // Ensure authentication is still valid before each route
      await page.evaluate(() => {
        if (!sessionStorage.getItem('staging_auth')) {
          sessionStorage.setItem('staging_auth', 'authenticated');
        }
      });
      
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 45000
      });
      
      // Debug: Check what URL was actually loaded
      const currentUrl = await page.url();
      console.log(`   🌐 Actual URL: ${currentUrl}`);
      
      // Debug: Check if the right component loaded
      const pageContent = await page.evaluate(() => {
        return {
          h1Text: document.querySelector('h1')?.textContent?.substring(0, 50),
          titleTag: document.querySelector('title')?.textContent,
          descMeta: document.querySelector('meta[name="description"]')?.getAttribute('content')?.substring(0, 50)
        };
      });
      console.log(`   🔍 H1: ${pageContent.h1Text}`);
      console.log(`   📝 Current Title: ${pageContent.titleTag}`);
      console.log(`   📄 Current Desc: ${pageContent.descMeta}`);
      
      // Wait for React to fully render
      await page.waitForSelector('#root > *', { timeout: 15000 });
      
      // Wait for meta tags to be set by React Helmet
      await page.waitForFunction(() => {
        const title = document.querySelector('title');
        const description = document.querySelector('meta[name="description"]');
        return title && title.textContent && 
               description && description.getAttribute('content') &&
               !title.textContent.includes('Vite') &&
               title.textContent.length > 10; // Ensure it's not just default title
      }, { timeout: 20000 });
      
      // Additional wait for React Helmet to fully update
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      const html = await page.content();
      
      // Verify content quality
      const title = await page.$eval('title', el => el.textContent);
      const description = await page.$eval('meta[name="description"]', el => el.getAttribute('content'));
      
      if (!title || title.includes('Vite') || !description) {
        throw new Error(`Invalid SEO content - Title: "${title}", Description: "${description}"`);
      }
      
      // Create directory structure
      const filePath = route === '/' ? '/index.html' : `${route}/index.html`;
      const fullPath = path.join(outputDir, filePath);
      const dir = path.dirname(fullPath);
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Optimize and clean HTML
      const optimizedHtml = html
        .replace(/data-react-helmet="true"/g, '')
        .replace(/data-rh="true"/g, '')
        .replace(/<script[^>]*vite[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<script[^>]*@vite[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/https:\/\/loving-warmth-production\.lovable\.app/g, '')
        .replace(/\s+/g, ' ')
        .replace(/> </g, '><')
        .trim();
      
      fs.writeFileSync(fullPath, optimizedHtml, 'utf8');
      
      console.log(`✅ Generated: ${filePath}`);
      console.log(`   📝 Title: ${title}`);
      console.log(`   📄 Description: ${description.substring(0, 100)}...`);
      
      successCount++;
      
    } catch (error) {
      console.error(`❌ Error pre-rendering ${route}:`, error.message);
      errorCount++;
    }
  }
  
  await browser.close();
  
  console.log('\n🎉 Pre-rendering completed!');
  console.log(`📊 Results: ${successCount} successful, ${errorCount} errors`);
  console.log(`📁 Files saved to: ${outputDir}`);
  
  if (successCount > 0) {
    console.log(`\n📋 Instructions for deployment:`);
    console.log(`1. Copy files from ${outputDir} to your web server`);
    console.log(`2. Configure server to serve these static files for SEO crawlers`);
    console.log(`3. Use User-Agent detection to serve static files to bots`);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  prerenderProduction().catch(console.error);
}

export { prerenderProduction, routes };