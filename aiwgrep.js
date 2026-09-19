/**
 * AI workshop grep
 * to run it we will need aiwgrep.js "Pattern" <filename>
 * node aiwgrep.js "ERROR" server.log
 */

const fs = require('fs');
const path = require ('path');

if(process.argv.length !== 4) {
  console.log ('Missing argument');
  console.log(`Usage: Node ${path.basename(process.argv[1])} <Pattern> <filename>`);
  return;
}

let filename = process.argv[3];
let pattern = process.argv[2];
let content = fs.readFileSync(filename,'utf-8')


let lines = content.split('\n') 
for (let line of lines) {
  if (line.includes(pattern)) {
    console.log(line);
  }
}
//console.log (content);
