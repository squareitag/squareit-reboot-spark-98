import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to extract SEO data from a file
function extractSEOData(filePath, fileContent) {
  const lines = fileContent.split('\n');
  let seoData = {
    file: filePath,
    url: '',
    title: '',
    description: '',
    keywords: '',
    canonical: ''
  };
  
  // Extract URL from file path
  if (filePath.includes('/pages/')) {
    let urlPath = filePath.replace(/.*\/pages\//, '').replace(/Page\.tsx$/, '').replace(/\.tsx$/, '');
    if (urlPath === 'Home') urlPath = '';
    if (urlPath.includes('/')) {
      urlPath = '/' + urlPath.replace(/\//g, '/');
    } else if (urlPath) {
      urlPath = '/' + urlPath.toLowerCase();
    } else {
      urlPath = '/';
    }
    seoData.url = urlPath;
  }
  
  // Look for SEOHead component
  let inSEOHead = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.includes('<SEOHead')) {
      inSEOHead = true;
    }
    
    if (inSEOHead) {
      // Extract title
      if (line.includes('title=')) {
        const titleMatch = line.match(/title=["'`]([^"'`]+)["'`]/);
        if (titleMatch) seoData.title = titleMatch[1];
      }
      
      // Extract description
      if (line.includes('description=')) {
        const descMatch = line.match(/description=["'`]([^"'`]+)["'`]/);
        if (descMatch) seoData.description = descMatch[1];
      }
      
      // Extract keywords
      if (line.includes('keywords=')) {
        const keywordsMatch = line.match(/keywords=["'`]([^"'`]+)["'`]/);
        if (keywordsMatch) seoData.keywords = keywordsMatch[1];
      }
      
      // Extract canonical
      if (line.includes('canonical=')) {
        const canonicalMatch = line.match(/canonical=["'`]([^"'`]+)["'`]/);
        if (canonicalMatch) seoData.canonical = canonicalMatch[1];
      }
      
      if (line.includes('/>') || line.includes('</SEOHead>')) {
        inSEOHead = false;
        break;
      }
    }
  }
  
  return seoData;
}

// Main function to scan all pages
async function generateSEOReport() {
  console.log('🔍 Scanning all pages for SEO data...');
  
  const pagesDir = path.join(process.cwd(), 'src/pages');
  const allSEOData = [];
  
  // Recursive function to scan directories
  function scanDirectory(dir, baseDir = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const relativePath = path.join(baseDir, item);
      
      if (fs.statSync(fullPath).isDirectory()) {
        scanDirectory(fullPath, relativePath);
      } else if (item.endsWith('.tsx')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('SEOHead')) {
          const seoData = extractSEOData(relativePath, content);
          allSEOData.push(seoData);
        }
      }
    }
  }
  
  scanDirectory(pagesDir);
  
  // Sort by URL
  allSEOData.sort((a, b) => a.url.localeCompare(b.url));
  
  // Generate CSV content
  const csvHeader = 'Nr,URL,Datei,SEO Titel,Meta Description,Keywords,Canonical URL\n';
  const csvRows = allSEOData.map((data, index) => {
    const escapeCsv = (str) => `"${str.replace(/"/g, '""')}"`;
    return [
      index + 1,
      data.url,
      data.file,
      escapeCsv(data.title),
      escapeCsv(data.description),
      escapeCsv(data.keywords),
      escapeCsv(data.canonical)
    ].join(',');
  });
  
  const csvContent = csvHeader + csvRows.join('\n');
  
  // Save CSV file
  const outputPath = path.join(process.cwd(), 'seo-report.csv');
  fs.writeFileSync(outputPath, csvContent, 'utf8');
  
  console.log(`📊 SEO Report generated!`);
  console.log(`📄 Total pages: ${allSEOData.length}`);
  console.log(`💾 Saved to: ${outputPath}`);
  
  // Also log summary
  console.log('\n📋 Summary:');
  allSEOData.forEach((data, index) => {
    console.log(`${index + 1}. ${data.url} - ${data.title}`);
  });
  
  return allSEOData;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSEOReport().catch(console.error);
}

export { generateSEOReport };