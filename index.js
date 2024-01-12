const numbers = [2,6,12,7,22,35]

let firstElement = numbers[0]
console.log(firstElement)
let lastElement = numbers[numbers.length-1]
console.log(lastElement)
let fourthElement = numbers[3]
console.log(fourthElement)
let secondElement = numbers[1]
let fifthElement = numbers[4]
let arr = [secondElement, fifthElement]
console.log(arr[0] + arr[1])
let arrLength = numbers.length
console.log('The length of the array is: ' + arrLength)
let num = numbers.push(42)  // Returns the length of the array
console.log(num)       
let num2 = numbers.unshift(42)  // Returns the length of the array
console.log(num2) 
let num3 = numbers.pop()    //Returns the number that was removed
console.log(num3) 
let num4 = numbers.shift()    //Returns the number that was removed
console.log(num4)
numbers.forEach(number => console.log(number))
