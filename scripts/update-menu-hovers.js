const fs = require('fs');

// Read the header file
const filePath = 'src/components/ModernHeader.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all the light hover effects with dark blue
content = content.replace(
  /hover:border-primary\/30 hover:bg-gradient-to-br hover:from-primary\/5 hover:to-primary\/10/g,
  'hover:border-secondary-accent hover:bg-secondary-accent'
);

// Update icon backgrounds for hover
content = content.replace(
  /group-hover:bg-primary\/20/g,
  'group-hover:bg-primary/30'
);

// Update icon colors for hover
content = content.replace(
  /text-primary" \/>/g,
  'text-primary group-hover:text-white" />'
);

// Write the updated content back
fs.writeFileSync(filePath, content);

console.log('Updated menu hover effects to dark blue!');