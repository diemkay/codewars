const numbers = [17, 3, 17, 17, 17, 17, 17];

function stray(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === numbers[index + 1]) {
      if (numbers[index] === numbers[index + 2]) {
      } else {
        return numbers[index + 2];
      }
    } else {
      return numbers[index];
    }
  }
}
