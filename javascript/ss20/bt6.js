let num = parseInt(prompt("Nhập vào một số nguyên:"));

while (isNaN(num) || num < 1) {
    alert("Vui lòng nhập một số nguyên dương hợp lệ!");
    num = parseInt(prompt("Nhập vào một số nguyên:"));
}

let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    alert(num + " là số nguyên tố.");
} else {
    alert(num + " không phải là số nguyên tố.");
}
