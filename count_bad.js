import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src/data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
  const lines = content.split('\n');
  let badCount = 0;
  for (let i=0; i<lines.length; i++) {
    if (lines[i].includes('explanation: "Incorrect."')) {
      badCount++;
    }
  }
  if (badCount > 0) {
    console.log(`File: ${file} => ${badCount} bad explanations`);
  }
}
