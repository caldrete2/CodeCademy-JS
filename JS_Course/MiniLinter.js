/*
In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.
*/

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];
 //split the string into individual words
const storyWords = story.split(' ')
//There is an array of words that are unnecessary. Iterate over your array to filter out these words.
const betterWords = storyWords.filter(word => {
  if(unnecessaryWords.indexOf(word) === -1)
    return word 
})

//let the user of your program know how many times they have used the overused words
let wordCount = 0
storyWords.forEach(word => {
  if(overusedWords.indexOf(word) !== -1) { wordCount++ }
})

// count sentences in the paragraph.
let sentences = 0
storyWords.forEach(word => {
  let len = word.length
  if(word[len-1] === '.' || word[len-1] === '!') {
    sentences++
  }
})

console.log(`Word Count: ${storyWords.length}`)
console.log(`Overused Word Count: ${wordCount}`)
console.log(`Sentences: ${sentences}`)

console.log(betterWords.join(' '))



