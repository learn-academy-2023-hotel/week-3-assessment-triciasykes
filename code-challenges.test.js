// // ASSESSMENT 3: Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // describe("functionName", () => {
// //   it("say what function does", ()=> {
// //     expect(functionName(testVariable)).toEqual(expectedOutput)
// //   })
// // })

// // --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// // a) Create a test with expect statements for each of the variables provided.

// describe("fibByTwo", () => {
//   it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence", () => {
//     expect(fibByTwo(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibByTwo(fibonacciLength2)).toEqual([
//       1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
//     ])
//   })
// })

// const fibonacciLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Good fail:     ReferenceError: fibByTwo is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// create fxn using fibByTwo, takes a number as parameter
// create new varible newFibNum set to [1, 1]
// for loop where i=2: i<number; i++
// newFibNum[i] = newFibNum[i-1] + newFibNum[i-2]
// add el at current index -1 to el at current index -2
// return updated array newFibNum

// const fibByTwo = (number) => {
//   const newFibNum = [1, 1]

// //   for (let i = 2; i < number; i++) {
// //     nextFib = newFibNum[i - 1] + newFibNum[i - 2]
// //     newFibNum.push(nextFib)
// //   }
// //   return newFibNum
// // }
// //Kevin:
// const fibByTwo = (num) => {
//   let fibArray = []
//   let index = 0
//   if (num > 2) {
//     for (let i = 0; i < num + 1; i++) {
//       if (fibArray.includes(1)) {
//         let sum = fibArray[index] + fibArray[i - 1]
//         fibArray.push(sum)
//         index += 1
//       } else {
//         fibArray.push(i)
//       }
//     }
//   } else {
//     return "please enter number greater than 2"
//   }
//   fibArray.shift()
//   return fibArray
// }

// // Trish:

// const getFib = (length) => {
//   // create an empty array
//   const fibResult = []

//   for (let i = 0; i < length; i++) {
//     if (i < 2) {
//       fibResult.push(1)
//     } else {
//       fibResult.push(fibResult[i - 1] + fibResult[i - 2])
//     }
//   }
//   return fibResult
// }

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("objInOrder", () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest", () => {
    expect(objInOrder(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(objInOrder(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
// ReferenceError: objInOrder is not defined
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60,
}
// vals to array: [ 90, 30, 20, 15,30, 15, 60]
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65,
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
// Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// Pseudo code:
// get object values into an array - use Object.values
// empty array to store values
// for loop over obj values
// push values to empty array
// sort using .sort (a,b) => a-b
// return array

// Joseph K's very clean code
// const objInOrder = (object) => {
//   return Object.values(object).sort((a, b) => a - b)
// }

// breakdown

const objInOrder = (object) => {
  let values = Object.values(object)
  console.log("obj vals:", values)
  // obj vals: [ 90, 30, 20, 15,30, 15, 60]
  // use the .sort method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

  values.sort((a, b) => a - b)

  return values
}
