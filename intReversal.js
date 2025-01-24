function intReversal(number) {
  reversedNumber = parseInt(number.toString().split('').reverse().join(''));
  console.log(reversedNumber);
}

intReversal(654321);
