const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

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
  
  const baseURL = 'https://loving-warmth-production.lovable.app';
  const outputDir = path.join(process.cwd(), 'prerendered');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log(`🌐 Base URL: ${baseURL}`);
  console.log(`📁 Output directory: ${outputDir}`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const route of routes) {
    try {
      const url = `${baseURL}${route}`;
      console.log(`📄 Pre-rendering: ${route}`);
      
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 45000 
      });
      
      // Wait for React to fully render
      await page.waitForSelector('#root > *', { timeout: 15000 });
      
      // Wait for meta tags to be set by React Helmet
      await page.waitForFunction(() => {
        const title = document.querySelector('title');
        const description = document.querySelector('meta[name="description"]');
        return title && title.textContent && 
               description && description.getAttribute('content');
      }, { timeout: 10000 });
      
      // Additional wait for dynamic content
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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
  
  // Create index file listing all routes
  const indexContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Pre-rendered Pages - Square IT AG</title>
  <meta charset="utf-8">
</head>
<body>
  <h1>Pre-rendered Pages</h1>
  <p>Generated: ${new Date().toISOString()}</p>
  <p>Success: ${successCount} | Errors: ${errorCount}</p>
  <ul>
    ${routes.map(route => `<li><a href=".${route === '/' ? '/index.html' : route + '/index.html'}">${route}</a></li>`).join('\n    ')}
  </ul>
</body>
</html>
  `.trim();
  
  fs.writeFileSync(path.join(outputDir, 'index.html'), indexContent);
  
  if (successCount > 0) {
    console.log(`\n📋 Instructions for deployment:`);
    console.log(`1. Copy files from ${outputDir} to your web server`);
    console.log(`2. Configure server to serve these static files for SEO crawlers`);
    console.log(`3. Use User-Agent detection to serve static files to bots`);
  }
}

// Run if called directly
if (require.main === module) {
  prerenderProduction().catch(console.error);
}

module.exports = { prerenderProduction, routes };