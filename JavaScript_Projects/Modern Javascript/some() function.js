const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some(num => num % 2 === 0); // true
const allPositive = numbers.every(num => num > 0); // true

console.log(hasEven); // Output: true
console.log(allPositive); // Output: true
