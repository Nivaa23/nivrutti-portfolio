const fs = require('fs');
const path = require('path');

const ctaHtml = `
    <!-- Footer CTA Section -->
    <section id="contact" class="footer-cta container">
      <div class="reveal-up">
        <h2>Let’s create something amazing together</h2>
        <p class="body-large">I’m currently available for freelance projects and open to discussing new opportunities.
          Feel free to reach out if you want to collaborate!</p>
        <a href="https://www.linkedin.com/in/nivrutti-dandekar-71638768/" class="btn btn-primary" target="_blank">
          Say Hello <i data-lucide="message-circle"></i>
        </a>
      </div>
    </section>
`;

const footerHtml = `
  <footer class="container" style="padding: 40px 0; border-top: 1px solid var(--border-color); text-align: center;">
    <p class="caption" style="color: var(--text-secondary);">&copy; 2026 Nivrutti Dandekar. Designed with precision and
      purposeful intent.</p>
  </footer>
`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // 1. Remove existing footer if present
  content = content.replace(/<footer[\s\S]*?<\/footer>/, '');
  
  // 2. Insert CTA before </main>
  if (content.includes('</main>')) {
    // Check if it already has footer-cta to avoid duplicates
    if (!content.includes('class="footer-cta')) {
      content = content.replace('</main>', ctaHtml + '  </main>');
    }
  }
  
  // 3. Insert Footer after </main>
  if (content.includes('  </main>')) {
     content = content.replace('  </main>', '  </main>\n' + footerHtml);
  } else if (content.includes('</main>')) {
     content = content.replace('</main>', '</main>\n' + footerHtml);
  }
  
  // Cleanup extra newlines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  fs.writeFileSync(f, content);
});

console.log(`Updated ${files.length} files with CTA and Footer.`);
