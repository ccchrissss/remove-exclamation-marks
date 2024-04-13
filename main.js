function removeExclamationMarks(s) {
  
  return s.split('').filter( e => e != '!').join('')

}

console.log(removeExclamationMarks('hello! there!'))


// params: s    // a string
// return: newStr   // a string with all exclamation marks removed
// e.g. removeExclamationMarks('hello! there!')
// results in 'hello there'

// convert string to an array
// use filter method on the string to filter for elements which are not exclamation points
// join the array into a string
// return the result
