//This variable will contain the text you want to translate into “whale talk”.
const input = 'a whale of a deal!'
//Whales only speak in vowels so you need an array of vowels
const vowels = ['A', 'E', 'I', 'U', 'O']
//serve as a place to store the vowels from the input string.
const resultArray = []

const inputLen = input.length;
const vowelsLen = vowels.length;
//Create a loop to iterate through each letter of the input variable text
for(let i=0; i<inputLen; i++) {
  for(let j=0; j<vowelsLen; j++) {
    if(input[i].toLowerCase() === vowels[j].toLowerCase()) {
      let val = (input[i] === 'e' || input[i] === 'u')? 
        `${input[i]}${input[i]}`: input[i]
      resultArray.push(val.toUpperCase()) 
    }
  }
}
let str = resultArray.join('')

console.log(str)
