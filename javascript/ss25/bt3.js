function displayEvenNumbers(arr) {
    let evenNumbers = arr.filter(num => num % 2 === 0);
    console.log("Các số chẵn trong mảng:", evenNumbers);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
displayEvenNumbers(numbers);
