const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredEvenNumbers = numbers
  .map(num => num * num)       
  .filter(squaredNum => squaredNum % 2 === 0); 
console.log("Mảng sau khi bình phương và lọc số chẵn:");
console.log(squaredEvenNumbers);