// Read contents of the file directly from the hardrive
// this is becase we cant require in non js files
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts' , 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// takes in the source code and the number of the contracts
module.exports = solc.compile(source, 1).contracts[':Inbox'];