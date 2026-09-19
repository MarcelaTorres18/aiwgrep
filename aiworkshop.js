/**
 * AI workshop grep + head
 * to run it we will need aiwhead.js "Pattern" <filename>
 * node aiwhead.js "ERROR" server.log
 */

const fs = require('fs');
const path = require('path');

if (process.argv.length !== 4) {
    console.log('Missing argument');
    console.log(`Usage: Node ${path.basename(process.argv[1])} <Pattern> <filename>`);
    return;
}

let filename = process.argv[3];
let pattern = process.argv[2];
let content = fs.readFileSync(filename, 'utf-8');

let lines = content.split('\n');

let count = 0;

for (let f = 0; f < lines.length; f++) {
    if (lines[f].includes(pattern)) {
        console.log(lines[f]);
        count++;

        if (count === 10) {
            break;
        }
    }
}
