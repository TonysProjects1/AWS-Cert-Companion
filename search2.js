import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src/data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
  if (content.match(/core concept/i)) {
    console.log(`Found "core concept" in: ${file}`);
  }
  if (content.match(/optimize models/i)) {
    console.log(`Found "optimize models" in: ${file}`);
  }
}
