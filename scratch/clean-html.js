const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // Handle both with and without the comment
  content = content.replace(/<!-- Custom Cursor -->\s*<div class="custom-cursor"><\/div>/g, '');
  content = content.replace(/<div class="custom-cursor"><\/div>/g, '');
  fs.writeFileSync(f, content);
});
console.log(`Cleaned ${files.length} files`);
