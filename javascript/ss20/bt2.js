let n;
do {
    n = parseInt(prompt("Nhập một số nguyên dương:"));

    if (isNaN(n) || n <= 0) {
        alert("Số nhập vào không hợp lệ, vui lòng nhập lại!");
    }
} while (isNaN(n) || n <= 0);

let result = "Các số chia hết cho 5 từ 1 đến " + n + " là: ";


for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
        result += i + " ";
    }
}

alert(result);
