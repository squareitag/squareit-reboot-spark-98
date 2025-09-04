const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/about',
  '/services',
  '/technologies',
  '/contact',
  '/services/managed-services',
  '/services/migration', 
  '/services/consulting',
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
  '/technologies/microsoft-365',
  '/technologies/microsoft-azure',
  '/technologies/avepoint-backup',
  '/technologies/cato-networks',
  '/technologies/printix',
  '/technologies/peoplefone',
  '/technologies/keeper',
  '/technologies/robopack',
  '/technologies/tenant-manager'
];

async function prerender() {
  console.log('🚀 Starting pre-rendering process...');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  const page = await browser.newPage();
  
  // Set viewport and disable authentication for Lovable
  await page.setViewport({ width: 1920, height: 1080 });
  
  const baseURL = process.env.VITE_APP_URL || 'https://loving-warmth-production.lovable.app';
  console.log(`🌐 Using base URL: ${baseURL}`);
  
  for (const route of routes) {
    try {
      console.log(`📄 Pre-rendering: ${route}`);
      
      await page.goto(`${baseURL}${route}`, { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });
      
      // Wait for React to render and SEO tags to be set
      await page.waitForSelector('#root > *', { timeout: 10000 });
      await page.waitForFunction(() => {
        return document.querySelector('title') && document.querySelector('meta[name="description"]');
      }, { timeout: 5000 });
      
      // Wait a bit more for dynamic content
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const html = await page.content();
      
      // Create directory structure
      const filePath = route === '/' ? '/index.html' : `${route}/index.html`;
      const fullPath = path.join(process.cwd(), 'dist', filePath);
      const dir = path.dirname(fullPath);
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Optimize HTML for production
      const optimizedHtml = html
        .replace(/<script.*?vite.*?<\/script>/gi, '')
        .replace(/<script.*?@vite.*?<\/script>/gi, '')
        .replace(/https:\/\/loving-warmth-production\.lovable\.app/g, '')
        .replace(/\s+/g, ' ') // Minify whitespace
        .trim();
      
      fs.writeFileSync(fullPath, optimizedHtml);
      console.log(`✅ Generated: ${fullPath}`);
      
    } catch (error) {
      console.error(`❌ Error pre-rendering ${route}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('🎉 Pre-rendering completed!');
  console.log(`📊 Generated ${routes.length} static HTML files`);
}

// Run if called directly
if (require.main === module) {
  prerender().catch(console.error);
}

module.exports = { prerender, routes };