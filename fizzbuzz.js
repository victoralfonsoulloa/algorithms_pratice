// Print numbers from 1 to n
// If number is devisible by 3, print Fizz
// If number is divisble by 5, print Buzz
// If number is divisble by 3 and 5, print "FizzBuzzz"
// Else print the number

function fizzBuzz(n) {
  for (i = 1; i <= (n); i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(20);

