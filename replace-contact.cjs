const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const findAndReplace = (dir, replacements) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findAndReplace(fullPath, replacements);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      for (const { regex, replacement } of replacements) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          modified = true;
        }
      }
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
};

const replacements = [
  // Phone replacements
  { regex: /\+4917612345678/g, replacement: '+491791700661' },
  { regex: /\+49 176 1234 5678/g, replacement: '+49 179 1700661' },
  { regex: /\+49 176 123 456 78/g, replacement: '+49 179 1700661' },
  { regex: /\+49 176\.\.\./g, replacement: '+49 179...' },
  { regex: /4917612345678/g, replacement: '491791700661' },

  // Address replacements
  { regex: /Kurfürstendamm 142 \(Musteradresse\)/g, replacement: 'Affenbergstr. 5' },
  { regex: /10707 Berlin/g, replacement: '74189 Weinsberg' },
  { regex: /Kurfürstendamm 142<br \/>\s*10707 Berlin/g, replacement: 'Affenbergstr. 5<br />\n74189 Weinsberg' },
];

findAndReplace(srcDir, replacements);
console.log('Replaced all contact info');
