// https://www.codewars.com/kata/5888cba35194f7f5a800008b/train/javascript

// You are given a function that should insert an asterisk (*) between every pair of even digits in the given input, and return it as a string. If the input is a sequence, concat the elements first as a string.

// The input can be an integer, a string of digits or a sequence containing integers only.

// Return a string.

// 5312708     -->  "531270*8"
// "0000"      -->  "0*0*0*0"
// [1, 4, 64]  -->  "14*6*4"

function asteriscIt(n) {
  let normalizedInput;

  // Normalize the input to strings

  if (Array.isArray(n)) {
    normalizedInput = n.join('').split('');
  } else {
    normalizedInput = n.toString().split('');
  }

  let newArray = [];

  // Compare each element to the one to its right, and insert an asterisk between two even digits
  for (let i = 0; i < normalizedInput.length; i++) {
    if (normalizedInput[i] % 2 === 0 && normalizedInput[i + 1] % 2 === 0) {
      newArray.push(normalizedInput[i], '*');
    } else newArray.push(normalizedInput[i]);
  }

  return newArray.join('');
}

asteriscIt(153592814912405865);

asteriscIt([2, 4, 5, 205, 35, 301, 21]);
