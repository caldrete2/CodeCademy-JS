const encryptors = require('./encryptors');
const {caesarCipher, reverseCipher, symbolCipher} = encryptors;
const num = 10;

const encodeMessage = (str) => {
  return symbolCipher(reverseCipher(caesarCipher(str, num)));
}

const decodeMessage = (str) => {
  return caesarCipher(reverseCipher(symbolCipher(str)), num * -1);
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);
