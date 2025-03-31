function isPrime(n) {
    if (n < 2) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) return false; 
    }
    return true; 
}
let num = 17;
console.log(num + " là số nguyên tố? " + isPrime(num));

num = 20;
console.log(num + " là số nguyên tố? " + isPrime(num));
