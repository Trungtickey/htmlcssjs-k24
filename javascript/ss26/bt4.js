function isPrime(num) {
    if (num < 2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimeNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        return "Dữ liệu không hợp lệ";
    }
    if (numbers.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let primeNumbers = numbers.filter(num => Number.isInteger(num) && isPrime(num));

    return primeNumbers;
}
console.log(filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17]));
console.log(filterPrimeNumbers([]));
console.log(filterPrimeNumbers("abc"));
