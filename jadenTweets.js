That Jaden Smith capitalization thing
const str = "How can mirrors be real if our eyes aren't real";
// take the string and turn it into an array of words with split
arrayofWords = str.split(" ");
console.log(arrayofWords);

// for each item in the array, capitalize the first letter
str.replace(/[a-z]/g, toUpper(item))

const numbers = [17, 3, 17, 17, 17, 17, 17];
function stray(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === numbers[index + 1]) {
      if (numbers[index] === numbers[index + 2]) {
      } else {
        return numbers[index + 2];
      };
    } else {
      return numbers[index];
    };
  }
}
