// The Fibonacci Exercise
// Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// Where every number is the sum of the two previous ones.

// e.g. 0, 1, 1, 2, 3, 5 comes from

// 0 + 1 = 1

// 1 + 1 = 2

// 1 + 2 = 3

// 2 + 3 = 5

// etc.

// Create a function where you can call it by writing the code:

// fibonacciGenerator (n)

// Where n is the number of items in the sequence.

// So I should be able to call:

// fibonacciGenerator(3) and get

// [0,1,1]

// as the output.

// IMPORTANT: The solution checker is expecting an array as the correct output.

// Do NOT change any of the existing code.

// You do NOT need any alerts or prompts, the result should be returned from the function as an output.

// The first two numbers in the sequence must be 0 and 1.

// Also, if you decide to create a for loop, make sure you explicitly specify var i = 0 rather than simply writing i = 0 . This is a quirk of the testing suite.

function fibonacciGenerator (n) {
  //Do NOT change any of the code above 👆


      //Write your code here:

      let seq = [0,1]

      if (n === 0 || n === 1) return [0]
      if(n === 2) return seq


      for (let i = 0 ; i < n - 2 ; i++){
          let num1 = seq[i]
          let num2 = seq[i + 1]
          seq.push(num1 + num2)

      }

      return seq

      //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
  }

  console.log(fibonacciGenerator(0))
  console.log(fibonacciGenerator(1))
  console.log(fibonacciGenerator(2))
  console.log(fibonacciGenerator(3))
  console.log(fibonacciGenerator(4))
  console.log(fibonacciGenerator(5))
  console.log(fibonacciGenerator(6))
  console.log(fibonacciGenerator(7))
  console.log(fibonacciGenerator(8))
  console.log(fibonacciGenerator(9))
  console.log(fibonacciGenerator(10))
  console.log(fibonacciGenerator(11))
  console.log(fibonacciGenerator(12))
  console.log(fibonacciGenerator(13))
  console.log(fibonacciGenerator(14))
  console.log(fibonacciGenerator(15))
