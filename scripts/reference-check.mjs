import {createHash} from 'node:crypto';
import {createReadStream, existsSync} from 'node:fs';
import {resolve} from 'node:path';

const target = resolve('reference/sarah-khalifa-reference.mp4');
const expected = 'b45b8ec04eeb5560e7f16aee5eed7aadc5dacf25e046740cecb76caa7c2a160e';

if (!existsSync(target)) {
  console.error(`Missing reference video: ${target}`);
  console.error('See reference/README.md.');
  process.exit(1);
}

const hash = createHash('sha256');
const stream = createReadStream(target);
stream.on('data', (chunk) => hash.update(chunk));
stream.on('end', () => {
  const actual = hash.digest('hex');
  if (actual !== expected) {
    console.error(`SHA-256 mismatch. Expected ${expected}, got ${actual}`);
    process.exit(1);
  }
  console.log('Reference video verified.');
});
