// The penultimate function takes a string as an argument and returns the
// next-to-last word in the string. The function assumes that "words" are any
// sequence of non-whitespace characters. The function also assumes that the
// input string will always contain at least two words. The penultimate function
// in the example below does not return the expected result. Run the code below,
// check the current result, identify the problem, explain what the problem is,
// and provide a working solution.

function penultimate(string) {
  let words = string.split(' ')
  return words[words.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

// This will return undefined both times. The reason is that JavaScript does not
// have negative indexing on arrays. Instead, `[-2]` will try to access the
// property on the object with the name `'-2'`. This does not exist, so it
// returns `undefined`.
